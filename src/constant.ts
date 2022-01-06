const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  primary: {
    black: "hsl(244, 23%, 12%)",
    white: "hsl(20, 33%, 98%)",
    yellow: "hsl(33, 100%, 70%)",
    orange: "hsl(12, 94%, 65%)",
    turkus: "hsl(177, 68%, 64%)",
  },
};