"use client";

import { z } from "zod";
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
import { useToast } from "./use-toast";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
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
    const response: actionResponse = await sendResendMail(
      values.name,
      values.reason,
      values.contact ?? "",
    );

    toast({
      title: response.msg,
    });
    form.reset();
    setIsLoading(false);
  }

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
                    className="focus-within:ring-red-100 md:h-12"
                    placeholder="Your name"
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
                    className="h-[100px] md:h-[140px]"
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
                    className="focus-within:ring-red-100 md:h-12"
                    placeholder=""
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
          {isLoading ? (
            <Button
              className="motion-duration-[0.15s]/blur motion-duration-[0.68s]/opacity motion-duration-[1.20s]/rotate motion-delay-[0.38s]/blur motion-delay-[0.38s]/scale motion-ease-spring-bouncier motion-scale-in-[0.5] motion-translate-x-in-[-480%] motion-translate-y-in-[-300%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-opacity-in-[33%] "
              disabled
              type="submit"
            >
              Send
            </Button>
          ) : (
            <Button
              className="motion-duration-[0.15s]/blur motion-duration-[0.68s]/opacity motion-duration-[1.20s]/rotate motion-delay-[0.38s]/blur motion-delay-[0.38s]/scale motion-ease-spring-bouncier motion-scale-in-[0.5] motion-translate-x-in-[-480%] motion-translate-y-in-[-300%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-opacity-in-[33%]"
              type="submit"
              variant={"ringHover"}
            >
              Submit
            </Button>
          )}
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
