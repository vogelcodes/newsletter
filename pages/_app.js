import 'tailwindcss/tailwind.css'
import Head from 'next/dist/next-server/lib/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Minha Incrível Newsletter</title>

    </Head>
    <Component {...pageProps}/>
    </>

  ) 

  
}

export default MyApp
