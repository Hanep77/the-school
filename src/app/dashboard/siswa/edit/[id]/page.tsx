import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import getSiswa from "@/actions/getSiswa";
import FormInput from "@/app/dashboard/components/formInput";
import { siswaFields } from "../../siswaFields";

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const siswa = await getSiswa(id);

  return <div className="px-4 mb-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/siswa"}>Siswa</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={""}>Edit</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Ubah Data Siswa</h2>
    </div>
    {/* end page header */}

    {/* content */}
    <FormInput fields={siswaFields} currentData={siswa} method="put" />
    {/* end content */}
  </div>
}
