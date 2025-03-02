"use client";

import Input from "@/app/components/input";
import Link from "next/link";
import { FormEvent } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiswaType } from "../page";
import axios from "axios";
import { useSession } from "next-auth/react";
import { UserType } from "@/libs/nextauth";

export default function Create() {
  const session = useSession();

  const addSiswa = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const siswa: SiswaType = {
      nik: target.nik.value,
      nisn: target.nisn.value,
      nis: target.nis.value,
      email: target.email.value,
      nama_lengkap: target.nama_lengkap.value,
      nama_panggilan: target.nama_panggilan.value,
      gender: target.gender.value,
      tempat_lahir: target.tempat_lahir.value,
      tanggal_lahir: target.tanggal_lahir.value,
      agama: target.agama.value,
      kewarga_negaraan: target.kewarga_negaraan.value,
      bahasa: target.bahasa.value,
      berat_badan: Number(target.berat_badan.value),
      tinggi_badan: Number(target.tinggi_badan.value),
      golongan_darah: target.golongan_darah.value,
      penyakit_berat: Boolean(target.penyakit_berat.value),
      keterangan_penyakit: target.keterangan_penyakit.value,
      foto: target.foto.value,
      anak_ke: Number(target.anak_ke.value),
      jumlah_saudara_kandung: Number(target.jumlah_saudara_kandung.value),
      jumlah_saudara_tiri: Number(target.jumlah_saudara_tiri.value),
      jumlah_saudara_angkat: Number(target.jumlah_saudara_angkat.value),
      alamat_tinggal: target.alamat.value,
      no_telepon: target.no_telepon.value,
      types: target.types.value,
      pindahan: Boolean(target.pindahan.value),
      is_active: Boolean(target.is_active.value),
    };

    const token = (session?.data?.user as UserType).token;
    axios.post("https://the-school-beta.vercel.app/api/v1/siswa", siswa, { headers: { Authorization: `Bearer ${token}` } });
  }

  return <div className="px-4 pb-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/guru"}>Siswa</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/guru/create"}>Create</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Buat Data Siswa</h2>
    </div>
    {/* end page header */}

    {/* form */}
    <form onSubmit={addSiswa}>
      <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded border border-zinc-300">
        <Input
          type="text"
          name="nama_lengkap"
          label="Nama Lengkap"
          required
        />
        <Input
          type="text"
          name="nama_panggilan"
          label="Nama Panggilan"
        />
        <textarea rows={2} className="col-span-2 border border-zinc-400 rounded p-2" placeholder="Alamat" name="alamat"></textarea>
        <Input
          type="email"
          name="email"
          label="Email"
        />
        <Input
          type="number"
          name="no_telepon"
          label="Nomor Telepon"
        />
        <Input
          type="text"
          name="nis"
          label="NIS"
          required
        />
        <Input
          type="text"
          name="nisn"
          label="NISN"
          required
        />
        <Input
          type="number"
          name="nik"
          label="NIK"
          required
        />
        <Input
          type="text"
          name="kewarga_negaraan"
          label="Kewarganegaraan"
          required
        />
        <Input
          type="text"
          name="bahasa"
          label="Bahasa"
          required
        />
        <Input
          type="text"
          name="tempat_lahir"
          label="Tempat Lahir"
          required
        />
        <Input
          type="date"
          name="tanggal_lahir"
          label="Tanggal Lahir"
          className="pb-1 pe-6"
          required
        />
        <div>
          <select name="golongan_darah" className="w-full h-full px-2 bg-white border border-zinc-400 rounded" required>
            <option>Golongan Darah</option>
            <option value={"A"}>A</option>
            <option value={"B"}>B</option>
            <option value={"AB"}>AB</option>
            <option value={"O"}>O</option>
          </select>
        </div>
        <div>
          <select name="agama" className="w-full h-full px-2 bg-white border border-zinc-400 rounded" required>
            <option>Agama</option>
            <option value={"Islam"}>Islam</option>
            <option value={"Protestan"}>Protestan</option>
            <option value={"Katolik"}>Katolik</option>
            <option value={"Khonghuchu"}>Khonghuchu</option>
            <option value={"Hindu"}>Hindu</option>
            <option value={"Budha"}>Budha</option>
          </select>
        </div>
        <Input
          type="number"
          name="berat_badan"
          label="Berat Badan"
          required
        />
        <Input
          type="number"
          name="tinggi_badan"
          label="Tinggi Badan"
          required
        />
        <Input
          type="number"
          name="jumlah_saudara_kandung"
          label="Jumlah Saudara Kandung"
          required
        />
        <Input
          type="number"
          name="jumlah_saudara_tiri"
          label="Jumlah Saudara Tiri"
          required
        />
        <Input
          type="number"
          name="jumlah_saudara_angkat"
          label="Jumlah Saudara Angkat"
          required
        />
        <Input
          type="number"
          name="anak_ke"
          label="anak ke"
          required
        />
        <div>
          <select name="types" className="w-full h-full px-2 bg-white border border-zinc-400 rounded" required>
            <option>type</option>
            <option value={"baru"}>baru</option>
          </select>
        </div>
        <div className="flex h-10 items-center gap-5 border px-2 border-zinc-400 rounded">
          <p>pindahan? </p>
          <div className="flex items-center gap-2">
            <input type="radio" id="pindahanTrue" name="pindahan" value="true" />
            <label htmlFor="pindahanTrue">True</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="pindahanFalse" name="pindahan" value="true" />
            <label htmlFor="pindahanFalse">false</label>
          </div>
        </div>
        <div className="flex h-10 items-center gap-5 border px-2 border-zinc-400 rounded">
          <p>aktif? </p>
          <div className="flex items-center gap-2">
            <input type="radio" id="aktifTrue" name="is_active" value="true" />
            <label htmlFor="aktifTrue">True</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="aktifFalse" name="is_active" value="true" />
            <label htmlFor="aktifFalse">false</label>
          </div>
        </div>
        <div className="flex h-10 items-center gap-5 border px-2 border-zinc-400 rounded">
          <p>Gender </p>
          <div className="flex items-center gap-2">
            <input type="radio" id="l" name="gender" value="L" />
            <label htmlFor="l">Laki-laki</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="p" name="gender" value="P" />
            <label htmlFor="p">Perempuan</label>
          </div>
        </div>
        <div className="flex h-10 items-center gap-5 border px-2 border-zinc-400 rounded">
          <p>Memiliki Penyakit Berat?</p>
          <div className="flex items-center gap-2">
            <input type="radio" id="penyakitTrue" name="penyakit_berat" value="true" />
            <label htmlFor="penyakitTrue">Ya</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="penyakitFalse" name="penyakit_berat" value="false" />
            <label htmlFor="penyakitFalse">Tidak</label>
          </div>
        </div>
        <textarea rows={2} className="col-span-2 border border-zinc-400 rounded p-2" placeholder="Keterangan Penyakit" name="keterangan_penyakit"></textarea>
        <div className="border border-zinc-400 rounded p-2">
          <label htmlFor="foto">Foto</label>
          <input type="file" id="foto" name="foto" />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 mt-2 bg-cyan-800 text-white py-2 rounded hover:bg-cyan-700 transition"
        >
          Simpan
        </button>
      </div>
    </form>
    {/* end form */}
  </div >
}
