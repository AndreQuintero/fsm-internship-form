"use client"
import { DeviceTypeEnum, useDeviceType } from "@/app/hooks/useDeviceType"
import { MenuDesktop } from "./menu-desktop"
import { MenuMobile } from "./menu-mobile"
import { useEffect, useState } from "react"

export const Menu = () => {
    const [mounted, setMounted] = useState(false)
    const deviceType = useDeviceType()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <header className="flex w-full">
            {deviceType === DeviceTypeEnum.DESKTOP ? <MenuDesktop /> : <MenuMobile />}
        </header>
    )
}