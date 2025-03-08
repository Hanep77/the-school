import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiswaType } from "../../page";
import getSiswa from "@/actions/getSiswa";

const siswaFields = [
  { label: "Nama", key: "nama_lengkap" },
  { label: "Nama Panggilan", key: "nama_panggilan" },
  { label: "Alamat", key: "alamat_tinggal" },
  { label: "Email", key: "email" },
  { label: "No Telepon", key: "no_telepon" },
  { label: "NIS", key: "nis" },
  { label: "NISN", key: "nisn" },
  { label: "NIK", key: "nik" },
  { label: "Kewarganegaraan", key: "kewarga_negaraan" },
  { label: "Bahasa", key: "bahasa" },
  { label: "Tempat Lahir", key: "tempat_lahir" },
  { label: "Tanggal Lahir", key: "tanggal_lahir" },
  { label: "Golongan Darah", key: "golongan_darah" },
  { label: "Agama", key: "agama" },
  { label: "Berat Badan", key: "berat_badan" },
  { label: "Tinggi Badan", key: "tinggi_badan" },
  { label: "Jumlah Saudara Kandung", key: "jumlah_saudara_kandung" },
  { label: "Jumlah Saudara Tiri", key: "jumlah_saudara_tiri" },
  { label: "Jumlah Saudara Angkat", key: "jumlah_saudara_angkat" },
  { label: "Anak Ke", key: "anak_ke" },
  { label: "Type", key: "types" },
  { label: "Pindahan", key: "pindahan", isBoolean: true },
  { label: "Aktif", key: "is_active", isBoolean: true },
  { label: "Gender", key: "gender", isGender: true },
  { label: "Memiliki Penyakit Berat", key: "penyakit_berat", isBoolean: true },
  { label: "Keterangan Penyakit", key: "keterangan_penyakit" },
] as { label: string, key: string, isGender?: boolean, isBoolean?: boolean }[];

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const siswa = await getSiswa(id);

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
        {siswaFields.map(({ label, key, isBoolean, isGender }) => {
          if (!siswa) {
            return
          }
          const value = key in siswa ? siswa[key as keyof SiswaType] : undefined;

          return (
            <div key={key}>
              <p className="text-zinc-500">{label}</p>
              <h3 className="text-xl">
                {isBoolean ? (value ? "Ya" : "Tidak") : isGender ? (value === "L" ? "Laki-laki" : "Perempuan") : value}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
    {/* end content */}
  </div>
}
