import Link from "next/link"

import { homeConfig } from "../../config/site"
import { buttonVariants } from "../../@/components/ui/button"
import { MovieButtons } from "../../@/components/interactive-client"

// state for loading, without useState, because this is a server-side function

export default function IndexPage() {

    return (
        <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 h-full" suppressHydrationWarning={true}>
            <div className="flex max-w-[980px] max-h-[500px] flex-col gap-2">
                <h1 className="text-3xl font-lexend leading-tight tracking-tighter md:text-4xl">
                    {homeConfig.main_description}
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    {homeConfig.second_description}
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    href={homeConfig.links.docs}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    Documentation
                </Link>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href={homeConfig.links.github}
                    className=""
                >
                    GitHub
                </Link>
            </div>
            {
                <div className="grid grid-cols-4 gap-4 w-full h-full bg-white outline-1 outline-black dark:bg-black dark:outline-white rounded-lg">
                {
                    MovieButtons()
                }
            </div>
            }
        </section >
    )
}
