import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import getSingleData from "@/actions/getSingleData";
import FormInput from "@/app/dashboard/components/formInput";
import { ekskulFields } from "../../ekskulFields";

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getSingleData(id, "ekskul");

  return <div className="px-4 mb-4">
    {/* breadcrumbs */}
    <div className="flex items-center">
      <Link href={"/dashboard"}>Dashboard</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={"/dashboard/ekskul"}>Ekskul</Link>
      <MdKeyboardArrowRight className="text-xl" />
      <Link href={""}>Edit</Link>
    </div>
    {/* end breadcrumbs */}

    {/* page header */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-semibold text-cyan-800">Ubah Data Ekskul</h2>
    </div>
    {/* end page header */}

    {/* content */}
    <FormInput fields={ekskulFields} currentData={data} method="put" url="ekskul" />
    {/* end content */}
  </div>
}
