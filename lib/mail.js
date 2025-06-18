require('dotenv').config();
const nodeMailer = require('nodemailer');
const sendGrid = require('@sendgrid/mail');
const { logger } = require('../utils/logger');

const sendEmail = async (body) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_Email || "8833aa001@smtp-brevo.com", 
      pass: process.env.SMTP_KEY || "8UZXbSCJyjRxsmPz" 
    }
  });
  try {
    const info = await transporter.sendMail(body);
    return console.log(`Message sent: ${info.response}`);
  } catch (err) {
    return console.log(`Problem sending email: ${err}`);
  }
};

const sendGridEmail = async (mailOptions) => {
  await sendGrid
    .send(mailOptions)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      logger.error(error);
    });
};

const sendGridMail = (mailOptions) => {
  switch (process.env.MAIL_PROVIDER) {
    case 'SEND_GRID':
      sendGridEmail(mailOptions);
      break;
    case 'NODE_MAILER':
      sendEmail(mailOptions);
      break;
    default:
      sendEmail(mailOptions);
      break;
  }
};

export { sendGridMail, sendGridEmail, sendEmail };
