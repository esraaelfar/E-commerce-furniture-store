/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'

function Footer() {
    return (
        <div id='contact'>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col md-4>
                            <div className='d-flex'>
                                <div className='about_us'>
                                <a className="navbar-brand" href="#"><span>F</span>URNI</a>
                                <p>
                                We are an anyone’s ultimate destination for getting this perfect kitchen table, cozy armchair or a beautiful and comfy king sized bed! All in all, whatever home furniture you’ll be looking for, look no further!
                                </p>
                                <i class="fa-brands fa-cc-visa"></i>
                                <i class="fa-brands fa-cc-paypal"></i>
                                <i class="fa-brands fa-cc-stripe"></i>
                                <i class="fa-brands fa-cc-discover"></i>
                                </div>
                                <div className='useful d-flex'>
                                    <p className='text-center'>Quick Links</p>
                                    <NavLink className='links' to='/living'>Living Room</NavLink>
                                    <NavLink className='links' to='/kitchen'>Kitchen</NavLink>
                                    <NavLink className='links' to='/dining'>Dining Room</NavLink>
                                    <NavLink className='links' to='/bed'>Bed Room</NavLink>
                                    <NavLink className='links' to='/decoration'>Decoration</NavLink>
                                </div>
                                <div className='contact'>
                                    <div className='d-flex'>
                                        <h2 className='text-center'>Contact Us</h2>
                                        <p>Address: Glasgow D04 89GR</p>
                                        <p>Phones: 800-2345-6789 - 800-2345-6789</p>
                                        <p>E-mail: info@demolink.org</p>
                                        <p>Hours: 7 days a week from 9:00 am to 7:00 pm</p>
                                    </div>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-pinterest"></i>
                                </div>
                            </div>
                            <p className='text-center copyright'>&copy; Copyright 2023. Design by Esraa Elfar  <i class="fa-solid fa-heart"></i></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
