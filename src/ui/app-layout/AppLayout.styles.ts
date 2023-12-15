import { Box, SxProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

const drawerWidth = "280px";

export const Root = styled(Box)`
  display: flex;
`;

export const appLayoutStyles: Record<string, SxProps<Theme> | undefined> = {
  page: {
    background: (theme) => theme.palette.grey[50],
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
