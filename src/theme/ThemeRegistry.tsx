"use client";

import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  PaletteColorOptions,
} from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";

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
      main: "#111827",
      light: "#687588",
      dark: "#A0AEC0",
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "14px", // Set the font size for the input value
          },
          "& .MuiInputLabel-root": {
            fontSize: "14px",
            color: "#A0AEC0",
            // Set the font size for the label (which also affects the placeholder)
          },

          background: "#fff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            fontSize: "14px", // Set the font size for the select value
            padding: "13px", // Adjust the padding for the select value
          },
          "& .MuiSelect-icon": {
            top: "calc(50% - 12px)", // Adjust the vertical alignment of the select icon
          },
          background: "#fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px", // Set the font size for the InputLabel
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px", // Set the font size for the MenuItem
          // Add any other styles you want to customize for MenuItem
        },
      },
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
