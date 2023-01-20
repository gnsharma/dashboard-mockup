import { createTheme, Theme } from "@mui/material";

// button: {
//   margin: theme.spacing(1),
//   marginLeft: theme.spacing(0),
//   marginRight: theme.spacing(0),
//   color: "blue",
//   "&[disabled]": {
//     cursor: "not-allowed",
//     pointerEvents: "all",
//   },
// },

const overrides = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          color: "#fff",
          fontWeight: 600,

          "&.Mui-disabled": {
            backgroundImage: "linear-gradient(261deg, silver, silver)",
            cursor: "not-allowed",
            pointerEvents: "all !important",
          },
        },
        outlined: {
          background: "none",
          color: "#4241AD",
          borderColor: "#4241AD",
        },
      },
    },
  },
};

let theme: Theme = createTheme({
  ...overrides,
  palette: {
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Karla, Archivo", "Open Sans", "sans-serif"].join(","),
  },
});

theme = createTheme({
  typography: {
    h3: {
      fontFamily: ["Karla, Archivo", "Open Sans", "sans-serif"].join(","),
      [theme.breakpoints.only("xs")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.4rem",
      },
    },
  },
});

export default theme;
