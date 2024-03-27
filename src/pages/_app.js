import { MoralisProvider } from "react-moralis";
import Header from "@/app/components/Header";
import "../app/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace built with Next.js and Moralis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <Header />
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
}
