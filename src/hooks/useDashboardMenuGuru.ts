import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { MdBook, MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const useDashboardMenuGuru = () => {
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
      label: "Pelajaran",
      href: "/dashboard/pelajaran",
      active: pathname === '/dashboard/pelajaran',
      icon: MdBook
    },
  ], [pathname]);

  return routes;
}

export default useDashboardMenuGuru;
