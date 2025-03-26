import { authOptions } from "@/libs/nextauth";
import axios from "axios";
import { getServerSession } from "next-auth";
import { format } from "date-fns";
import { id as ind } from "date-fns/locale";

const getSingleData = async (id: string, model: string) => {
  try {
    const session = await getServerSession(authOptions);
    const token = session?.token;
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/" + model + "/" + id, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = response.data.data;

    if (model == "siswa") {
      const formattedDate = format(new Date(data.tanggal_lahir), "yyyy-MM-dd", { locale: ind });
      const siswa = ({ ...data, tanggal_lahir: formattedDate });
      return siswa;
    }

    return data;
  } catch (err: unknown) {
    console.log(err);
  }
}

export default getSingleData;
