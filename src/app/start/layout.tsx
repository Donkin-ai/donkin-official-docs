import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { startSource } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/start">) {
  return (
    <DocsLayout tree={startSource.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
