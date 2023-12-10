import { extendTheme } from "@chakra-ui/react";
import { InputStyle as Input } from "./components/InputStyles/InputStyles";

// example theme
export const mainTheme = extendTheme({
  colors: {
    main: "#1F5D72",
  },

  fonts: {
    body: "Commissioner, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.25rem",
  },
  components: {
    Input,

    Button: {
      sizes: {
        sm: {
          fontSize: "md",
        },
      },
      variants: {
        primary: {
          bg: "#1F5D72",
          fontSize: "md",
          color: "white",
          fontWeight: "500",
          py: "1.125rem",
          px: "4rem",
          minHeight: "fit-content",
          height: "fit-content",
          minWidth: "250",
          _hover: {
            opacity: 0.5,
          },
        },
      },
    },
  },
});
