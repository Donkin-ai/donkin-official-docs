import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import NextImage from "next/image";
import XIcon from "@/components/icons/x";
import TelegramIcon from "@/components/icons/tg";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <NextImage
            src="/assets/donkin-logo.svg"
            className="hidden dark:block"
            alt="Logo"
            width={24}
            height={24}
            quality={90}
          />
          <NextImage
            src="/assets/donkin-logo.light.svg"
            className="block dark:hidden p-1"
            alt="Logo"
            width={24}
            height={24}
            quality={90}
          />
          Donkin
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <XIcon className="max-w-3 max-h-3" />,
        text: "Donkin on X",
        url: "https://x.com/DonkinAI",
        secondary: true,
        type: "icon",
      },
      {
        icon: <TelegramIcon className="max-w-4 max-h-4" />,
        text: "Donkin on Telegram",
        url: "https://t.co/vf4AjZVo6T",
        secondary: true,
        type: "icon",
      },
    ],
  };
}
