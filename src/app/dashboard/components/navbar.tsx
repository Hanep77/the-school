"use client"

import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="w-full fixed text-white">
      <div className="flex items-center justify-between h-16 bg-gradient-to-r from-cyan-800 to-cyan-900 px-4">
        <h2 className="text-2xl mb-2 font-bold italic underline">The School</h2>
        <button type="button" onClick={() => signOut()} className="flex items-center text-lg bg-red-600 rounded-full px-2 py-1"><CiLogout />logout</button>
      </div>
    </nav>
  )
}
