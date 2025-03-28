"use client";

import { axiosAuth } from "@/libs/axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { GiTeacher } from "react-icons/gi";
import { PiNotificationFill, PiStudent } from "react-icons/pi";

export default function Dashboard() {
  const tomorrow = Date.now() + 1 * 24 * 60 * 60 * 1000;
  const nextThreeDays = Date.now() + 3 * 24 * 60 * 60 * 1000;

  const { data: session, update } = useSession();

  const updateToken = async () => {
    const response = await axiosAuth.get("/refresh-token");
    await update({ ...session, token: response.data.credentials, expires: nextThreeDays })
  }

  useEffect(() => {
    if (!session?.expires) {
      return;
    }

    if (Date.now() > session.expires) {
      signOut();
      return;
    }

    if (tomorrow > session.expires) {
      updateToken();
    }
  }, []);


  return (
    <div className="p-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">SMA 1 Rahasia</h2>
      </div>

      {/* content */}
      <div className="overflow-x-auto flex gap-2">
        <div className="grid grid-cols-2 gap-2 w-1/2 text-center">
          <div className="bg-zinc-100 border border-zinc-300 rounded h-40 flex flex-col justify-center items-center">
            <div>
              <PiStudent className="m-auto text-3xl mb-1 text-cyan-800" />
              <h1 className="text-3xl font-bold">500</h1>
              <p className="text-lg text-zinc-700">Siswa</p>
            </div>
          </div>
          <div className="bg-zinc-100 border border-zinc-300 rounded h-40 flex flex-col justify-center items-center">
            <div>
              <GiTeacher className="m-auto text-3xl mb-1 text-cyan-800" />
              <h1 className="text-3xl font-bold">100</h1>
              <p className="text-lg text-zinc-700">Guru</p>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-300 rounded flex-grow p-4">
          <h3 className="flex items-center gap-1 text-lg font-bold text-cyan-800 mb-2"><PiNotificationFill className="text-xl" /> Pengumuman</h3>
          <div className="bg-cyan-800 bg-opacity-15 p-4 border border-cyan-800 rounded">
            <p>pengumuman libur sekolah setelah lebaran</p>
          </div>
        </div>
      </div>
      {/* end content */}
    </div>
  )
}
