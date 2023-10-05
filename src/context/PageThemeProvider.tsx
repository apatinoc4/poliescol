import { FC, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface PageThemeProviderProps {
  children: ReactNode;
}

const gray = "#e9e9e9";

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "&.productLines-dropdown": {
            backgroundColor: gray,
            borderRadius: 3,
            padding: "10px 20px",

            ".MuiInput-underline": {
              "&:hover": {
                border: "none !important",
              },
            },

            ".MuiInputBase-root": {
              "::before": {
                border: "none",
              },

              ".MuiSelect-standard": {
                "&:focus": {
                  backgroundColor: gray,
                },
              },

              "&.Mui-focused": {
                "::after": {
                  border: "none",
                },
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
            left: "-45px",
            position: "absolute",
            top: "50%",

            svg: {
              height: 27,
              transform: "translateX(5px)",
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