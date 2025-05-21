import { cn } from "@/lib/utils";

export default function AppTitle({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "mx-auto px-5 py-2 font-black text-3xl transition-all duration-300",
        "group-data-[collapsible=icon]:hidden"
      )}
    >
      {title}
    </h1>
  );
}
