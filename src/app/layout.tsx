import type { Metadata } from "next";
import "./globals.css";

import { SidebarProvider } from "@/context/SidebarContext";
import AppLayout from "@/ui/AppLayout";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Humanline - Employee Management",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <SidebarProvider>
          <body>
            <AppLayout>{children}</AppLayout>
          </body>
        </SidebarProvider>
      </ThemeRegistry>
    </html>
  );
}
