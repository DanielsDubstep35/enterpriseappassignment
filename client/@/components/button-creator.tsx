import { uiButton } from "../../types/nav"
import { cn } from "../lib/utils"
import { LucideIcon, LucideProps } from "lucide-react"
import { Button } from "./ui/button"
import { uiLink } from "../../types/nav"
import Link from "next/link"

export function buttonCreator(Icon: LucideIcon | ((props: LucideProps) => JSX.Element), label: string, disabled: boolean, href: string): uiButton {
    return {
        button: () => (
            <Button
                key={label}
                onClick={() => window.open(href, "_blank")}
                variant="ghost"
                disabled={disabled}
                className={cn(
                    "flex items-center justify-start space-x-2 px-3 py-1 w-full h-full rounded-md text-sm font-medium text-muted-foreground",
                    disabled && "cursor-not-allowed opacity-80"
                )}
            >
                <Icon className="justify-start h-6 w-6" ></Icon>
                <span className="xs:block sm:hidden md:block">{label}</span>
            </Button>
        )
    }
}

export function MovieButton(id: string, title: string, year: string, thumbnail: string): uiLink {

    return {
        link: () => (
            <Link
                key={id}
                href={`/movie/${id}`}
                className={cn(
                    "bg-transparent outline-none flex flex-col space-y-1 p-2 rounded-lg text-muted-foreground",
                )}
            >
                <img src={thumbnail} alt={title} className="rounded-lg" />
                <span className="text-sm font-medium">{title}</span>
                <span className="text-xs">{year}</span>
            </Link>
        )
    }
}
