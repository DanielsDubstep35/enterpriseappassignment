"use client";

import { Icons } from "./icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from "./ui/dropdown-menu";

import { uiButton } from "../../types/nav";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { homeConfig } from "../../config/site";
import { ThemeToggle } from "./theme-changing-button";

export function TopHamburger() {
    return (
        <>
            <div className="hidden sm:flex sm:gap-6">
                <Button
                    onClick={() => window.open(homeConfig.endNav[0].href, "_blank")}
                    variant="ghost"
                    disabled={homeConfig.endNav[0].disabled}
                    className={cn(
                        "flex items-center justify-start space-x-2 px-3 py-1 w-full h-full rounded-md text-sm font-medium text-muted-foreground",
                        homeConfig.endNav[0].disabled && "cursor-not-allowed opacity-80"
                    )}
                >
                    <Icons.gitHub className="justify-start h-6 w-6" />
                    <span className="xs:block sm:hidden md:block">{homeConfig.endNav[0].label}</span>
                </Button>

                <Button
                    onClick={() => window.open(homeConfig.endNav[1].href, "_blank")}
                    variant="ghost"
                    disabled={homeConfig.endNav[1].disabled}
                    className={cn(
                        "flex items-center justify-start space-x-2 px-3 py-1 w-full h-full rounded-md text-sm font-medium text-muted-foreground",
                        homeConfig.endNav[1].disabled && "cursor-not-allowed opacity-80"
                    )}
                >
                    <Icons.twitter className="justify-start h-6 w-6" />
                    <span className="xs:block sm:hidden md:block">{homeConfig.endNav[1].label}</span>
                </Button>

                <ThemeToggle />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        className={cn(
                            "flex items-center text-sm font-medium text-muted-foreground hover:text-primary sm:hidden",
                        )}
                        variant="ghost"
                    >
                        <Icons.hamburger className="h-5 w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={15}>
                    <DropdownMenuLabel className="justify-center w-full">Menu</DropdownMenuLabel>
                    {/* {endbuttons?.map((endbutton, index) => (
                        <DropdownMenuItem key={index}>
                            {<endbutton.button />}
                        </DropdownMenuItem>
                    ))} */}

                    <DropdownMenuItem>
                        <Button
                            key={homeConfig.endNav[0].label}
                            onClick={() => window.open(homeConfig.endNav[0].href, "_blank")}
                            variant="ghost"
                            disabled={homeConfig.endNav[0].disabled}
                            className={cn(
                                "flex items-center justify-start space-x-2 px-3 py-1 w-full h-full rounded-md text-sm font-medium text-muted-foreground",
                                homeConfig.endNav[0].disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            <Icons.gitHub className="justify-start h-6 w-6" />
                            <span className="xs:block sm:hidden md:block">{homeConfig.endNav[0].label}</span>
                        </Button>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Button
                            key={homeConfig.endNav[1].label}
                            onClick={() => window.open(homeConfig.endNav[1].href, "_blank")}
                            variant="ghost"
                            disabled={homeConfig.endNav[1].disabled}
                            className={cn(
                                "flex items-center justify-start space-x-2 px-3 py-1 w-full h-full rounded-md text-sm font-medium text-muted-foreground",
                                homeConfig.endNav[1].disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            <Icons.twitter className="justify-start h-6 w-6" />
                            <span className="xs:block sm:hidden md:block">{homeConfig.endNav[1].label}</span>
                        </Button>

                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <ThemeToggle />

                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
