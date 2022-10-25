// import '../styles/globals.css'
import Head from 'next/head'
import '../public/css/base.css'
import '../public/css/justified.css'
import '../public/css/fontello.css'
import '../public/css/magnific-popup.css'
import '../public/css/swiper.css'
import '../public/css/style.css'
import '../public/css/custom.css';
import 'metismenujs/dist/metismenujs.css'





export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <meta name="description" content="Industify" />
        <meta name="author" content="TrendyCoder" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google Fonts --> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </Head>

      <Component {...pageProps} />

    </>
  )
}
