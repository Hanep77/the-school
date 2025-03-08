"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiswaType } from "../../page";
import axios from "axios";
import { useSession } from "next-auth/react";
import { UserType } from "@/libs/nextauth";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function Detail() {
  const [siswa, setSiswa] = useState<SiswaType | null>(null);
  const session = useSession();

  useEffect(() => {
    const token = (session?.data?.user as UserType).token;
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/siswa?page=1&length=10", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const siswaId = "9e78678a-33e7-4261-b1c3-2ce7f77485da";
        const datasiswa = response.data.data.find((data: SiswaType) => data.id == siswaId);
        const formattedDate = format(new Date(datasiswa.tanggal_lahir), "dd MMMM yyyy", { locale: id });
        const siswa = ({ ...datasiswa, tanggal_lahir: formattedDate });
        setSiswa(siswa);
      })
  }, []);

  return <div className="px-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/siswa"}>Siswa</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={""}>Detail</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Detail Siswa</h2>
    </div>
    {/* end page header */}

    {/* content */}
    <div className="bg-zinc-100 p-4 mb-4 border border-zinc-300 rounded overflow-x-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-zinc-500">Nama</p>
          <h3 className="text-xl">{siswa?.nama_lengkap}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Nama Panggilan</p>
          <h3 className="text-xl">{siswa?.nama_panggilan}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Alamat</p>
          <h3 className="text-xl">{siswa?.alamat_tinggal}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Email</p>
          <h3 className="text-xl">{siswa?.email}</h3>
        </div>
        <div>
          <p className="text-zinc-500">No Telepon</p>
          <h3 className="text-xl">{siswa?.no_telepon}</h3>
        </div>
        <div>
          <p className="text-zinc-500">NIS</p>
          <h3 className="text-xl">{siswa?.nis}</h3>
        </div>
        <div>
          <p className="text-zinc-500">NISN</p>
          <h3 className="text-xl">{siswa?.nisn}</h3>
        </div>
        <div>
          <p className="text-zinc-500">NIK</p>
          <h3 className="text-xl">{siswa?.nik}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Kewarganegaraan</p>
          <h3 className="text-xl">{siswa?.kewarga_negaraan}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Bahasa</p>
          <h3 className="text-xl">{siswa?.bahasa}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Tempat Lahir</p>
          <h3 className="text-xl">{siswa?.tempat_lahir}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Tanggal Lahir</p>
          <h3 className="text-xl">{siswa?.tanggal_lahir}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Golongan Darah</p>
          <h3 className="text-xl">{siswa?.golongan_darah}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Agama</p>
          <h3 className="text-xl">{siswa?.agama}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Berat Badan</p>
          <h3 className="text-xl">{siswa?.berat_badan}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Tinggi Badan</p>
          <h3 className="text-xl">{siswa?.tinggi_badan}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Jumlah Saudara Kandung</p>
          <h3 className="text-xl">{siswa?.jumlah_saudara_kandung}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Jumlah Saudara Tiri</p>
          <h3 className="text-xl">{siswa?.jumlah_saudara_kandung}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Jumlah Saudara Angkat</p>
          <h3 className="text-xl">{siswa?.jumlah_saudara_kandung}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Anak Ke</p>
          <h3 className="text-xl">{siswa?.anak_ke}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Type</p>
          <h3 className="text-xl">{siswa?.types}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Pindahan</p>
          <h3 className="text-xl">{siswa?.pindahan ? "Ya" : "Tidak"}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Aktif</p>
          <h3 className="text-xl">{siswa?.is_active ? "Ya" : "Tidak"}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Gender</p>
          <h3 className="text-xl">{siswa?.gender == "L" ? "Laki-laki" : "Perempuan"}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Memiliki Penyakit Berat</p>
          <h3 className="text-xl">{siswa?.penyakit_berat ? "Ya" : "Tidak"}</h3>
        </div>
        <div>
          <p className="text-zinc-500">Keterangan Penyakit</p>
          <h3 className="text-xl">{siswa?.keterangan_penyakit}</h3>
        </div>
      </div>
    </div>
    {/* end content */}
  </div>
}
