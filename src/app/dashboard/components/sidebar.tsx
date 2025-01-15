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
    <aside className="fixed left-4 top-20 bottom-4 w-60 p-4 bg-zinc-100 border border-zinc-300 rounded">
      <ul>
        {dashboardMenu?.map((menu: dashboardMenuType, index: number) => {
          return (
            <li key={index}>
              <Link href={menu.href}
                className={`flex items-center gap-2 border-s-2 ${menu.active ? "border-cyan-800" : "hover:border-cyan-800"} mb-1 p-2`}>
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
