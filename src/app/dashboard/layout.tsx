import { getServerSession } from "next-auth";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default async function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="flex relative max-w-screen-2xl">
      <Navbar />
      <Sidebar />
      <div className="flex-grow pt-20 ps-64 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
