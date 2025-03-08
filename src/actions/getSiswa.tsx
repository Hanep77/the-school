import { SiswaType } from "@/app/dashboard/siswa/page";
import { authOptions } from "@/libs/nextauth";
import axios from "axios";
import { getServerSession } from "next-auth";
import { format } from "date-fns";
import { id as ind } from "date-fns/locale";

const getSiswa = async (id: string) => {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.token;
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/siswa/" + id, {
      headers: { Authorization: `Bearer ${token}` }
    });
    // const siswa = response.data;
    const datasiswa = response.data.data;
    const formattedDate = format(new Date(datasiswa.tanggal_lahir), "dd MMMM yyyy", { locale: ind });
    const siswa = ({ ...datasiswa, tanggal_lahir: formattedDate });
    return siswa;
  } catch (err: unknown) {
    console.log(err);
  }
}

export default getSiswa;
