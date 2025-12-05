// Mailchimp Email utilities
import mailchimp from '@mailchimp/mailchimp_transactional';

const mg = mailchimp(process.env.MAILCHIMP_API_KEY);

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const recipients = Array.isArray(options.to)
      ? options.to.map((email) => ({ email, type: 'to' }))
      : [{ email: options.to, type: 'to' }];

    await mg.messages.send({
      key: process.env.MAILCHIMP_API_KEY,
      message: {
        from_email: options.from || 'noreply@livingrite.care',
        to: recipients,
        subject: options.subject,
        html: options.html,
        text: options.text,
        reply_to: options.replyTo,
      },
    });
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
}

export async function subscribeToNewsletter(email: string): Promise<void> {
  try {
    const response = await fetch('https://api.mailchimp.com/3.0/lists/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending',
        list_id: process.env.MAILCHIMP_AUDIENCE_ID,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}

export const emailTemplates = {
  welcomeEmail: (name: string) => `
    <h1>Welcome to LivingRite Care, ${name}!</h1>
    <p>We're excited to have you as part of our community.</p>
    <p>Our care team is ready to support you every step of the way.</p>
  `,
  
  bookingConfirmation: (bookingDetails: any) => `
    <h1>Booking Confirmation</h1>
    <p>Your booking has been confirmed!</p>
    <p><strong>Date:</strong> ${bookingDetails.date}</p>
    <p><strong>Service:</strong> ${bookingDetails.service}</p>
  `,
  
  careUpdateNotification: (updateDetails: any) => `
    <h1>New Care Update</h1>
    <p>${updateDetails.title}</p>
    <p>${updateDetails.content}</p>
  `,
};
