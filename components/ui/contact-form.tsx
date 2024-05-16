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
  name: z.string().min(2).max(50),
  reason: z.string().min(2).max(300),
});

import { sendResendMail } from "@/actions";
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
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    await sendResendMail(values.name, values.reason)
    toast({
      title: "Email sent ✅",
    })
    setIsLoading(false)
  }

  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 rounded-lg p-6 shadow-lg "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>What is your name?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[140px]"
                    placeholder="..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>What is the reason of contact</FormDescription>
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