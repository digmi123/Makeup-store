import { cookies } from "next/headers";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import authOptions from "../[...nextauth]/authOptions";
import { Input } from "@/components/ui/input";

//making the callback only when the csrfToken is available if there is not csrf token the page callback is jibrish.
export default async function login() {
  const { providers } = authOptions;

  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.csrf-token");
  const csrfToken = token?.value.split("|")[0];
  return (
    <div className="w-full min-h-calc(100dvh - var(--header-height)) min-h-calc(100vh - var(--header-height)) flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Makeup yourself</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            method="post"
            action="/api/auth/callback/credentials?callbackUrl=/products"
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password">password</label>
                <Input
                  id="password"
                  placeholder="Password"
                  name="password"
                  type="password"
                />
              </div>
            </div>

            <CardFooter className="flex justify-between">
              <Button>Register</Button>
              <Button type="submit">Sign in</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
