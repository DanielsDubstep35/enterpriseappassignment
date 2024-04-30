import { LucideIcon, LucideProps } from "lucide-react"
import { ButtonProps } from "../@/components/ui/button"

export interface NavItem {
    label: string
    href?: string
    disabled?: boolean
}

export interface uiButtonProperties {
    label: string
    icon: LucideIcon | ((props: LucideProps) => JSX.Element)
    href?: string
    disabled?: boolean
    functionality?: () => void
}

export interface uiButton {
    button: () => JSX.Element
}

export interface uiLink {
    link: () => JSX.Element
}
