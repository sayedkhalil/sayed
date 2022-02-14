import { Suspense } from 'react/cjs/react.production.min'
import Layout1 from '../layout/Layout1'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
<Layout1 >
<Component {...pageProps} />
</Layout1>
  )
}

export default MyApp
export async function getServerSideProps() {


  // Pass data to the page via props
  return { props: { data:"555" } }
}

