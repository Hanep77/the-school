"use client"

import { useEffect, useState } from "react";
import DeleteButton from "./deleteButton";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { useSession } from "next-auth/react";

interface TableProps {
  data: Record<string, string>[],
  fields: { label: string, name: string }[],
  url: string
}

export default function Table({ data, fields, url }: TableProps) {
  const [tableData, setTableData] = useState<Record<string, string>[]>(data);
  const session = useSession();

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return <div className="bg-zinc-100 border border-zinc-300 rounded overflow-x-auto">
    <table className="table w-full text-sm text-left rtl:text-right">
      <thead className="">
        <tr>
          {fields.map(field => {
            return <th className="py-3 px-6" key={field.name}>{field.label}</th>
          })}
          <th className="py-3 px-6">Detail</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody className="text-zinc-600">
        {tableData.map((item: Record<string, string>, index: number) => (
          <tr key={index} className="border-b">
            {fields.map(field => {
              return <td className="py-3 px-6 whitespace-nowrap" key={field.name}>{item[field.name]}</td>
            })}
            <td className="py-3 px-6 whitespace-nowrap"><Link href={"/dashboard/" + url + "/details/" + item.id} className="text-blue-500 underline italic">lihat selengkapnya</Link></td>
            <td className="flex gap-2 text-xl py-3 px-6">
              <Link href={"/dashboard/" + url + "/edit/" + item.id} className="text-yellow-500"><BiEdit /></Link>
              <DeleteButton url={"/" + url} id={item.id} action={setTableData} token={session.data?.token} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}
