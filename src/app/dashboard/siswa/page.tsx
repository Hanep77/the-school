"use client"

import Link from "next/link"
import { BiEdit, BiTrash } from "react-icons/bi"
import { MdKeyboardArrowRight } from "react-icons/md"
import FilterDropdown from "../components/filterdropdown"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { UserType } from "@/libs/nextauth"

export type SiswaType = {
  id?: string;
  sekolah_id?: string;
  nik: string;
  nisn: string;
  nis: string;
  email: string;
  nama_lengkap: string;
  nama_panggilan: string;
  gender: "L" | "P";
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: string;
  kewarga_negaraan: string;
  bahasa: string;
  berat_badan: number;
  tinggi_badan: number;
  golongan_darah: "A" | "B" | "AB" | "O" | null;
  penyakit_berat: boolean;
  keterangan_penyakit: string | null;
  foto: string;
  anak_ke: number;
  jumlah_saudara_kandung: number;
  jumlah_saudara_tiri: number;
  jumlah_saudara_angkat: number;
  alamat_tinggal: string;
  no_telepon: string;
  types: string;
  pindahan: boolean;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
};

export default function Siswa() {
  const [data, setData] = useState<SiswaType[]>([]);
  const session = useSession();

  useEffect(() => {
    const token = (session?.data?.user as UserType).token;
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/siswa?page=1&length=10", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((data) => {
        setData(data.data.data);
      })
  }, []);

  return (
    <div className="px-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/dashboard"}>Dashboard</Link>
        <MdKeyboardArrowRight className="text-xl" />
        <Link href={"/dashboard/guru"}>Siswa</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">Siswa</h2>
        <Link href="/dashboard/siswa/create" className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600">+ Add</Link>
      </div>
      {/* end page header */}

      {/* filter */}
      <div className="flex gap-2">
        <form>
          <input type="text" name="search" placeholder="search..." className="h-8 px-2 rounded outline-none border border-zinc-300" />
        </form>
        <FilterDropdown label="Kelas" values={["RPL A", "RPL B"]} />
        <FilterDropdown label="Tingkat" values={["X", "XI", "XII"]} />
      </div>
      {/* end filter */}

      {/* content */}
      <div className="bg-zinc-100 border border-zinc-300 rounded overflow-x-auto">
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
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6 whitespace-nowrap">{item.nama_lengkap}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.nis}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.nisn}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.gender == "L" ? "Laki-laki" : "Perempuan"}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.agama}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.tanggal_lahir}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.alamat_tinggal}</td>
                <td className="py-3 px-6 whitespace-nowrap"><Link href={"/dashboard/siswa/" + item.id} className="text-blue-500 underline italic">lihat selengkapnya</Link></td>
                <td className="flex gap-2 text-xl py-3 px-6">
                  <button type="button" className="text-yellow-500"><BiEdit /></button>
                  <button type="button" className="text-red-500"><BiTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* end content */}

      {/* pagination */}
      <div className="flex flex-col items-center my-2">
        <span className="text-sm text-cyan-800">
          Showing <span className="font-semibold">1</span> to <span className="font-semibold">10</span> of <span className="font-semibold">100</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-cyan-800 rounded-s hover:bg-cyan-900">
            Prev
          </button>
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-cyan-800 rounded-e hover:bg-cyan-900">
            Next
          </button>
        </div>
      </div>
      {/* end pagination */}
    </div>
  )
}
