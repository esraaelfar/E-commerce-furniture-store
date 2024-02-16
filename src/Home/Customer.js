import React from 'react'
import {Container, Row} from 'reactstrap'

function Customer() {
    return (
        <div>
            <Container>
                <Row>
                    <p className='text-center review'>Our Customer Reviews</p>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="carousel-caption d-none d-md-block d-sm-block">
                                    <p>"I accidentally fell asleep on the sofa, and when I woke up, I thought I was in a palace! Your furniture is so regal; it's like living a fairy tale every day."</p>
                                    <h5>Hana Alaa</h5>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="carousel-caption d-none d-md-block d-sm-block">
                                    <p>"Bought a chair from Furni, and every time I sit in it, I swear I'm transported to a different era. It's like having a time machine but comfier!"</p>
                                    <h5>Rahma Othman</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="carousel-caption d-none d-md-block d-sm-block d-block">
                                    <p>"I never knew a chair could have such charisma until I bought one from Furni. Now, all my friends want to come over just to sit in it and bask in its charm."</p>
                                    <h5>Aia Elmahrok</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <i className="fa-solid fa-angle-left" aria-hidden="true"></i>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default Customer
