import GlobalStyles from '../styles/globals'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
