"use client";

import { useTheme } from "next-themes";
import type { SVGProps } from "react";
import dynamic from "next/dynamic";

const XIconDark = dynamic(() => import("./x.dark"), {
  ssr: false,
  loading: () => <div className="w-4 h-4 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" />,
});
const XIconLight = dynamic(() => import("./x.light"), {
  ssr: false,
  loading: () => <div className="w-4 h-4 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" />,
});

export default function XIcon(props: SVGProps<SVGSVGElement>) {
  const { theme } = useTheme();
  return theme === "dark" ? (
    <XIconDark width="16px" height="16px" {...props} />
  ) : (
    <XIconLight width="16px" height="16px" {...props} />
  );
}
