"use client"

import useDashboardMenu, { dashboardMenuType } from "@/hooks/useDashboardMenu";
import useDashboardMenuGuru from "@/hooks/useDashboardMenuGuru";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const session = useSession();
  console.log(session.data?.user);
  const adminMenu = useDashboardMenu();
  const guruMenu = useDashboardMenuGuru();
  const dashboardMenu = session.data?.user?.name === "admin" ? adminMenu : guruMenu;

  return (
    <aside className="w-80 pt-20 pb-2 px-4 min-h-screen bg-cyan-900 text-white">
      <ul>
        {dashboardMenu?.map((menu: dashboardMenuType, index: number) => {
          return (
            <li key={index}>
              <Link href={menu.href}
                className={`flex items-center gap-2 ${menu.active ? "bg-cyan-700" : "hover:bg-cyan-700"} mb-1 p-2 rounded`}>
                {<menu.icon className="text-xl" />}
                {menu.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside >
  )
}
