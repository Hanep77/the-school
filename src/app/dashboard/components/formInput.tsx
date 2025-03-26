"use client"

import Input from "@/app/components/input";
import { FormEvent, useState } from "react";
import Select from "@/app/components/select";
import { useSession } from "next-auth/react";
import { UserType } from "@/libs/nextauth";
import axios from "axios";
import { useRouter } from "next/navigation";

export interface FieldConfig {
  type: string;
  data_type: string;
  name: string;
  label: string;
  required?: boolean;
  options?: { title: string, value: string }[];
}

interface FormInputProps {
  fields: FieldConfig[],
  currentData?: Record<string, string>,
  method: string,
  url: string;
}

export default function FormInput({ fields, currentData, method, url }: FormInputProps) {
  const router = useRouter();
  const session = useSession();
  const [errors, setErrors] = useState<{ [key: string]: string }>();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const data: Record<string, string | number | boolean> = {};
    fields.map(field => {
      if (field.data_type == "number") {
        data[field.name] = Number(formData.get(field.name));
      } else if (field.data_type == "boolean") {
        data[field.name] = Boolean(formData.get(field.name));
      } else {
        data[field.name] = formData.get(field.name) as string;
      }
    })

    const token = (session?.data?.user as UserType).token;
    try {
      let response;
      if (method == "post") {
        response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/" + url, data, { headers: { Authorization: `Bearer ${token}` } });
      } else if (method == "put" && currentData) {
        response = await axios.put(process.env.NEXT_PUBLIC_API_URL + "/" + url + "/" + currentData.id, data, { headers: { Authorization: `Bearer ${token}` } });
      }

      if (response?.status == 200 || response?.status == 201) {
        router.push("/dashboard/" + url);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrors(err.response?.data.errors);
      }
    }
  }

  return <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded border border-zinc-300">
      {
        fields.map((field, index) => {
          if (field.type == "select") {
            return <Select
              key={index}
              label={field.label}
              name={field.name}
              defaultValue={currentData ? currentData[field.name] : field.label}
              error={errors && errors[field.name]}
              options={field.options}
            />
          }

          if (field.type == "textarea") {
            const error = errors && errors[field.name];
            return <div key={index} className="col-span-2">
              <textarea
                rows={2}
                className={`border w-full ${error ? "border-red-500" : "border-zinc-400"} rounded p-2`}
                placeholder={field.label}
                defaultValue={currentData ? currentData[field.name] : ""}
                name={field.name}>
              </textarea>
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
          }

          return <Input
            key={index}
            type={field.type}
            name={field.name}
            label={field.label}
            error={errors && errors[field.name]}
            defaultValue={currentData && currentData[field.name]}
            required={field.required}
          />
        })
      }
    </div>
    <div className="flex justify-end">
      <button
        type="submit"
        className="px-4 mt-2 bg-cyan-800 text-white py-2 rounded hover:bg-cyan-700 transition"
      >
        Simpan
      </button>
    </div>
  </form>
}
