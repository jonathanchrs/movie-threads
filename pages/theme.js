import { extendTheme } from "@chakra-ui/react";

const config = {
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(config);

export default theme;
