import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"
import getData from "@/actions/getData"
import Pagination from "@/app/components/pagination"
import { PageProps } from "../../../../.next/types/app/dashboard/ekskul/page"
import Table from "../components/table"

export const dynamic = "force-dynamic";

export type GuruType = {
  id?: string;
  sekolah_id?: string;
  nama: string;
  created_at: string;
  updated_at: string;
};

const fields = [
  { label: "Nama", name: "nama" },
];

export default async function Siswa({ searchParams, }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const length = Number(params.length) || 10;
  const data = await getData(page, length, "ekskul");

  return (
    <div className="px-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/ekskul"}>Ekskul</Link>
        <MdKeyboardArrowRight className="text-xl" />
        <Link href={"/dashboard/ekskul"}>Ekskul</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">Ekskul</h2>
        <Link href="/dashboard/ekskul/create" className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600">+ Add</Link>
      </div>
      {/* end page header */}

      {/* filter */}
      <div className="flex gap-2 mb-2">
        <form>
          <input type="text" name="search" placeholder="search..." className="h-8 px-2 rounded outline-none border border-zinc-300" />
        </form>
      </div>
      {/* end filter */}

      {/* content */}
      <Table data={data.data} fields={fields} url="ekskul" details={false} />
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

