"use client";

import { signOut } from "next-auth/react";

export default function Dashboard() {
  return (
    <div>
      <button type="button" onClick={() => signOut()}>logout</button>
    </div>
  )
}
