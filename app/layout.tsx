import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Menu } from "@/components/ui/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Analytics } from '@vercel/analytics/next';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600'],
  style: ['normal'],
  variable: '--font-outfit'
})


export const metadata: Metadata = {
  title: "Fire School of Ministry Internship Form",
  description: "Fire School of Ministry Phillipines Internship Form",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <SidebarProvider>
          <Menu />
        </SidebarProvider>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
