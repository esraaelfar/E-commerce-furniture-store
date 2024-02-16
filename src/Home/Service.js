import React from 'react'
import {Container, Row, Col} from 'reactstrap'

function Service() {
    return (
        <div id='service'>
            <Container>
                <Row>
                    <Col md-4>
                        <div className='service'>
                            <p className='text-center'>Our Service</p>
                            <div className='d-flex'>
                                <div className='serv1 d-flex'>
                                    <i class="fa-solid fa-truck"></i>
                                    <h5>Quick Delivery</h5>
                                </div>
                                <div className='serv2 d-flex'>
                                    <i class="fa-solid fa-cart-arrow-down"></i>
                                    <h5>Pick Up In Store</h5>
                                </div>
                                <div className='serv3 d-flex'>
                                    <i class="fa-solid fa-gift"></i>
                                    <h5>Special Packaging</h5>
                                </div>
                                <div className='serv4 d-flex'>
                                    <i class="fa-solid fa-rotate-left fa-rotate-180"></i>
                                    <h5>Return & Refund Policy</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Service
