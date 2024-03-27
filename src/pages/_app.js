import { MoralisProvider } from "react-moralis";
import Header from "@/app/components/Header";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Header />
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
