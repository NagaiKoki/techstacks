import "@emotion/react";

import { ThemeType } from "@/config/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
