import Layout from "../components/layout/Layout.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // console.log(Component);
  // console.log(pageProps);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
