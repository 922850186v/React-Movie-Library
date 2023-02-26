import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Head from './Head'
import Introduction from './Introduction'
import MainVisual from './MainVisual'
// import MovieBox from './MovieBox'
import QuickInfo from './QuickInfo'

function Home() {
  return (
    <div>
        <Head/>
        <MainVisual/>
        <Introduction/>
        <QuickInfo/>
        {/* <MovieBox /> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home