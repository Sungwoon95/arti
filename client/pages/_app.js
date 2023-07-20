import NavBar from '../components/NavBar'
import '../styles/globals.css'
import '../styles/reset.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
