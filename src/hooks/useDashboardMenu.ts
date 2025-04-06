import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { IconType } from "react-icons";
import { BiCalendar } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { MdBook, MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";

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
      label: "Kelas",
      href: "/dashboard/kelas",
      active: pathname === '/dashboard/kelas',
      icon: SiGoogleclassroom
    },
    {
      label: "Pelajaran",
      href: "/dashboard/pelajaran",
      active: pathname === '/dashboard/pelajaran',
      icon: MdBook
    },
    {
      label: "Tahun Ajaran",
      href: "/dashboard/tahun-ajaran",
      active: pathname === '/dashboard/tahun-ajaran',
      icon: BiCalendar
    },
  ], [pathname]);

  return routes;
}

export default useDashboardMenu;
