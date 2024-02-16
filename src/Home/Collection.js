import React from 'react'
import {Container, Row, Col} from 'reactstrap'


function Collection() {
    return (
        <div id='collection'>
            <Container className='collection'>
                <Row>
                    <Col md-4>
                        <p className='text-center'><span>Our Collection</span><br /> Made Irresistably Elegant And Modern</p>
                        <div className='cards d-flex'>
                            <div className='card_1'>
                                <div className='front-card'>
                                    <h2>Bed Rooms</h2>
                                </div>
                                <div className='back-card'>
                                    <h2 className='text-center'>Bed Rooms</h2>    
                                    <p className='text-center'> our bedroom is a cozy and elegant retreat with our luxurious and timeless furniture. Create a soothing and contemporary oasis with chic designs that invite relaxation</p>
                                </div>
                            </div>
                            <div className='card_2'>
                                <div className='front-card'>
                                    <h2>Kitchen</h2>
                                </div>
                                <div className='back-card'>
                                    <h2 className='text-center'>Kitchen</h2>    
                                    <p className='text-center'>Our versatile and chic kitchen pieces blend modern aesthetics with timeless functionality. Transform your kitchen into a harmonious and elegant haven with our luxurious and minimalist options.</p>
                                </div>
                            </div>
                            <div className='card_3'>
                                <div className='front-card'>
                                    <h2>Dining Room</h2>
                                </div>
                                <div className='back-card'>
                                    <h2 className='text-center'>Dining Room</h2>    
                                    <p className='text-center'>Explore our carefully curated collections to enhance your dining area, where every meal becomes a delightful occasion in a setting that effortlessly combines style and functionality.</p>
                                </div>
                            </div>
                            <div className='card_4'>
                                <div className='front-card'>
                                    <h2>Living Room</h2>
                                </div>
                                <div className='back-card'>
                                    <h2 className='text-center'>Living Room</h2>    
                                    <p className='text-center'>Comfort and enduring style. Our carefully curated collections ensure that your living room becomes a harmonious blend of sophistication and inviting comfort</p>
                                </div>
                            </div>
                            <div className='card_5'>
                                <div className='front-card'>
                                    <h2>Decoration</h2>
                                </div>
                                <div className='back-card'>
                                    <h2 className='text-center'>Decoration</h2>    
                                    <p className='text-center'>Our carefully selected decorations promise to add a touch of sophistication and warmth to your home, creating a harmonious balance between modern elegance and timeless allure.</p>
                                </div>
                            </div>
                            <div className='card_6'>
                                <div className='front-card'>
                                    <h2>Unique Items</h2>
                                </div>
                                <div className='back-card'>
                                    <h2 className='text-center'>Unique Items</h2>    
                                    <p className='text-center'>Discover a world of uniqueness with our curated selection of one-of-a-kind items. Elevate your space with distinctive and exclusive pieces that stand out and capture attention</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Collection
