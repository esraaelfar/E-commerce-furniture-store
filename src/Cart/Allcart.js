import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import Footer from "../Home/Footer";
import {Container, Row, Col} from 'reactstrap'
import Subnavbar from "../FurniturePages/Subnavbar";

function Cart() {
    const {isEmpty , totalUniqueItems , items , updateItemQuantity , removeItem , emptyCart , cartTotal , totalItems,} = useCart();
    if (isEmpty) return <p className="text-center" style={{fontSize:"25px",marginTop:"8%"}}>Your cart is empty..</p>;
    return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <button className="btn btn-outline-dark" style={{padding:"15px 30px",borderRadius:"10px",marginLeft:"85%",marginBottom:"20px",color:"#393838",boxShadow:"2px 2px 3px 1px #393838"}} onClick={() => emptyCart()}>Empty Cart</button>
                            <table class="table caption-top">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-3 text-center carstyle">Your Bag</th>
                                        <th className="col-3"></th>
                                        <th scope="col" className="col-6 text-center carstyle">{totalUniqueItems} items</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <th scope="row">
                                            <img src={item.images[0]} style={{width:"80%",height:"80%"}} alt="product"></img>
                                        </th>
                                        <td>
                                            <h6 style={{color:"#393838"}}>{item.title}</h6>
                                            <p style={{color:"#393838"}}>quantity : {item.quantity}</p>
                                            <p style={{color:"#393838"}}>Price : {item.price*item.quantity}</p>                                
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} style={{border:"none",backgroundColor:"transparent"}}><i style={{fontSize:"30px",color:"chocolate"}} class="fa-solid fa-square-minus"></i></button>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} style={{border:"none",backgroundColor:"transparent"}}><i style={{fontSize:"30px",color:"chocolate"}} class="fa-solid fa-square-plus"></i></button>      
                                        </td>
                                        <td> 
                                            <button onClick={() => removeItem(item.id)} style={{border:"none",backgroundColor:"transparent",marginLeft:"48%",color:"#393838"}}><i class="fa-solid fa-trash"></i></button>
                                        </td>   
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p style={{fontSize:"20px",marginLeft:"250px",display:"inline-block",color:"#393838"}}>Total items : {totalItems}</p>
                            <p style={{fontSize:"20px",marginLeft:"50px",display:"inline-block",color:"#393838"}}>Total price : {cartTotal}</p>
                            <button className="btn btn-outline-dark" style={{marginLeft:"10%",padding:"10px 30px",borderRadius:"10px",color:"#393838",boxShadow:"2px 2px 3px 1px #393838"}}>Continue To Checkout <i class="fa-solid fa-arrow-right"></i></button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
}

function Allcart() {
    return (
        <CartProvider>
            <Subnavbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Cart />
            <Footer />
        </CartProvider>
    )
}

export default Allcart
