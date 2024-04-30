import { homeConfig } from "../../config/site"
import { MainNav } from "../components/daniels-nav"
import { TopHamburger } from "./top-hamburger"
import { buttonCreator } from "./button-creator"
import { uiButton } from "../../types/nav"

export function DanielsHeader() {

    // var navButtons: uiButton[] = []

    // // return buttons
    // homeConfig.endNav.map((item) => {
    //     // if (item.button) {
    //     //     navButtons.push(item.button)
    //     // }
    //     // else if (item.href) {
    //     //     navButtons.push(buttonCreator(item.icon, item.label, item.disabled, item.functionality))
    //     // }

    //     if (item.button) {
    //         navButtons.push(item)
    //     }
    //     else if (item.href) {
    //         navButtons.push(buttonCreator(item.icon, item.label, item.disabled, item.href))
    //     }
    // })

    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center justify-between">
                <MainNav items={homeConfig.mainNav} />
                <TopHamburger />
            </div>
        </header>
    )
}
