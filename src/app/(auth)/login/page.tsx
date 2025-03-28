"use client";

import Input from "@/app/components/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";

export default function Login() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status == 'authenticated') {
      router.push('/dashboard');
    }
  }, [session]);

  const authRequest = (event: FormEvent) => {
    event.preventDefault();
    const user = {
      username: (event.target as HTMLFormElement).username.value,
      password: (event.target as HTMLFormElement).password.value,
    };

    signIn('credentials', {
      ...user,
      redirect: false
    })
      .then((callback) => {
        if (callback?.error) {
          alert('Invalid Credentials');
        }

        if (callback?.ok) {
          router.push('/dashboard');
        }
      })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-5 shadow bg-white rounded w-80">
        <h4 className="text-2xl text-center font-semibold mb-5">Sign in</h4>
        <form onSubmit={authRequest} className="flex flex-col gap-3">
          <Input type="text" name="username" label="Username" required={true} />
          <Input type="password" name="password" label="Password" required={true} />
          <button type="submit" className="h-10 bg-cyan-800 hover:bg-cyan-700 active:bg-cyan-600 text-white rounded">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
