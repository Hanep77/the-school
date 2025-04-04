import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"
import FilterDropdown from "../components/filterdropdown"
import getData from "@/actions/getData"
import Pagination from "@/app/components/pagination"
import { PageProps } from "../../../../.next/types/app/dashboard/siswa/page"
import Table from "../components/table"

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

const fields = [
  { label: "Nama", name: "nama_lengkap" },
  { label: "NIS", name: "nis" },
  { label: "NISN", name: "nisn" },
  { label: "Gender", name: "gender" },
  { label: "Agama", name: "agama" },
  { label: "Tanggal Lahir", name: "tanggal_lahir" },
  { label: "Alamat", name: "alamat_tinggal" },
];

export const dynamic = "force-dynamic";

export default async function Siswa({ searchParams, }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const length = Number(params.length) || 10;
  const data = await getData(page, length, "siswa");

  return (
    <div className="px-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/dashboard"}>Dashboard</Link>
        <MdKeyboardArrowRight className="text-xl" />
        <Link href={"/dashboard/siswa"}>Siswa</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">Siswa</h2>
        <Link href="/dashboard/siswa/create" className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600">+ Add</Link>
      </div>
      {/* end page header */}

      {/* filter */}
      <div className="flex gap-2 mb-2">
        <form>
          <input type="text" name="search" placeholder="search..." className="h-8 px-2 rounded outline-none border border-zinc-300" />
        </form>
        <FilterDropdown label="Kelas" values={["RPL A", "RPL B"]} />
        <FilterDropdown label="Tingkat" values={["X", "XI", "XII"]} />
      </div>
      {/* end filter */}

      {/* content */}
      <Table data={data.data} fields={fields} url="siswa" />
      {/* end content */}

      {/* pagination */}
      <Pagination
        next={data.pagination.next_page}
        previous={data.pagination.previous_page}
        total={data.pagination.total_pages}
        current={data.pagination.current_page}
        length={data.pagination.per_page}
      />
      {/* end pagination */}
    </div>
  )
}
