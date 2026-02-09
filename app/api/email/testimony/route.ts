
import { errorHandler } from '@/utils/errors';
import { sendBrevoEmail } from '@/lib/mail';
import { emailTemplates } from '@/email';
import { compileEmailTemplate } from '@/templates/compile-email-template';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const {email, first_name, last_name, message } = body;

    const template = await compileEmailTemplate(
      emailTemplates.testimonySubmission({
        firstName: first_name,
        lastName: last_name,
        message : message,
        email: email,
        teamName: process.env.TEAM
      })
    );

    const mailOptions = {
      sender:{email:process.env.USER_NAME, name: 'Jerur'},
      to: [{email :email}],
      subject: `New Testimony Shared: ${first_name} ${last_name}`,
      textContent: template,
      htmlContent :template
    };
   
    await sendBrevoEmail(mailOptions) 
    return NextResponse.json({ data: true }, { status: 200 });
  } catch (err) {    
    return NextResponse.json(
      {
        error: errorHandler(err) || 'An unknown error occurred'
      }), { status: 500 };
  }
}
