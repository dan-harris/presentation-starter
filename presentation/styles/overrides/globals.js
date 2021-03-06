/**
 * overrides for spectacle global default theme
 */
export function createGlobals(colors = {}, fonts = {}) {
  return {
    body: {
      background: colors.backgroundDefault,
      fontFamily: fonts.primary,
      fontWeight: "normal",
      fontSize: "1em",
      color: colors.textDefault,
      overflow: "hidden"
    },
    "_:-moz-tree-row(hover), .spectacle-deck": {
      perspective: "1000px"
    },
    "_:-moz-tree-row(hover), ul .appear": {
      display: "inline"
    },
    "html, body": {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0
    },
    "*": {
      boxSizing: "border-box"
    }
  };
}
