import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default : "Shivam technical | Learn Web development",
    template: "%s | Shivam technical",
  },
  description: "Free tutorial on next.js react.js javascript, html, css, and full development by shivam technical",
  keywords: ["React", "Next.Js", "Web Development", "Shivam Technical"],
  icons:{
    icon: "/images/icon.png"
  }
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
