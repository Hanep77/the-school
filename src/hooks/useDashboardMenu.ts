import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { IconType } from "react-icons";
import { BiCalendar } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdBook, MdDashboard, MdSportsGymnastics } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";

export type dashboardMenuType = {
  label: string,
  href: string,
  active: boolean,
  icon: IconType
}

const useDashboardMenu = () => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      label: "Dashboard",
      href: "/dashboard",
      active: pathname === '/dashboard',
      icon: MdDashboard
    },
    {
      label: "Siswa",
      href: "/dashboard/siswa",
      active: pathname === '/dashboard/siswa',
      icon: PiStudent
    },
    {
      label: "Guru",
      href: "/dashboard/guru",
      active: pathname === '/dashboard/guru',
      icon: GiTeacher
    },
    {
      label: "Wali",
      href: "/dashboard/wali",
      active: pathname === '/dashboard/wali',
      icon: RiParentFill
    },
    {
      label: "Tingkat",
      href: "/dashboard/tingkat",
      active: pathname === '/dashboard/tingkat',
      icon: FaSchool
    },
    {
      label: "Pelajaran",
      href: "/dashboard/matapelajaran",
      active: pathname === '/dashboard/matapelajaran',
      icon: MdBook
    },
    {
      label: "Tahun Ajaran",
      href: "/dashboard/tahun-ajaran",
      active: pathname === '/dashboard/tahun-ajaran',
      icon: BiCalendar
    },
    {
      label: "Ekskul",
      href: "/dashboard/ekskul",
      active: pathname === '/dashboard/ekskul',
      icon: MdSportsGymnastics
    },
  ], [pathname]);

  return routes;
}

export default useDashboardMenu;
