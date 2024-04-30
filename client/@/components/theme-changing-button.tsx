"use client";

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import Link from "next/link"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            key="theme-toggle"
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={cn(
                "flex items-center justify-start space-x-2 px-3 py-1 w-full h-full rounded-md text-sm font-medium text-muted-foreground",
            )}
        >
            {theme === "light" ? <Moon className="justify-start h-6 w-6"></Moon> : <Sun className="justify-start h-6 w-6"></Sun>}
            <span className="sm:hidden justify-start">{theme === "light" ? "Dark" : "Light"}</span>
        </Button>
    )
}
