"use client"

import { useState } from "react"

interface InputProps {
  type: string,
  name: string,
  label: string,
  defaultValue?: string
  error?: string,
  required?: boolean,
  disabled?: boolean
  className?: string
}

export default function Input({ type, name, label, error, required, disabled, className, defaultValue }: InputProps) {
  const [value, setValue] = useState<string | undefined>(name == "tanggal_lahir" ? defaultValue ?? "1970-01-01" : defaultValue);

  return <div>
    <div className={`bg-white relative w-full border ${error ? "border-red-500" : "border-zinc-400"} rounded pt-2`}>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full peer outline-none h-8 px-4 rounded"
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        required={required}
        disabled={disabled}
        defaultValue={value}
      />
      <label
        htmlFor={name}
        className={`${className} peer-focus:text-sm ${value && "-top-2 text-sm px-2"} peer-focus:-top-2 left-2 absolute transition-all cursor-text bg-white peer-focus:px-2 text-zinc-800`}>
        {label}
      </label>
    </div>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
}
