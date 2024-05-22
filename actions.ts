"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type actionResponse = {
  msg: string
}

export async function sendResendMail(
  senderName: string,
  reason: string,
  contact: string
): Promise<actionResponse> {
  const { data, error } = await resend.emails.send({
    from: "noreply@tobiasmeyhoefer.de",
    to: ["tobias.meyhoefer02@gmail.com"],
    subject: "Kontaktanfrage von " + senderName,
    text: reason + "\n\n" + "Kontakt:" + contact,
  });

  console.log(error)
  if (error) {
    return { msg: "Something went wrong ❌" };
  }

  return {msg: "Email sent ✅"}
}
