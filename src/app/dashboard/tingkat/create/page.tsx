import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormInput from "@/app/dashboard/components/formInput";
import { tingkatFields } from "../tingkatFields";

export default async function Detail() {
  return <div className="px-4 mb-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/tingkat"}>Tingkat</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={""}>Create</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Buat Data Tingkat</h2>
    </div>
    {/* end page header */}

    {/* content */}
    <FormInput fields={tingkatFields} method="post" url="tingkat" />
    {/* end content */}
  </div>
}

