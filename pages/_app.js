
import '../styles/style.css'
import '../styles/home-page.scss'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../utils/Store/index';
import { useEffect, useState } from 'react';
import setAuthorizationToken from '../utils/AuthHeaders';
import { setUserInfo } from '../utils/Actions';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Head>
        <html lang={'en'} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
      </Head>
      <Provider store={store}>
        {loading ? "Loading..." :
          <Component {...pageProps} />}
      </Provider></>
  )
}

export default MyApp
