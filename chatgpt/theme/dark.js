import { nord as base } from "react-syntax-highlighter/dist/esm/styles/prism";

/** @type { React.CSSProperties } */
let baseBg = {
  borderRadius: "0",
  margin: "0",
  background: "transparent",
  overflow: "hidden",
  textAlign: "left",
  whiteSpace: "pre",
  lineHeight: "1.5",
  wordBreak: "break-all",
  wordWrap: "break-word",
  borderBottomLeftRadius: "0.375rem",
  borderBottomRightRadius: "0.375rem",
  width: "auto",
};
let dark = {
  ...base,
  'pre[class*="language-"]': {
    ...base['pre[class*="language-"]'],
    ...baseBg,
  },
  'code[class*="language-"]': {
    ...base['code[class*="language-"]'],
    ...baseBg,
  },
  property: {
    color: "#4E93CE",
  },
  keyword: {
    color: "#4E93CE",
  },
  tag: {
    color: "#4E93CE",
  },
  function: {
    color: "#F15457",
  },
  selector: {
    color: "#00a67d",
  },
  "attr-name": {
    color: "#00a67d",
  },
  string: {
    color: "#00a67d",
  },
  char: {
    color: "#00a67d",
  },
  builtin: {
    color: "#e9950c",
  },
  inserted: {
    color: "#00a67d",
  },
};
export default dark;