import { format } from "date-fns";
import { id as ind } from "date-fns/locale";
import { axiosAuth } from "@/libs/axios";

const getSingleData = async (id: string, model: string) => {
  try {
    const response = await axiosAuth.get(`/${model}/${id}`);

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
