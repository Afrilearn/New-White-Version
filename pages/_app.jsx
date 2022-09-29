import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "../components/layouts";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

import {store } from "../redux/store";
import { Provider } from "react-redux";
import { persistGate } from "redux-persist/integration/react";
import Darkmode from 'darkmode-js';
 
function MyApp({ Component, pageProps }) {
  const options = {
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  
  return (
    <Provider store={store}>
      {/* <persistGate persistor={persistor}> */}
      <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SessionProvider>
      {/* </persistGate> */}
    </Provider>
  );
}

export default MyApp;
