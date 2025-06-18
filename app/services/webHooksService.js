import dotenv from 'dotenv';
import { findPrice } from '../../src/data/pricing';
import { formatUnix } from '../../utils/date-format';
import { updateChurchStatus } from './churchService';
import { DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz, DATE_FORMAT_dd_MMM_YYYY } from '../../utils/date-constants';
import { sendEmail } from '../../lib/mail';
import { compileEmailTemplate } from '../templates/compile-email-template';
import { logger } from '../../utils/logger';
import { emailTemplates } from '../email';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

dotenv.config();

const invoicePaymentSuccess = async (event) => {
  try {
    const { lines, hosted_invoice_url, amount_paid, period_end } = event.data.object;

    if (!lines || !lines.data[0] || !lines.data[0].metadata) {
      logger.error(new Error('Invalid invoice data'));
    }

    const { contact, email, stripeCustomerId } = lines.data[0].metadata;
    const amountPaidInDollars = amount_paid * 0.01;
    const periodEndFormatted = formatUnix(period_end, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz);

    const html = await compileEmailTemplate(
      emailTemplates.invoicePaymentSuccess({
        hosted_invoice_url,
        email: email,
        amount_paid: amountPaidInDollars,
        periodEnd: periodEndFormatted,
        contact,
        contactEmail: process.env.CONTACT_EMAIL,
        contactMobile: process.env.CONTACT_MOBILE,
        team: process.env.TEAM
      })
    );

    await updateChurchStatus(stripeCustomerId, { status: 'active' });

    const mailOptions = {
      from: process.env.USER_NAME,
      to: email,
      subject: 'Invoice paid Successfully',
      text: 'Invoice paid Successfully',
      html
    };

    await sendEmail(mailOptions);
  } catch (error) {
    logger.error(error);
  }
};

const setDefaultPaymentMethod = async (event) => {
  try {
    if (event.data.object.billing_reason === 'subscription_create') {
      const subscription_id = event.data.object.subscription;
      const payment_intent_id = event.data.object.payment_intent;

      if (payment_intent_id != null) {
        const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id);
        await stripe.subscriptions.update(subscription_id, {
          default_payment_method: payment_intent.payment_method
        });
      }
    }
  } catch (error) {
    logger.error(error);
  }
};

const invoicePaymentFailed = async (event) => {
  try {
    const { lines, hosted_invoice_url, period_end } = event.data.object;
    if (!lines || !lines.data[0] || !lines.data[0].metadata) {
      logger.error(new Error('Invalid invoice data'));
    }

    const { contact, email, stripeCustomerId } = lines.data[0].metadata;

    const html = await compileEmailTemplate(
      emailTemplates.invoicePaymentFailed({
        hosted_invoice_url,
        period_end: formatUnix(period_end, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
        contact,
        team: process.env.TEAM
      })
    );

    await updateChurchStatus(stripeCustomerId, { status: 'suspended' });

    const mailOptions = {
      from: process.env.USER_NAME,
      to: `${email}`,
      subject: 'Invoice Payment Failed',
      text: 'Invoice Payment Failed',
      html
    };

    await sendEmail(mailOptions);
  } catch (error) {
    logger.error(error);
  }
};

const trialWillEnd = async (event) => {
  try {
    const { metadata, current_period_end } = event.data.object;
    const { contact, email } = metadata;

    const html = await compileEmailTemplate(
      emailTemplates.trialWillEnd({
        periodEnd: formatUnix(current_period_end, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
        contact,
        team: process.env.TEAM
      })
    );

    const mailOptions = {
      from: process.env.USER_NAME,
      to: `${email}`,
      subject: 'Trial Will Soon End',
      text: 'Trial Will Soon End',
      html
    };

    await sendEmail(mailOptions);
  } catch (error) {
    logger.error(error);
  }
};

const updateSubscription = async (event) => {
  try {
    const live = process.env.NODE_ENV === 'production';
    const { metadata, plan, current_period_end, current_period_start, id, status } = event.data.object;
    const { email, contact, stripeCustomerId } = metadata;
    const { price, billingCycle, planName } = findPrice(plan.id, false);

    const html = await compileEmailTemplate(
      emailTemplates.updateSubscription({
        contact,
        price,
        plan: planName,
        billingCycle,
        contactEmail: process.env.CONTACT_EMAIL,
        contactMobile: process.env.CONTACT_MOBILE,
        team: process.env.TEAM
      })
    );

    await updateChurchStatus(stripeCustomerId, {
      plan: planName,
      startDate: formatUnix(current_period_start, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
      endDate: formatUnix(current_period_end, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
      priceId: plan?.id,
      status: status,
      subscriptionId: id
    });

    const mailOptions = {
      from: process.env.USER_NAME,
      to: `${email}`,
      subject: 'Subscription Update',
      text: 'Subscription Update',
      html
    };

    if (status === 'active') {
      await sendEmail(mailOptions);
    }
  } catch (error) {
    logger.error(error);
  }
};
const createSubscription = async (event) => {
  try {
    const live = process.env.NODE_ENV === 'production';
    const { metadata, plan } = event.data.object;
    const { email, contact } = metadata;
    const { price, billingCycle, planName, duration } = findPrice(plan.id, false);

    const html = await compileEmailTemplate(
      emailTemplates.subscriptionWelcomeMessage({
        userName: email,
        contact,
        price,
        plan: planName,
        url: process.env.LOGIN_URL,
        billingCycle,
        contactEmail: process.env.CONTACT_EMAIL,
        team: process.env.TEAM,
        duration: duration,
        password: '#12345!'
      })
    );

    const mailOptions = {
      from: process.env.USER_NAME,
      to: `${email}`,
      subject: 'Welcome to Snatchi',
      text: 'Welcome to Snatchi',
      html
    };

    await sendEmail(mailOptions);
  } catch (error) {
    logger.error(error);
  }
};
const cancelSubscription = async (event) => {
  try {
    const { metadata, current_period_end, current_period_start } = event.data.object;
    const { contact, email, stripeCustomerId } = metadata;

    const html = await compileEmailTemplate(
      emailTemplates.subscriptionCancellation({
        contact,
        periodEnd: formatUnix(current_period_end, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
        contactEmail: process.env.CONTACT_EMAIL,
        contactMobile: process.env.CONTACT_MOBILE,
        team: process.env.TEAM
      })
    );

    await updateChurchStatus(stripeCustomerId, {
      startDate: formatUnix(current_period_start, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
      endDate: formatUnix(current_period_end, DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz),
      status: 'cancelled'
    });

    const mailOptions = {
      from: process.env.USER_NAME,
      to: `${email}`,
      subject: 'Subscription Cancelled',
      text: 'Subscription Cancelled',
      html
    };

    await sendEmail(mailOptions);
  } catch (error) {
    logger.error(error);
  }
};
const cancelTrial = async (event) => {
  try {
    const { metadata, current_period_end } = event.data.object;
    const { contact, email, stripeCustomerId } = metadata;

    const html = await compileEmailTemplate(
      emailTemplates.trialCancellation({
        contact,
        periodEnd: formatUnix(current_period_end, DATE_FORMAT_dd_MMM_YYYY),
        contactEmail: process.env.CONTACT_EMAIL,
        contactMobile: process.env.CONTACT_MOBILE,
        team: process.env.TEAM
      })
    );

    await updateChurchStatus(stripeCustomerId, {
      endDate: formatUnix(current_period_end, DATE_FORMAT_dd_MMM_YYYY),
      status: 'cancelled'
    });

    const mailOptions = {
      from: process.env.USER_NAME,
      to: `${email}`,
      subject: 'Trial Cancelled',
      text: 'Trial Cancelled',
      html
    };

    await sendEmail(mailOptions);
  } catch (error) {
    logger.error(error);
  }
};

export {
  trialWillEnd,
  cancelTrial,
  cancelSubscription,
  createSubscription,
  updateSubscription,
  invoicePaymentFailed,
  setDefaultPaymentMethod,
  invoicePaymentSuccess
};
