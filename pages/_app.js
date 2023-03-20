import Footer from "../components/Footer";
import MdNav from "../components/MdNav";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
     <MdNav/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
