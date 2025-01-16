import Link from "next/link";
import { BiEdit, BiTrash } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    kelas: "RPL A",
    tingkat: "X",
    jumlah_siswa: 30
  },
  {
    kelas: "RPL B",
    tingkat: "X",
    jumlah_siswa: 30
  },
  {
    kelas: "RPL A",
    tingkat: "XII",
    jumlah_siswa: 30
  }
]

export default function Kelas() {
  return (
    <div className="px-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/dashboard"}>Dashboard</Link>
        <MdKeyboardArrowRight className="text-xl" />
        <Link href={"/dashboard/kelas"}>Kelas</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">Kelas</h2>
        <button type="button" className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600">+ Add</button>
      </div>
      {/* end page header */}

      {/* content */}
      <div className="bg-zinc-100 border border-zinc-300 p-4 rounded">
        <table className="table w-full text-sm text-left rtl:text-right">
          <thead className="">
            <tr>
              <th>Kelas</th>
              <th>Tingkat</th>
              <th>Jumlah Siswa</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-zinc-600">
            {data.map(item => (
              <tr className="border-b">
                <td className="py-1">{item.kelas}</td>
                <td>{item.tingkat}</td>
                <td>{item.jumlah_siswa}</td>
                <td className="flex gap-2 text-xl py-1">
                  <button type="button" className="text-yellow-500"><BiEdit /></button>
                  <button type="button" className="text-red-500"><BiTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* end content */}
    </div>
  )
}
