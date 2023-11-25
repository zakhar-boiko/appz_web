import { extendTheme } from "@chakra-ui/react";

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
          paddingVertical: "1.125rem",
          paddingHorizontal: "4rem",
          minWidth: "344",
        },
      },
    },
  },
});
