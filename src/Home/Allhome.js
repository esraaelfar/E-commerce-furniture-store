import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Collection from './Collection'
import Service from './Service'
import About from './About'
import Customer from './Customer'
import Footer from './Footer'

function Allhome() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Collection />
            <About />
            <Service />
            <Customer />
            <Footer />
        </div>
    )
}

export default Allhome
