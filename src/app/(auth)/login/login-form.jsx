"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody } from "@/schemaValidations/auth.schema";
import { RouteApi } from "@/utils/hbpro";


export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(LoginBody),
    defaultValues: {
        email: "",
        password: "",
    },
  });

  async function onSubmit(values) {
    const jsonData = await (new RouteApi()).post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, values)
    // const result = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
    //   body: JSON.stringify(values),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: "POST"
    // }).then(res => res.json())
    console.log(jsonData);
    
    // console.log(envConfig);
  }
  return (
    <div className="w-full max-w-[400px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Đăng nhập</Button>
        </form>
      </Form>
    </div>
  );
}