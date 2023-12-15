"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { EmployeeIcon, ClipboardListIcon } from "../../../public/assets/icons";

import {
  appLayoutStyles,
  StyledDrawer,
  Root,
  StyledListItemButton,
  StyledListItemText,
  StyledAppBar,
} from "./AppLayout.styles";

function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Root>
      {/* app bar */}
      <StyledAppBar elevation={0}>
        <Toolbar>
          <Typography color="textSecondary">SALAM</Typography>
          <Typography color="textSecondary">Farid Guluzade</Typography>
          <Avatar src="/avatar.png" />
        </Toolbar>
      </StyledAppBar>

      {/* Sidebar */}
      <StyledDrawer variant="permanent" anchor="left">
        <List>
          <StyledListItemButton
            $isActive={pathname === "/dashboard"}
            onClick={() => router.push("/dashboard")}
          >
            <ListItemIcon>
              <EmployeeIcon />
            </ListItemIcon>
            <StyledListItemText disableTypography={true} primary="Employess" />
          </StyledListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ClipboardListIcon />
            </ListItemIcon>
            <StyledListItemText primary="Checklist" />
          </ListItemButton>
        </List>
      </StyledDrawer>
      <Box sx={appLayoutStyles.page}>
        <Box sx={appLayoutStyles.toolbar}></Box>
        {children}
      </Box>
    </Root>
  );
}

export default AppLayout;
