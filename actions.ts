"use server";

import 'server-only';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type actionResponse = {
  msg: string;
};

export async function sendResendMail(
  senderName: string,
  reason: string,
  contact: string,
): Promise<actionResponse> {
  const wordCount = reason.split(" ").length;
  if (wordCount < 6) {
    console.error("To short message!")
    return { msg: "To short message!" };
  }
  const { data, error } = await resend.emails.send({
    from: "noreply@tobiasmeyhoefer.de",
    to: ["tobitacklestech@gmail.com"],
    subject: "Kontaktanfrage von " + senderName,
    text: reason + "\n\n" + "Kontakt:" + contact,
  });

  if (error) {
    console.log(error);
    return { msg: "Something went wrong ❌" };
  }

  return { msg: "Email sent ✅" };
}
