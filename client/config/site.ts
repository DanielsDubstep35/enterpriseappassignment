import { Icons } from "../@/components/icons"
import { ThemeToggle } from "../@/components/theme-changing-button"

export type homeConfig = typeof homeConfig

export const homeConfig = {
  name: "DanielFlix",
  main_description:
    "Movie database infrastructure for the internet.",
  second_description:
    "Powered by many popular technologies and frameworks such as the Whisper Api and the Stripe Framework!",
  mainNav: [
    {
      label: "Movies",
      href: "http://localhost:3000/",
    },
    {
      label: "About",
      href: "http://localhost:3000/about",
    },
  ],
  endNav: [
    {
      label: "GitHub",
      icon: Icons.gitHub,
      href: "https://github.com/",
      disabled: false,
    },
    {
      label: "Twitter",
      icon: Icons.twitter,
      href: "https://twitter.com/",
      disabled: false,
    },
    {
      button: ThemeToggle,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
