import "../../styles/globals.css"
import { Metadata } from "next"

import { homeConfig } from "../../config/site"
import { fontSans } from "../../@/lib/fonts"
import { cn } from "../../@/lib/utils"
import { DanielsHeader } from "../../@/components/daniels-header"
import { ThemeProvider } from "../../@/components/theme-provider"

export const metadata: Metadata = {
    title: {
        default: homeConfig.name,
        template: `%s - ${homeConfig.name}`,
    },
    description: homeConfig.main_description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <DanielsHeader />
                        <div className="h-screen w-screen">{children}</div>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
