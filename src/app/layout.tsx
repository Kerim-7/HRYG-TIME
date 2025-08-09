import type { Metadata } from "next";
import { Manrope, Yeseva_One } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageUpdater from "./components/LanguageUpdater";

const headingFont = Yeseva_One({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "HRYG TIME — кофейня в дагестанском стиле",
  description:
    "Ароматный спешалти-кофе, горское гостеприимство и уютная атмосфера. Меню, галерея, история и контакты.",
  metadataBase: new URL("https://localhost"),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "HRYG TIME",
    description:
      "Дагестанский стиль, высокогорная эстетика и спешалти-кофе.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-stone-50 text-stone-900`}> 
        <LanguageProvider>
          <LanguageUpdater />
          <div className="h-16" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
