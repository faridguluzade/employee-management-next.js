"use client";

import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  PaletteColorOptions,
} from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";

import { deepOrange, grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface CustomPalette {
    greyScale: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    greyScale: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
  augmentColor({ color: { main: mainColor } });

const mode = "light";

const themeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "14px",
          padding: "12px 18px",
          textTransform: "capitalize",
          fontWeight: 700,
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Manrope",
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 14,
    },
  },
  palette: {
    greyScale: createColor("#111827"),
    // palette values for light mode
    primary: {
      main: "#0CAF60",
      light: "#3cbf7f",
      dark: "#087a43",
      contrastText: "#fff",
    },
    text: {
      primary: "#111827",
      secondary: "#687588",
      disabled: "#A0AEC0",
    },
    success: {
      main: "#0CAF60",
      light: "#3cbf7f",
      dark: "#087a43",
      contrastText: "#fff",
    },
  },
};

const theme = createTheme(themeOptions);

function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default ThemeRegistry;
