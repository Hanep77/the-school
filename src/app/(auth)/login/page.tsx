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
      email: (event.target as HTMLFormElement).email.value,
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
        <form onSubmit={authRequest} className="flex flex-col gap-2">
          <Input type="email" name="email" label="Email" required={true} />
          <Input type="password" name="password" label="Password" required={true} />
          <label htmlFor="role">Pilih role:</label>
          <select name="cars" id="cars" className="h-8 border border-zinc-300 rounded px-2">
            <option value="admin">Admin</option>
            <option value="guru">Guru</option>
          </select>
          <button type="submit" className="h-8 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
