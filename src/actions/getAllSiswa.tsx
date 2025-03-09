import { authOptions } from "@/libs/nextauth";
import axios from "axios";
import { getServerSession } from "next-auth";

const getAllSiswa = async (page: number, length: number) => {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.token;
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/siswa?page=" + page + "&length=" + length, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const siswa = response.data;
    return siswa;
  } catch (err: unknown) {
    console.log(err);
  }
}

export default getAllSiswa;
