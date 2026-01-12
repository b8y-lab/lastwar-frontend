import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

//import { inter } from "@/app/ui/fonts";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Last War The Game",
    description: "Last War: Evolution Game",
    icons: { icon: "/favicon.png" }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1
}

export default function RootLayout( { children }: { children: ReactNode } ) 
{
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    )
}

