import Link from "next/link"
import { BiEdit, BiTrash } from "react-icons/bi"
import { MdKeyboardArrowRight } from "react-icons/md"
import FilterDropdown from "../components/filterdropdown"

const data = [
  {
    tahun: "2022/2023",
  },
  {
    tahun: "2023/2024",
  },
  {
    tahun: "2024/2025",
  },
]

export default function Siswa() {
  return (
    <div className="px-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/dashboard"}>Dashboard</Link>
        <MdKeyboardArrowRight className="text-xl" />
        <Link href={"/dashboard/guru"}>Siswa</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">Siswa</h2>
        <button type="button" className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600">+ Add</button>
      </div>
      {/* end page header */}

      {/* filter */}
      <div className="flex gap-2">
        <form>
          <input type="text" name="search" placeholder="search..." className="h-8 px-2 rounded outline-none border border-zinc-300" />
        </form>
        <FilterDropdown label="Urutan" values={["ASC", "DESC"]} />
      </div>
      {/* end filter */}

      {/* content */}
      <div className="bg-zinc-100 border border-zinc-300 rounded overflow-x-auto">
        <table className="table w-full text-sm text-left rtl:text-right">
          <thead className="">
            <tr>
              <th className="py-3 px-6">Tahun Ajaran</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-zinc-600">
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6 whitespace-nowrap">{item.tahun}</td>
                <td className="flex gap-2 text-xl py-3 px-6">
                  <button type="button" className="text-yellow-500"><BiEdit /></button>
                  <button type="button" className="text-red-500"><BiTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* end content */}

      {/* pagination */}
      <div className="flex flex-col items-center my-2">
        <span className="text-sm text-cyan-800">
          Showing <span className="font-semibold">1</span> to <span className="font-semibold">10</span> of <span className="font-semibold">100</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-cyan-800 rounded-s hover:bg-cyan-900">
            Prev
          </button>
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-cyan-800 rounded-e hover:bg-cyan-900">
            Next
          </button>
        </div>
      </div>
      {/* end pagination */}
    </div>
  )
}
