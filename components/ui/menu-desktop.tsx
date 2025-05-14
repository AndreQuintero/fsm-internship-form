"use client"
import { usePathname } from "next/navigation"
import { NavigationMenu, NavigationMenuLink } from "./navigation-menu"
import Link from "next/link"

export const MenuDesktop = () => {
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
                <Link href="/evaluation" passHref legacyBehavior>
                    <NavigationMenuLink  data-active={active("/evaluation")}>Evaluation</NavigationMenuLink>
                </Link>    
            </div>
        </NavigationMenu>
    )
}