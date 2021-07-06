// DEPENDENCIES
import Script from 'next/script'
// COMPONENT
import Layout from '../components/Layout'

// STYLE

export default function Home() {

  return (
    <>
      <Layout title={'Your Digital Partner'}>
        {/* CHILDREN */}
        <h1>Homepage</h1>
      </Layout>
      
      {/* LOAD SCRIPT JUST FOR HOMEPAGE */}
      <Script src='/js/jquery-3.2.1.min.js'/>
    </>
  )
}
