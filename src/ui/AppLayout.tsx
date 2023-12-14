import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { EmployeeIcon, ClipboardListIcon } from "../../public/assets/icons";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {/* app bar */}
      <AppBar sx={{ background: "#fafafa" }}>
        <Toolbar>
          <Typography color="textSecondary">SALAM</Typography>
          <Typography color="textSecondary">Farid Guluzade</Typography>
          <Avatar src="/avatar.png" />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItemButton>
            <ListItemIcon>
              <EmployeeIcon />
            </ListItemIcon>
            <ListItemText primary="Employess" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ClipboardListIcon />
            </ListItemIcon>
            <ListItemText primary="Checklist" />
          </ListItemButton>
        </List>
      </Drawer>
      {children}
    </Box>
  );
}

export default AppLayout;
