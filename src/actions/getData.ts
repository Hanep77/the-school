import { axiosAuth } from "@/libs/axios";

const getData = async (page: number, length: number, model: string) => {
  try {
    const response = await axiosAuth.get(`/${model}?page=${page}&length=${length}`);

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
