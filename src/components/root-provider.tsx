"use client";
import { RootProvider as FumadocsRootProvider } from "fumadocs-ui/provider";
// your custom dialog
import SearchDialog from "@/components/search";
import type { ReactNode } from "react";

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <FumadocsRootProvider
      search={{
        SearchDialog,
      }}>
      {children}
    </FumadocsRootProvider>
  );
}
