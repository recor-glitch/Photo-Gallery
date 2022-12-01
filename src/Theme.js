import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[50],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlinedPrimary: {
          color: "white",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#73737d",
        },
      },
    },
  },
});
