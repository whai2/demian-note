import { Toaster } from "sonner";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { ConvexClientProvider } from '@/components/providers/convex-provider';
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demian Notion',
  description: 'Generated by create next app',
  icons: {
    icon: [
      {
        media: "(prefers-color-sheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-sheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                  storageKey="demian-theme-2"
                  >
              < Toaster />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
      </ConvexClientProvider>
        </body>
    </html>
  )
}
 