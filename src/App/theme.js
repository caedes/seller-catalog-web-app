import { createTheme, colors } from "@mui/material";

const { common } = colors;

const designToken = {
  skyBlue: "#3778b3",
  greyBlue: "#8babc4",
  skyBlueDark: "#0d293f",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: designToken.skyBlue,
    },
    secondary: {
      main: designToken.greyBlue,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "navigation" },
          style: {
            color: common.white,
          },
        },
        {
          props: { variant: "navigation", color: "active" },
          style: {
            backgroundColor: designToken.skyBlueDark,
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
  },
});
