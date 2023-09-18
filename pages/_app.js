import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import theme from "./theme";
import RootLayout from "./layouts";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
