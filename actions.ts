"use server";

import 'server-only';
import { Resend } from "resend";
import { formSchema } from './components/ui/contact-form';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export type actionResponse = {
  msg: string;
};

export async function sendResendMail(
  values: z.infer<typeof formSchema>
): Promise<actionResponse> {
  const wordCount = values.reason.split(" ").length;
  if (wordCount < 6) {
    console.error("To short message!")
    return { msg: "To short message!" };
  }
  const { data, error } = await resend.emails.send({
    from: "noreply@tobiasmeyhoefer.de",
    to: ["tobitacklestech@gmail.com"],
    subject: "Kontaktanfrage von " + values.name,
    text: "contact request from" + values.name + "\n\n" + values.reason + "\n\n" + "Kontakt:" + values.contact + "\n\n" + values.isSponsorship + "\n\n" + values.companyWebsite,
  });

  if (error) {
    console.log(error);
    return { msg: "Something went wrong ❌" };
  }

  return { msg: "Email sent ✅" };
}
