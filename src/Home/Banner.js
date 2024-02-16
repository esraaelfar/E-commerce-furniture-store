/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-scroll'

function Banner() {
return (
    <div>
        <div className='banner'>
            <div className='visible'>
                <video autoPlay muted loop playsInline>
                    <source src='/asset/img/sofa.mp4' type='video/mp4'></source>
                </video>
            </div>
            <p className='text-center'>Modern furniture store</p>
            <button><Link to='collection'  smooth={true} offset={-10} duration={500} >Discover</Link></button>
        </div>
    </div>
    )
}
export default Banner
