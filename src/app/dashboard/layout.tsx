import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}
