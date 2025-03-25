import { FieldConfig } from "../components/formInput";

export const siswaFields = [
  {
    type: "text",
    data_type: "string",
    name: "nama_lengkap",
    label: "Nama Lengkap",
    required: true
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
    type: "text",
    data_type: "string",
    name: "nis",
    label: "NIS"
  },
  {
    type: "number",
    data_type: "string",
    name: "nisn",
    label: "NISN"
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
    name: "kewarga_negaraan",
    label: "Kewarganegaraan"
  },
  {
    type: "text",
    data_type: "string",
    name: "bahasa",
    label: "Bahasa"
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
    required: true
  },
  {
    type: "select",
    data_type: "string",
    name: "golongan_darah",
    label: "Golongan Darah",
    options: [
      {
        value:
          "A",
        title: "A"
      },
      {
        value: "B",
        title: "B"
      },
      {
        value: "AB",
        title: "AB"
      },
      {
        value: "O",
        title: "O"
      }
    ],
    required: false
  },
  {
    type: "select",
    data_type: "string",
    name: "agama",
    label: "Agama",
    options: [
      {
        value: "Islam",
        title: "Islam"
      },
      {
        value: "Protestan",
        title: "Protestan"
      },
      {
        value: "Katolik",
        title: "Katolik"
      },
      {
        value: "Khonghuchu",
        title: "Khonghuchu"
      },
      {
        value: "Hindu",
        title: "Hindu"
      },
      {
        value: "Budha",
        title: "Budha"
      }
    ],
    required: false
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
    required: true
  },
  {
    type: "number",
    data_type: "number",
    name: "berat_badan",
    label: "Berat Badan"
  },
  {
    type: "number",
    data_type: "number",
    name: "tinggi_badan",
    label: "Tinggi Badan"
  },
  {
    type: "number",
    data_type: "number",
    name: "jumlah_saudara_kandung",
    label: "Jumlah Saudara Kandung"
  },
  {
    type: "number",
    data_type: "number",
    name: "jumlah_saudara_tiri",
    label: "Jumlah Saudara Tiri"
  },
  {
    type: "number",
    data_type: "number",
    name: "jumlah_saudara_angkat",
    label: "Jumlah Saudara Angkat"
  },
  {
    type: "number",
    data_type: "number",
    name: "anak_ke",
    label: "Anak Ke"
  },
  {
    type: "select",
    data_type: "string",
    label: "Type",
    name: "types",
    options: [
      {
        title: "Baru",
        value: "baru"
      },
      {
        title: "Aktif",
        value: "aktif"
      }

    ]
  },
  {
    type: "select",
    data_type: "boolean",
    label: "Pindahan?",
    name: "pindahan",
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
    type: "select",
    data_type: "boolean",
    label: "Memiliki Penyakit Berat?",
    name: "penyakit_berat",
    options: [
      {
        title: "Ya",
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
    label: "Keterangan Penyakit",
    name: "keterangan_penyakit",
  }
] as FieldConfig[];
