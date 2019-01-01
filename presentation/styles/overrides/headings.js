/**
 * overrides for spectacle headings default theme
 */
export function createHeading(colors = {}, fonts = {}) {
  return {
    h1: {
      color: "inherit",
      fontSize: "5.0625rem",
      fontFamily: fonts.primary,
      lineHeight: 1,
      fontWeight: "bold",
      margin: "1.5rem 0",
      zoom: 1
    },
    h2: {
      color: "inherit",
      fontSize: "3.75rem",
      fontFamily: fonts.primary,
      lineHeight: 1,
      fontWeight: "bold",
      margin: 0
    },
    h3: {
      color: "inherit",
      fontSize: "3rem",
      fontFamily: fonts.primary,
      lineHeight: 1,
      fontWeight: "bold",
      margin: "0.5rem auto"
    },
    h4: {
      color: "inherit",
      fontSize: "2.625rem",
      fontFamily: fonts.primary,
      lineHeight: 1,
      fontWeight: "bold",
      margin: "0.5rem auto"
    },
    h5: {
      color: "inherit",
      fontSize: "2.25rem",
      fontFamily: fonts.primary,
      lineHeight: 1,
      fontWeight: "bold",
      margin: "0.5rem auto"
    },
    h6: {
      color: "inherit",
      fontSize: "2.25rem",
      fontFamily: fonts.primary,
      lineHeight: 1,
      fontWeight: "bold",
      margin: "0.5rem auto"
    }
  };
}
