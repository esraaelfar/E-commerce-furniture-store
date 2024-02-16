import React from 'react'
import {Container, Row, Col} from 'reactstrap'

function About() {
    return (
        <div  id='about'>
            <Container>
                <Row>
                    <Col md-4>
                        <div className='about'>
                            <p className='text-center'>About Us</p>
                            <div className='d-flex'>
                                <div className='content'>
                                </div>
                                <div className='contant'>
                                <h3>
                                    Our commitment to craftsmanship ensures the highest quality in every piece, marrying comfort with durability for furniture that stands the test of time. Explore our curated collections, each showcasing distinctive and artisanal creations, providing affordable luxury without compromise.
                                    At our Store, we embrace sustainability, incorporating eco-friendly practices to create furniture that aligns with your values. Our customer-centric approach ensures a seamless experience, with customization options available to make your furniture uniquely yours.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About
