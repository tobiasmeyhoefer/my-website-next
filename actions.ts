"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type actionResponse = {
  msg: string
}

export async function sendResendMail(
  senderMail: string,
  reason: string,
): Promise<actionResponse> {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["angryobi02@gmail.com"],
    subject: "Kontaktanfrage von " + senderMail,
    text: reason,
  });

  if (error) {
    return { msg: "Something went wrong ❌" };
  }

  return {msg: "Email sent ✅"}
}
