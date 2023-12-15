import { Box, SxProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButtonProps } from "@mui/material/ListItemButton";
import AppBar from "@mui/material/AppBar";

type StyledListItemButtonProps = ListItemButtonProps & {
  $isActive?: boolean | undefined;
  theme?: Theme;
};

const drawerWidth = "280px";

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth};
  & .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${drawerWidth};
    padding: 24px 32px;
  }
`;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  background: theme.palette.grey[200],
  borderBottom: theme.palette.grey[200],
}));

export const Root = styled(Box)`
  display: flex;
`;

export const StyledListItemButton = styled(
  ListItemButton
)<StyledListItemButtonProps>`
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive && props.theme.palette.grey[200]};
`;

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightBold,
}));

export const appLayoutStyles: Record<string, SxProps<Theme> | undefined> = {
  page: {
    background: "#0000",
    width: "100%",
    padding: (theme) => theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      padding: "24px 32px",
    },
  },
  toolbar: (theme) => theme.mixins.toolbar,
  item: {
    borderRadius: "10px",
  },
  active: {
    background: (theme: Theme) => theme.palette.grey[200],
  },
  root: {
    display: "flex",
  },
};
