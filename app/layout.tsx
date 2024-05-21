import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Dancing_Script, Fredericka_the_Great, Roboto } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import { AIModal } from "@/components/AIModal";
import HotJar from "@/components/Hotjar";
import { Providers } from "@/providers";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Negociação Colaborativa",
  description: "Negociação Colaborativa",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Roboto",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});
const theGreat = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-theGreat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dancing.variable} ${roboto.variable} ${theGreat.variable}`}
    >
      <GoogleAnalytics />
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center">
          <NextUIProvider>
            <Providers>
              {children}
              <AIModal />
            </Providers>
            <HotJar />
            <Toaster position="bottom-center" />
          </NextUIProvider>
        </main>
      </body>
    </html>
  );
}
