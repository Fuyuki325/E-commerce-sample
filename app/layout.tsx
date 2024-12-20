import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/nav/NavBar";
import Footer from "@/app/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen bg-red-500">
          <NavBar />
          <main className="bg-orange-500 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
