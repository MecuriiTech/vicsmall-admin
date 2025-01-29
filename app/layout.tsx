import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Tabs from "./components/tabs";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vicsmall Admin App",
  description: "Admin management platform for Vicsmall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        <div className="px-4">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <Sidebar />
            <Tabs />
            <div className="w-full flex-[11]">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
