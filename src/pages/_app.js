import {GeneralProvider} from '../components/Contex/Contex'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GeneralProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeneralProvider>
  )
}

export default MyApp
