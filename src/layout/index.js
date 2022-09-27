import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
    <div className='bg-gray-50' >
        <Header/>
        <main className='min-h-screen ' >
            {children}
        </main>
        <Footer/>
        
    </div>
  )
}

export default Layout