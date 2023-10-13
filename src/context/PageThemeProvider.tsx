"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { futuraBk, futuraLt, futuraMd, futuraHV } from "@/fonts/index";

interface PageThemeProviderProps {
  children: ReactNode;
}

const gray = "#e9e9e9";
const red = "#e2001a";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "&.productLines-dropdown": {
            backgroundColor: gray,
            borderRadius: 3,
            padding: "10px 20px",
            width: "100%",

            [`@media (max-width:${1024}px)`]: {
              marginLeft: "1.5rem",
              maxWidth: "20.313rem",
            },

            ".MuiInput-underline": {
              "&:before, &:after": {
                display: "none",
              },
            },

            ".MuiInputBase-root": {
              "::before": {
                border: "none",
              },

              ".MuiSelect-standard": {
                fontFamily: futuraBk.style.fontFamily,
                "&:focus": {
                  backgroundColor: gray,
                },
              },

              "&.Mui-focused": {
                "::after": {
                  border: "none",
                },
              },

              svg: {
                color: "#818181",
              },
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.productLines-back": {
            transform: "translateY(-50%)",
            left: "-60px",
            position: "absolute",
            top: "50%",

            [`@media (max-width:${1024}px)`]: {
              transform: "translateY(0)",
              left: 0,
              position: "relative",
              padding: 0,
            },

            svg: {
              height: 27,
              width: 27,

              [`@media (max-width:${1024}px)`]: {
                height: 17,
                width: 17,
              },
            },
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.drawer-menu": {
            padding: "7.25rem 3.875rem 0 2.625rem",
            display: "flex",
            flexDirection: "column",
            gap: "2.75rem",

            ".MuiListItem-root": {
              padding: 0,

              ".MuiListItemText-root": {
                "&.active": {
                  color: red,
                },
                ".MuiTypography-root": {
                  fontFamily: futuraBk.style.fontFamily,
                  fontSize: "1.25rem",
                },
              },
            },
            a: {
              all: "unset",
              cursor: "pointer",
            },
          },
        },
      },
    },
  },
});

const PageThemeProvider: FC<PageThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageThemeProvider;
