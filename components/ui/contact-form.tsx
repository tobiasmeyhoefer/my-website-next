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
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const response: actionResponse = await sendResendMail(values.name, values.reason)

    toast({
      title: response.msg,
    })
    form.reset()
    setIsLoading(false)
  }

  return (
    <section className="flex justify-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 rounded-lg p-8 shadow-xl border border-neutral-300 max-w-[800px] w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Name</FormLabel>
                <FormControl>
                  <Input className="h-12" placeholder="John Doe" {...field} />
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
                <FormLabel className="text-md">Reason</FormLabel>
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
