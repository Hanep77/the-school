import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar />
      <div className="flex-grow pt-20 ps-64 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
