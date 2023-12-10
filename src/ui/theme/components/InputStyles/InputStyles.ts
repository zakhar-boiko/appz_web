import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontFamily: "Commissioner",
    color: "#000",
  },
});

const lg = defineStyle({
  fontSize: "1rem",
  px: "2rem",
  py: "1.25rem !important",
  height: "auto",
});

const md = defineStyle({
  height: "auto",
  fontSize: "1rem",
  px: "1rem",
  py: "0.75rem !important",
});

const sm = defineStyle({
  height: "auto",
  fontSize: "0.875rem",
  px: "0.75rem",
  py: "0.65rem !important",
});

const xs = defineStyle({
  height: "auto",
  fontSize: "0.75rem",
  px: "0.65rem",
  py: "0.5rem !important",
});

const mobile = defineStyle({
  height: "auto",
  lineHeight: "1rem",
  fontSize: "0.875rem",
  px: "1rem",
  py: "1rem",
});

const sizes = {
  lg: definePartsStyle({ field: lg, addon: lg }),
  md: definePartsStyle({ field: md, addon: md }),
  sm: definePartsStyle({ field: sm, addon: sm }),
  xs: definePartsStyle({ field: xs, addon: xs }),
  mobile: definePartsStyle({ field: mobile, addon: mobile }),
};

export const InputStyle = defineMultiStyleConfig({ baseStyle, sizes });
