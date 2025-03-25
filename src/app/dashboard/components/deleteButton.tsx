"use client"

import { Dispatch, SetStateAction } from "react";
import { BiTrash } from "react-icons/bi"
import { SiswaType } from "../siswa/page";
import axios from "axios";

interface DeleteBtnProps {
  url: string
  id?: string
  action: Dispatch<SetStateAction<SiswaType[]>>
  token?: string
}

export default function DeleteButton({ url, id, action, token }: DeleteBtnProps) {
  const deleteRow = async () => {
    if (!confirm("yakin?") || !id) return;

    axios.delete(process.env.NEXT_PUBLIC_API_URL + url + "/" + id, {
      headers: { Authorization: `Bearer ${token}` }
    })

    action(prev => prev.filter(item => item.id != id));
  }
  return <button type="button" onClick={deleteRow} className="text-red-500"><BiTrash /></button>
}
