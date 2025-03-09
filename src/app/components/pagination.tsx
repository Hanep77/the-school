"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  previous: number;
  next: number;
  total: number;
  length: number;
  current: number;
}

export default function Pagination({ previous, next, total, length, current }: PaginationProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center my-2">
      <span className="text-sm text-cyan-800">
        Page <span className="font-semibold">{current}</span> out of <span className="font-semibold">{total}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white rounded-s bg-cyan-800 disabled:opacity-75 ${current != 1 && "hover:bg-cyan-900"}`}
          onClick={() => router.push("?page=" + previous + "&length=" + length)}
          disabled={current == 1}
        >
          Prev
        </button>
        <button
          className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-cyan-800 rounded-e disabled:opacity-75 ${current != total && "hover:bg-cyan-900"}`}
          onClick={() => router.push("?page=" + next + "&length=" + length)}
          disabled={current == total}
        >
          Next
        </button>
      </div>
    </div>
  )
}
