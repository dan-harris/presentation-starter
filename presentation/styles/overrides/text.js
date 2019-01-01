/**
 * overrides for spectacle text default theme
 */
export function createText(colors = {}, fonts = {}) {
  return {
    color: "inherit",
    fontSize: "1.875rem",
    fontFamily: fonts.primary,
    margin: "0.25rem auto"
  };
}
