import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiswaType } from "../../page";
import getSingleData from "@/actions/getSingleData";
import { siswaFields } from "../../siswaFields";

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const siswa = await getSingleData(id, "siswa");

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
        {siswaFields.map(({ label, name, data_type }) => {
          if (!siswa) {
            return
          }
          const value = name in siswa ? siswa[name as keyof SiswaType] : undefined;

          return (
            <div key={name}>
              <p className="text-zinc-500">{label}</p>
              <h3 className="text-xl">
                {data_type == "boolean" ? (value ? "Ya" : "Tidak") : name == "gender" ? (value === "L" ? "Laki-laki" : "Perempuan") : value}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
    {/* end content */}
  </div>
}
