import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { Book, Info, Home } from "lucide-react";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: "main",
          text: "Donkin.ai",
          url: "https://donkin.ai",
          icon: <Home />,
          external: true,
        },
        {
          type: "main",
          text: "About",
          url: "/docs/about",
          icon: <Info />,
        },
      ]}>
      {children}
    </HomeLayout>
  );
}
