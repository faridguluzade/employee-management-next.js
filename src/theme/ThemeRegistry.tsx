"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";

import { deepOrange, grey } from "@mui/material/colors";

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
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
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
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
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
