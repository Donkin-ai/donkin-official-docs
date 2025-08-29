"use client";

import { useTheme } from "next-themes";
import type { SVGProps } from "react";
import dynamic from "next/dynamic";

const TelegramIconDark = dynamic(() => import("./tg.dark"), {
  ssr: false,
  loading: () => <div className="w-4 h-4 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" />,
});
const TelegramIconLight = dynamic(() => import("./tg.light"), {
  ssr: false,
  loading: () => <div className="w-4 h-4 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" />,
});

export default function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  const { theme } = useTheme();
  return theme === "dark" ? <TelegramIconDark {...props} /> : <TelegramIconLight {...props} />;
}
