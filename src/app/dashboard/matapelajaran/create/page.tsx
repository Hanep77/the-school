import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormInput from "@/app/dashboard/components/formInput";
import { pelajaranFields } from "../pelajaranFields";

export default async function Detail() {
  return <div className="px-4 mb-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/matapelajaran"}>Pelajaran</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={""}>Create</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Buat Data Mata Pelajaran</h2>
    </div>
    {/* end page header */}

    {/* content */}
    <FormInput fields={pelajaranFields} method="post" url="matapelajaran" />
    {/* end content */}
  </div>
}

