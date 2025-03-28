import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./nextauth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

axiosAuth.interceptors.request.use(
  async (config) => {
    const componentType = typeof window === 'undefined' ? 'server' : 'client';
    let session;

    if (componentType == "client") {
      session = await getSession();
    } else {
      session = await getServerSession(authOptions);
    }
    config.headers.Authorization = `Bearer ${session?.user?.token}`;
    return config;
  }
);

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      redirect("/dashboard");
    }

    return Promise.reject(error);
  }
);

export { axiosAuth };
