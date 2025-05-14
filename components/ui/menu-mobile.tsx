"use client"
import { NotebookPen, PanelRightOpen, PencilRuler, PenLine } from "lucide-react"
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "./sidebar"
import Link from "next/link"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const MenuMobile = () => {
    const { setOpenMobile } = useSidebar()
    const pathname = usePathname()
  
    useEffect(() => {
      setOpenMobile(false);
    }, [pathname, setOpenMobile])

    const getActiveLinkClass = (route: string) => {
        return route === pathname ? "font-bold" : "";
    }
    return(
        <>
            <div className="p-2.5">
                <SidebarTrigger className="h-[42px] w-[42px]">
                    <PanelRightOpen />
                </SidebarTrigger>
            </div>
            <Sidebar side="right">
                <SidebarGroup>
                    <SidebarHeader>
                        <SidebarGroupLabel>Fire School of Ministry</SidebarGroupLabel>
                    </SidebarHeader>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className="flex flex-col space-y-[20px]">
                                <SidebarMenuButton asChild>
                                    <Link href="/" passHref legacyBehavior>
                                        <span className={`flex gap-2 cursor-pointer ${getActiveLinkClass("/")}`}> <PenLine /> Application</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href="/agreement" passHref legacyBehavior>
                                        <span className={`flex gap-2 cursor-pointer ${getActiveLinkClass("/agreement")}`}> <NotebookPen /> Agreement</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href="/evaluation" passHref legacyBehavior>
                                        <span className={`flex gap-2 cursor-pointer ${getActiveLinkClass("/evaluation")}`}> <PencilRuler /> Evaluation</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </Sidebar>
        </>
    )
}