"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResendMail(senderMail: string, reason: string) {
  const { data } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello World",
    text: `<div><h1 className='my-8 font-bold text-3xl'>Email von, ${senderMail}!</h1><p>${reason}</p></div>`,
  });
}
