import { FieldConfig } from "../components/formInput";

export const tahunAjaranFields = [
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
        title: "aktif",
        value: "aktif"
      },
      {
        title: "nonaktif",
        value: "nonaktif"
      }
    ]
  },
  {
    type: "select",
    data_type: "boolean",
    label: "Aktif?",
    name: "is_active",
    options: [
      {
        title: "ya",
        value: "true"
      },
      {
        title: "Tidak",
        value: "false"
      }
    ]
  },
] as FieldConfig[];
