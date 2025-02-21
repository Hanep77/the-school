import Input from "@/app/components/input";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Create() {
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
    <form>
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
        <textarea rows={2} className="col-span-2 border border-zinc-400 rounded p-2" placeholder="Alamat"></textarea>
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
          <select name="agama" className="w-full h-full px-2 bg-white border border-zinc-400 rounded" required>
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
          type="text"
          name="berat_badan"
          label="Berat Badan"
          required
        />
        <Input
          type="text"
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
        <div className="flex h-10 items-center gap-5">
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
        <div className="flex h-10 items-center gap-5">
          <p>aktif? </p>
          <div className="flex items-center gap-2">
            <input type="radio" id="aktifTrue" name="pindahan" value="true" />
            <label htmlFor="aktifTrue">True</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="aktifFalse" name="pindahan" value="true" />
            <label htmlFor="aktifFalse">false</label>
          </div>
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
