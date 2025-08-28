import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import NextImage from "next/image";

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
          <NextImage src="/assets/donkin-logo.svg" alt="Logo" width={24} height={24} quality={90} />
          Donkin
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <NextImage src="/assets/x.svg" alt="x" width={16} height={16} quality={90} />,
        text: "Donkin on X",
        url: "https://x.com/DonkinAI",
        secondary: false,
      },
      {
        icon: <NextImage src="/assets/tg.svg" alt="Telegram" width={16} height={16} quality={90} />,
        text: "Donkin on Telegram",
        url: "https://t.co/vf4AjZVo6T",
        secondary: false,
      },
    ],
  };
}
