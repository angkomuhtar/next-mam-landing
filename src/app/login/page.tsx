"use client";
import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LoginSchema } from "@/schema";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { FormAlert } from "@/components/form-alert";
import { loginAction } from "@/actions/login";
import { useState, useTransition } from "react";
import { error } from "console";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState({ error: "", success: "" });

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      setStatus({ error: "", success: "" });
      loginAction(data).then((res) => {
        if (res.success) {
          setStatus({ error: "", success: res.message });
        } else {
          setStatus({ error: res.message, success: "" });
        }
      });
    });
  };

  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm md:max-w-3xl'>
        <div className={cn("flex flex-col gap-6")}>
          <Card className='overflow-hidden p-0'>
            <CardContent className='grid p-0 md:grid-cols-2'>
              <Form {...form}>
                <form
                  className='p-6 md:p-8'
                  onSubmit={form.handleSubmit(onSubmit)}>
                  <div className='flex flex-col gap-6'>
                    <div className='flex flex-col items-center text-center'>
                      <h1 className='text-2xl font-bold'>Welcome back</h1>
                      <p className='text-muted-foreground text-balance'>
                        Login to your Acme Inc account
                      </p>
                    </div>
                    <FormField
                      name='email'
                      control={form.control}
                      render={({ field }) => (
                        <div className='grid gap-3'>
                          <Label htmlFor='email'>Email</Label>
                          <Input
                            {...field}
                            id='email'
                            type='email'
                            placeholder='m@example.com'
                            disabled={isPending}
                            required
                          />
                          <FormMessage className='text-xs text-red-500' />
                        </div>
                      )}
                    />
                    <FormField
                      name='password'
                      control={form.control}
                      render={({ field }) => (
                        <div className='grid gap-3'>
                          <div className='flex items-center'>
                            <Label htmlFor='password'>Password</Label>
                            <a
                              href='#'
                              className='ml-auto text-sm underline-offset-2 hover:underline'>
                              Forgot your password?
                            </a>
                          </div>
                          <Input
                            id='password'
                            {...field}
                            type='password'
                            required
                            disabled={isPending}
                          />
                          <FormMessage className='text-xs text-red-500' />
                        </div>
                      )}
                    />
                    <FormAlert message={status.error} />
                    <Button
                      type='submit'
                      className='w-full'
                      disabled={isPending}>
                      Login
                    </Button>
                  </div>
                </form>
              </Form>
              <div className='bg-muted relative hidden md:block border-l'>
                <img
                  src='/login.jpg'
                  alt='Image'
                  className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
