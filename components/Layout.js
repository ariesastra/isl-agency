// DEPENDENCIES
import Head from 'next/head'

// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/**
 * NO STYLE ON LAYOUT
 */

function Layout({ children, title, }) {
    const headTitle = 'ISL Agency'
    return (
        <>
            <Head>
                <title>{`${headTitle} | ${title}`}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${headTitle} | ${title}`} />
                <meta name="twitter:title" content={`${headTitle} | ${title}`} />
                <meta property="og:url" content="" />
                <meta name="twitter:site" content="@islagency" />
                <meta name="twitter:card" content="summary" />
                <meta name="description" content="" />
                <meta property="og:description" content="" />
                <meta name="twitter:description" content="" />
                <meta property="og:image" content="" />
                {/**
                    META ROBOTS
                    index : tells bots to index the page,
                    follow: tells bots crawl link on the page.
                */}
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                {/* NAVBARS */}
                <Navbar />
                {/* BODY */}
                {children}
                {/* FOOTER */}
                <Footer />
            </div>
        </>
    )
}

export default Layout
