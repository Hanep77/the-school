"use client"

import { signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="w-full fixed text-cyan-800 border border-zinc-300">
      <div className="flex items-center justify-between h-16 bg-zinc-100 px-4">
        <h2 className="text-2xl mb-2 font-bold italic underline">The School</h2>
        <div>
          <div className="relative inline-block" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="h-10 w-10 bg-cyan-800 rounded-full focus:outline-none text-lg font-semibold text-white">A</button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-zinc-100 rounded overflow-hidden border border-zinc-300 p-2">
                <a href="/profile" className="flex items-center gap-1 p-2 text-gray-700 border-s-2 hover:border-cyan-800 mb-2"><BiUser /> Profile</a>
                <button onClick={() => signOut()} className="flex items-center gap-1 w-full text-left p-2 border-s-2 text-zinc-700 hover:border-cyan-800"><CiLogout />Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav >
  )
}
