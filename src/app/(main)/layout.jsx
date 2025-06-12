import { AppSidebar } from "@/components/app-sidebar"
import { NavBar } from "@/components/nav-bar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <NavBar />
        </header>
        <div className="w-full h-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}