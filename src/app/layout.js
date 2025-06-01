import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Station",
  description: "Blog Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <nav className="bg-black p-4 pl-12 fixed top-0 left-0 w-full z-50">
          <Link href={"/"} className="text-white text-4xl font-bold flex items-center gap-2">
            <Image src="/blog.png" width={40} height={40} alt="Blog Logo" />
            <span>Blog Station</span>
          </Link>
          <hr className="border-t-gray-700 mt-4" />
        </nav>
        <div className="container pt-24 flex items-center mb-6 pl-12 pr-12">
          {children}
        </div>
      </body>
    </html>
  );
}
