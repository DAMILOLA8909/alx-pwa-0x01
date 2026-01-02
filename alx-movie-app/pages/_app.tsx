// pages/_app.tsx
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Only keep viewport and any dynamic meta tags here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove manifest and icon links from here - they go in _document.tsx */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}