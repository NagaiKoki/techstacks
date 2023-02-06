const pxValue = {
  "1": "1px",
  "2": "2px",
  "4": "4px",
  "8": "8px",
  "12": "12px",
  "16": "16px",
  "24": "24px",
  "28": "28px",
  "32": "32px",
  "36": "36px",
  "40": "40px",
  "48": "48px",
  "64": "64px",
  "128": "128px",
  full: "100%",
} as const;

const fontSizeValue = {
  "8": "8px",
  "12": "12px",
  "16": "16px",
  "20": "20px",
  "24": "24px",
  "32": "32px",
  "48": "48px",
  "64": "64px",
} as const;

export const theme = {
  color: {
    primary: {
      "50": "#EBF8FF",
      "100": "#BEE3F8",
      "200": "#90CDF4",
      "300": "#63B3ED",
      "400": "#4299E1",
      "500": "#3182CE",
      "600": "#2B6CB0",
      "700": "#2C5282",
      "800": "#2A4365",
      "900": "#1A365D",
    },
    gray: {
      "200": "#E2E8F0",
      "400": "#A0AEC0",
      "600": "#4A5568",
      "800": "#1A202C",
    },
    white: "#ffffff",
    black: "#171923",
  },
  width: {
    ...pxValue,
    "max-v": "100vw",
  },
  height: {
    ...pxValue,
    "max-h": "100vh",
  },
  padding: pxValue,
  margin: pxValue,
  fontSize: fontSizeValue,
} as const;

export type ThemeType = typeof theme;
