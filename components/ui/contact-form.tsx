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
  name: z.string().min(2, {message: "at least 2 letters"}).max(50, {message: "not more then 50 letters"}),
  reason: z.string().min(2, {message: "at least 2 letters"}).max(300, {message: "not more then 300 letters"}),
  contact: z.string().optional(),
});

import { actionResponse, sendResendMail } from "@/actions";
import { useToast } from "./use-toast";
import { useState } from "react";

const ContactForm = () => {

  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      reason: "",
      contact: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const response: actionResponse = await sendResendMail(values.name, values.reason, values.contact ?? "")

    toast({
      title: response.msg,
    })
    form.reset()
    setIsLoading(false)
  }

  return (
    <section className="flex justify-center mb-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 rounded-lg p-2 border border-none shadow-none max-w-[800px] w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md max-md:text-sm">Name</FormLabel>
                <FormControl>
                  <Input className="md:h-12 focus-within:ring-red-100" placeholder="Your name" {...field} />
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
                    className="md:h-[140px] h-[100px]"
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
                <FormLabel className="text-md max-md:text-sm">Contact Information</FormLabel>
                <FormControl>
                  <Input className="md:h-12 focus-within:ring-red-100" placeholder="" {...field} />
                </FormControl>
                <FormDescription>How can I reach you? e.g. email or mobile</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? <Button disabled type="submit">Submit</Button> : <Button type="submit">Submit</Button>}
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
