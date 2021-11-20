import { AppProps } from "next/app";
import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ToastProvider autoDismissTimeout={10000}>
      <Head>
        <title>Play Spotify in Browser for NowPlaying</title>
      </Head>
      <Component {...pageProps} />
    </ToastProvider>
  );
};

export default MyApp;
