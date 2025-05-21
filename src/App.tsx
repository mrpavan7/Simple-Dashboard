import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { DataTable } from "./components/data-table";
import { tableData } from "@/lib/data.json";

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable data={tableData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
