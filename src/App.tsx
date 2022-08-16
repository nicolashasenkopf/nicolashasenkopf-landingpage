import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";
import { Content } from "./Content";
import { Footer } from "./Footer";

const theme = extendTheme({
  colors: {
    bg: "#1A202C",
    secondaryLight: "#A0AEC0",
    secondaryMedium: "#718096",
    secondaryDark: "#2A4365",
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 700,
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Content />
    <Footer />
  </ChakraProvider>
);
