import { FieldConfig } from "../components/formInput";

export const pelajaranFields = [
  {
    type: "text",
    data_type: "string",
    name: "nama",
    label: "Nama",
  },
  {
    type: "select",
    data_type: "string",
    label: "Tipe",
    name: "types",
    options: [
      {
        title: "utama",
        value: "utama"
      },
      {
        title: "mulok",
        value: "mulok"
      }
    ]
  },
] as FieldConfig[];
