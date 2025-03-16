"use client"

import { useEffect, useState } from "react";
import { SiswaType } from "../siswa/page";
import DeleteButton from "./deleteButton";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { useSession } from "next-auth/react";

interface TableProps {
  data: SiswaType[]
}

export default function Table({ data }: TableProps) {
  const [siswa, setSiswa] = useState<SiswaType[]>(data);
  const session = useSession();

  useEffect(() => {
    setSiswa(data);
  }, [data]);

  return <div className="bg-zinc-100 border border-zinc-300 rounded overflow-x-auto">
    <table className="table w-full text-sm text-left rtl:text-right">
      <thead className="">
        <tr>
          <th className="py-3 px-6">Nama</th>
          <th className="py-3 px-6">NIS</th>
          <th className="py-3 px-6">NISN</th>
          <th className="py-3 px-6">Gender</th>
          <th className="py-3 px-6">Agama</th>
          <th className="py-3 px-6">Tanggal Lahir</th>
          <th className="py-3 px-6">Alamat</th>
          <th className="py-3 px-6">Detail</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody className="text-zinc-600">
        {siswa.map((item: SiswaType, index: number) => (
          <tr key={index} className="border-b">
            <td className="py-3 px-6 whitespace-nowrap">{item.nama_lengkap}</td>
            <td className="py-3 px-6 whitespace-nowrap">{item.nis}</td>
            <td className="py-3 px-6 whitespace-nowrap">{item.nisn}</td>
            <td className="py-3 px-6 whitespace-nowrap">{item.gender == "L" ? "Laki-laki" : "Perempuan"}</td>
            <td className="py-3 px-6 whitespace-nowrap">{item.agama}</td>
            <td className="py-3 px-6 whitespace-nowrap">{item.tanggal_lahir}</td>
            <td className="py-3 px-6 whitespace-nowrap">{item.alamat_tinggal}</td>
            <td className="py-3 px-6 whitespace-nowrap"><Link href={"/dashboard/siswa/details/" + item.id} className="text-blue-500 underline italic">lihat selengkapnya</Link></td>
            <td className="flex gap-2 text-xl py-3 px-6">
              <button type="button" className="text-yellow-500"><BiEdit /></button>
              <DeleteButton url="/siswa" id={item.id} action={setSiswa} token={session.data?.token} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}
