import { FieldConfig } from "../components/formInput";

export const waliFields = [
  {
    type: "text",
    data_type: "string",
    name: "nama_lengkap",
    label: "Nama Lengkap",
  },
  {
    type: "text",
    data_type: "string",
    name: "nama_panggilan",
    label: "Nama Panggilan"
  },
  {
    type: "textarea",
    data_type: "string",
    label: "Alamat",
    name: "alamat_tinggal",
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
    type: "text",
    data_type: "string",
    name: "tempat_lahir",
    label: "Tempat Lahir"
  },
  {
    type: "date",
    data_type: "string",
    name: "tanggal_lahir",
    label: "Tanggal Lahir",
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
    data_type: "string",
    name: "pendidikan_terakhir",
    label: "Pendidikan Terakhir",
    options: [
      {
        value: "SD atau sederajat",
        title: "SD"
      },
      {
        value: "SMP atau sederajat",
        title: "SMP atau sederajat"
      },
      {
        value: "SMA atau sederajat",
        title: "SMA atau sederajat"
      },
      {
        value: "D1",
        title: "D1"
      },
      {
        value: "D2",
        title: "D3"
      },
      {
        value: "D3",
        title: "D3"
      },
      {
        value: "D4",
        title: "D4"
      },
      {
        value: "S1",
        title: "S1"
      },
      {
        value: "S2",
        title: "S2"
      },
      {
        value: "S3",
        title: "S3"
      },
    ],
  },
  {
    type: "text",
    data_type: "string",
    name: "pekerjaan",
    label: "Pekerjaan",
  },
  {
    type: "text",
    data_type: "string",
    name: "hubungan",
    label: "Hubungan",
  },
  {
    type: "text",
    data_type: "string",
    name: "nama_ibu",
    label: "Nama Ibu",
  },
  {
    type: "text",
    data_type: "string",
    name: "pekerjaan_ibu",
    label: "Pekerjaan Ibu",
  },
  {
    type: "select",
    data_type: "string",
    name: "pendidikan_terakhir_ibu",
    label: "Pendidikan Terakhir Ibu",
    options: [
      {
        value: "SD atau sederajat",
        title: "SD"
      },
      {
        value: "SMP atau sederajat",
        title: "SMP atau sederajat"
      },
      {
        value: "SMA atau sederajat",
        title: "SMA atau sederajat"
      },
      {
        value: "D1",
        title: "D1"
      },
      {
        value: "D2",
        title: "D3"
      },
      {
        value: "D3",
        title: "D3"
      },
      {
        value: "D4",
        title: "D4"
      },
      {
        value: "S1",
        title: "S1"
      },
      {
        value: "S2",
        title: "S2"
      },
      {
        value: "S3",
        title: "S3"
      },
    ],
  },
  {
    type: "text",
    data_type: "string",
    name: "nama_bapak",
    label: "Nama Bapak",
  },
  {
    type: "text",
    data_type: "string",
    name: "pekerjaan_bapak",
    label: "Pekerjaan Bapak",
  },
  {
    type: "select",
    data_type: "string",
    name: "pendidikan_terakhir_bapak",
    label: "Pendidikan Terakhir Bapak",
    options: [
      {
        value: "SD atau sederajat",
        title: "SD"
      },
      {
        value: "SMP atau sederajat",
        title: "SMP atau sederajat"
      },
      {
        value: "SMA atau sederajat",
        title: "SMA atau sederajat"
      },
      {
        value: "D1",
        title: "D1"
      },
      {
        value: "D2",
        title: "D3"
      },
      {
        value: "D3",
        title: "D3"
      },
      {
        value: "D4",
        title: "D4"
      },
      {
        value: "S1",
        title: "S1"
      },
      {
        value: "S2",
        title: "S2"
      },
      {
        value: "S3",
        title: "S3"
      },
    ],
  },
] as FieldConfig[];
