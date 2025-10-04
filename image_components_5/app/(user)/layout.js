import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
