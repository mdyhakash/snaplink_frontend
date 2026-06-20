import { ProfileDropdown } from "@/components/ProfileDropdown";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar />

      {/* Main */}
      <div className="md:ml-60 flex flex-col min-h-screen">
        {/* Top header — desktop only */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 border-b border-white/5 bg-sidebar backdrop-blur-sm sticky top-0 z-30">
          <div>
            <h1 className="text-lg font-bold text-white">Dashboard</h1>
            <p className="text-xs text-slate-500">Welcome back, Md Y H</p>
          </div>
          <ProfileDropdown />
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 py-6 pt-20 md:pt-6 md:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
