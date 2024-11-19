"use client";

import { z } from "zod";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "at least 2 letters" })
    .max(50, { message: "not more then 50 letters" }),
  reason: z
    .string()
    .min(2, { message: "at least 2 letters" })
    .max(300, { message: "not more then 300 letters" }),
  contact: z.string().optional(),
});

import { actionResponse, sendResendMail } from "@/actions";
import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      reason: "",
      contact: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    handleClick()
    const response: actionResponse = await sendResendMail(
      values.name,
      values.reason,
      values.contact ?? "",
    );

    form.reset();
    setIsLoading(false);
  }

  const handleClick = () => {
    const end = Date.now() + 1 * 1000; // 3 seconds
    const colors = ["#ffde00", "#ead12f", "#c0c330", "#ff7300"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 1,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 1,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <section className="mb-20 flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[800px] space-y-8 rounded-lg border border-none p-2 shadow-none"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md max-md:text-sm">Name</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-zinc-500 md:h-12"
                    placeholder="Your name"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Who are you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md max-md:text-sm">Reason</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[100px] focus-visible:ring-zinc-500 md:h-[140px]"
                    placeholder="Hey I wanna hire you!"
                    {...field}
                  />
                </FormControl>
                <FormDescription>What is the reason of contact</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md max-md:text-sm">
                  Contact Information
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus-within:ring-red-100 focus-visible:ring-zinc-500 md:h-12"
                    placeholder=""
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  How can I reach you? e.g. email or mobile
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit" variant={"ringHover"}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
