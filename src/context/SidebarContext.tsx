"use client";

import { createContext, useContext, useState } from "react";
import { ISidebar, Anchor } from "@/interfaces";

const SidebarContext = createContext<ISidebar | null>(null);

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState({
    employee: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen({ ...isOpen, [anchor]: open });
    };

  <SidebarContext.Provider value={{ isOpen, toggleDrawer }}>
    {children}
  </SidebarContext.Provider>;
}

function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context)
    throw new Error("SidebarContext was used outside of SidebarContext");

  return context;
}

export { SidebarProvider, useSidebar };
