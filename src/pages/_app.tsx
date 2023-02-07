import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { theme } from "@/config/theme";
import { Layout } from "@/components/Layouts";

const mockWorkerStart = () =>
  import("@/mocks/worker").then((mo) => {
    mo.worker.start();
  });
mockWorkerStart();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}
