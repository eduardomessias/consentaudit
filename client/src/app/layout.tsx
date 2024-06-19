import type { Metadata } from "next"
import { Inter, Atkinson_Hyperlegible } from "next/font/google"

import "@/app/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import NavBar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"

const inter = Inter({ subsets: ["latin"] })
const atkinson = Atkinson_Hyperlegible({ weight: ['400', '700'], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Consent Audit",
  description: "A tool to help you audit your personal data access authorization consent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={atkinson.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
