import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
import '../styles/reset.css'
import { store } from '../store.js'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  )
}

export default MyApp
