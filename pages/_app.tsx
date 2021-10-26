import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <title>Jae Park Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
export default MyApp;
