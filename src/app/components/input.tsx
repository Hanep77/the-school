"use client"

import { useState } from "react"

interface InputProps {
  type: string,
  name: string,
  label: string,
  error?: string,
  required?: boolean,
  disabled?: boolean
}

export default function Input({ type, name, label, error, required, disabled }: InputProps) {
  const [value, setValue] = useState<string | null>(null)

  return <div className="relative w-full border border-zinc-400 rounded pt-2">
    {error && <p>{error}</p>}
    <input
      type={type}
      id={name}
      name={name}
      className="w-full peer outline-none h-8 px-4 rounded"
      onKeyUp={(e) => setValue((e.target as HTMLInputElement).value)}
      required={required}
      disabled={disabled}
    />
    <label
      htmlFor={name}
      className={`peer-focus:text-sm ${value && "-top-2 text-sm px-2"} peer-focus:-top-2 left-2 absolute transition-all cursor-text bg-white peer-focus:px-2 text-zinc-800`}>
      {label}
    </label>
  </div>
}
