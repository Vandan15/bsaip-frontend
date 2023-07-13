
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    verifyToken();
    Aos.init();
  }, [])
  const verifyToken = () => {
    const cookie = getCookie('token');
    const username = getCookie('username');
    const email = getCookie('email');
    const cart = getCookie('cart');
    const role = getCookie('role');
    const user = getCookie('user');
    console.log('cookie here',cookie)
    if (cookie !== undefined && cookie !== "undefined") {
      //check token API
      setAuthorizationToken(`Bearer ${cookie}`, null, null, false);
      if (cart !== undefined && cart !== "undefined") {
        store.dispatch(setUserInfo(
          {
            cookie,
            role,
            username,
            email,
            cart: JSON.parse(cart).data,
            user: user && JSON.parse(user),
            is_logged: (cookie) == 'undefined' || cookie == undefined ? false : true
          }));
      } else {
        store.dispatch(setUserInfo(
          {
            cookie,
            username,
            role,
            email,
            user: JSON.parse(user),
            is_logged: (cookie) == 'undefined' || cookie == undefined ? false : true
          }));
      }
      setLoading(false);
    } else if (cart !== undefined && cart !== "undefined") {
      setLoading(false);
      if (cart !== undefined && cart !== "undefined") {
        store.dispatch(setUserInfo(
          {
            cart: JSON.parse(cart).data,
            // user: JSON.parse(user),
          }));
      }
    } else {
      setLoading(false);
    }

  }
  const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
  }
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
