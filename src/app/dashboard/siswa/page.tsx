import Link from "next/link"
import { BiEdit, BiTrash } from "react-icons/bi"
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"

const data = [
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
  },
  {
    id: "012",
    nama: "siswa 1",
    tingkat: "X",
    kelas: "RPL A",
    nis: "123456789",
    nisn: "123456789",
    gender: "Laki-laki"
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

        <div>
          <button
            type="button"
            id="dropdownDefaultButton"
            className="text-white bg-cyan-800 font-medium rounded text-sm h-8 px-4 text-center inline-flex items-center mb-2">
            Kelas<MdKeyboardArrowDown className="text-xl" />
          </button>

          <div id="dropdown" className="absolute z-10 bg-white rounded w-44 border border-zinc-300">
            <ul className="p-2 text-sm" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="border-s-2 hover:border-cyan-800 block px-4 py-2 mb-1">RPL A</a>
              </li>
              <li>
                <a href="#" className="border-s-2 hover:border-cyan-800 block px-4 py-2 mb-1">RPL B</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end filter */}

      {/* content */}
      <div className="bg-zinc-100 border border-zinc-300 rounded overflow-x-auto">
        <table className="table w-full text-sm text-left rtl:text-right">
          <thead className="">
            <tr>
              <th className="py-3 px-6">Nama</th>
              <th className="py-3 px-6">Tingkat</th>
              <th className="py-3 px-6">Kelas</th>
              <th className="py-3 px-6">Gender</th>
              <th className="py-3 px-6">NISN</th>
              <th className="py-3 px-6">NIS</th>
              <th className="py-3 px-6">Detail</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-zinc-600">
            {data.map(item => (
              <tr className="border-b">
                <td className="py-3 px-6 whitespace-nowrap">{item.nama}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.tingkat}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.kelas}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.gender}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.nisn}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.nis}</td>
                <td className="py-3 px-6 whitespace-nowrap"><Link href={"/dashboard/siswa/" + item.id} className="text-blue-500 underline italic">lihat selengkapnya</Link></td>
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
    </div>
  )
}
