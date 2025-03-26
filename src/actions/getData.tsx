import { authOptions } from "@/libs/nextauth";
import axios from "axios";
import { getServerSession } from "next-auth";

const getData = async (page: number, length: number, model: string) => {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.token;
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/" + model + "?page=" + page + "&length=" + length, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.data || !response.data.data) {
      throw new Error("Invalid API response");
    }

    const siswa = response.data;
    return siswa;
  } catch (err: unknown) {
    console.log(err);
  }
}

export default getData;
