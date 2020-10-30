import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    light: {
        primaryColor: "rgb(255, 92, 92)",
        primaryVariant: "#ff2d2d",
        secondaryColor: "#1b9999",
        onPrimary: "rgb(250, 250, 250)",
        onBackground: "rgb(66, 66, 66)",
        onBackgroundAlt: "rgba(66, 66, 66, 0.7)",
        background: "rgb(255, 255, 255)",
        boxShadow: "0 5px 20px 1px rgba(0, 0, 0, 0.5)"
    },
    dark: {
        primaryColor: "rgb(150, 65, 255)",
        primaryVariant: "#6c63ff",
        secondaryColor: "#03dac5",
        onPrimary: "#000",
        onBackground: "rgba(255, 255, 255, 0.9)",
        onBackgroundAlt: "rgba(255, 255, 255, 0.7)",
        background: "#121212",
        boxShadow: "0 5px 20px 1px rgba(0, 0, 0, 0.5)"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
