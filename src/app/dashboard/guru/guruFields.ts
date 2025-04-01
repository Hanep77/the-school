import { FieldConfig } from "../components/formInput";

export const guruFields = [
  {
    type: "text",
    data_type: "string",
    name: "nama_lengkap",
    label: "Nama Lengkap",
  },
  {
    type: "email",
    data_type: "string",
    name: "email",
    label: "Email"
  },
  {
    type: "number",
    data_type: "string",
    name: "no_telepon",
    label: "Nomor Telepon"
  },
  {
    type: "number",
    data_type: "string",
    name: "nik",
    label: "NIK"
  },
  {
    type: "select",
    data_type: "string",
    name: "gender",
    label: "Gender",
    options: [
      {
        value: "L",
        title: "Laki-laki"
      },
      {
        value: "P",
        title: "Perempuan"
      }
    ],
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
  {
    type: "textarea",
    data_type: "string",
    label: "Alamat",
    name: "alamat_tinggal",
  },
] as FieldConfig[];
