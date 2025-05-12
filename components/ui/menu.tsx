import { MenuDesktop } from "./menu-desktop"
import { MenuMobile } from "./menu-mobile"

export const Menu = () => {
    return (
        <header className="flex w-full justify-end">
            <div className="hidden md:block">
                <MenuDesktop />
            </div>
            <div className="block md:hidden">
                <MenuMobile />
            </div>
        </header>
    )
}