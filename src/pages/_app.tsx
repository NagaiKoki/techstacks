import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { theme } from "@/config/theme";
import { Layout } from "@/components/Layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}