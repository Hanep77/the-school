import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormInput from "@/app/dashboard/components/formInput";
import { tahunAjaranFields } from "../tahunAjaranFields";

export default async function Detail() {
  return <div className="px-4 mb-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/tahun-ajaran"}>Tahun Ajaran</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={""}>Create</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Buat Data Tahun Ajaran</h2>
    </div>
    {/* end page header */}

    {/* content */}
    <FormInput fields={tahunAjaranFields} method="post" url="tahun-ajaran" />
    {/* end content */}
  </div>
}

