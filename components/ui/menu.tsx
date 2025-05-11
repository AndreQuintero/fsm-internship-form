"use client"
import Link from "next/link"
import { NavigationMenu,NavigationMenuLink } from "./navigation-menu"
import { usePathname } from "next/navigation"

export const Menu = () => {
    const pathname = usePathname()
    const active = (route: string) => {
        return route === pathname
    }
    return (
        <NavigationMenu>
            <div className="flex space-x">
                <Link href="/" passHref legacyBehavior>
                    <NavigationMenuLink data-active={active("/")}>Application</NavigationMenuLink>
                </Link>
                <Link href="/agreement" passHref legacyBehavior>
                    <NavigationMenuLink  data-active={active("/agreement")}>Agreement</NavigationMenuLink>
                </Link>    
                <NavigationMenuLink>Evaluation</NavigationMenuLink>
            </div>
        </NavigationMenu>
    )
}