import Link from "next/link";
import { BiEdit, BiTrash } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    id: "123",
    nama: "bu guru 1",
    gender: "Perempuan",
    nik: 12345678910122,
    no_telepon: "08123456789",
    email: "buguru1@gmail.com",
    alamat: "jl. Tasik",
    is_active: true,
  },
  {
    id: "124",
    nama: "bu guru 2",
    gender: "Perempuan",
    nik: 12345678910123,
    no_telepon: "08123456788",
    email: "buguru2@gmail.com",
    alamat: "jl. Tasik",
    is_active: false,
  },
  {
    id: "125",
    nama: "pak guru 1",
    gender: "Laki-laki",
    nik: 12345678910124,
    no_telepon: "08123456787",
    email: "pakguru1@gmail.com",
    alamat: "jl. Tasik",
    is_active: true,
  }
]

export default function Guru() {
  return (
    <div className="px-4">
      {/* breadcrumbs */}
      <div className="flex items-center">
        <Link href={"/dashboard"}>Dashboard</Link>
        <MdKeyboardArrowRight className="text-xl" />
        <Link href={"/dashboard/guru"}>Guru</Link>
      </div>
      {/* end breadcrumbs */}

      {/* page header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-cyan-800">Guru</h2>
        <button type="button" className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600">+ Add</button>
      </div>
      {/* end page header */}

      {/* content */}
      <div className="bg-zinc-100 border border-zinc-300 p-4 rounded">
        <table className="table w-full text-sm text-left rtl:text-right">
          <thead className="">
            <tr>
              <th>Nama</th>
              <th>Gender</th>
              <th>NIK</th>
              <th>No. Telp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Aktif</th>
              <th>Penugasan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-zinc-600">
            {data.map(item => (
              <tr className="border-b">
                <td className="py-1">{item.nama}</td>
                <td>{item.gender}</td>
                <td>{item.nik}</td>
                <td>{item.no_telepon}</td>
                <td>{item.email}</td>
                <td>{item.alamat}</td>
                <td><div className={`w-4 h-4 ${item.is_active ? "bg-green-500" : "bg-red-500"} rounded-full`}></div></td>
                <td><Link href={"/dashboard/guru/penugasan/" + item.id} className="text-blue-500 underline italic">lihat selengkapnya</Link></td>
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
