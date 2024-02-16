import React from "react";
import { Container, Row, Col} from "reactstrap";
import { useAppContext } from '../Context/appContext';
import { useCart } from "react-use-cart";
import Subnavbar from "../FurniturePages/Subnavbar";
import Footer from "../Home/Footer";


const Wishlist = () => {
    const {favorites,addToFavorites,removeFromFavorites} = useAppContext();
    const { addItem } = useCart();
    console.log("favorites are",favorites);

    const favoritesChecker = (id) =>{
        const boolean = favorites.some((p) => p.id === id);
        return boolean;
    };

    return <div className="wishlist">
        <Subnavbar />
        <Container>
                    <Row className="r-product">
                        {favorites.length > 0 ? favorites.map((p) => (
                            <Col md={4}>
                                <div className="product">
                                    <div key={p.id}>
                                        <img
                                        src={p.images[0]}
                                        alt={p.title}
                                        className="img-fluid main-img"
                                        style={{ height: "300px", width: "100%" }}
                                        />
                                        <img
                                        src={p.images[1]}
                                        alt=""
                                        className="img-fluid hover-img d-none"
                                        style={{ height: "300px", width: "100%" }}
                                        />
                                        <div className="d-flex product-act">
                                            <button onClick={() => addItem(p)}><i class="fa-solid fa-cart-plus"></i></button>
                                            {favoritesChecker(p.id)? (
                                                <button onClick={()=>removeFromFavorites(p)}>
                                                    <i className="fa-solid fa-heart" style={{ color: "#d2691e" }}></i>
                                                </button>
                                            ):(
                                                <button onClick={()=>addToFavorites(p)}>
                                                    <i class="fa-regular fa-heart" style={{color: "#d2691e"}}></i>
                                                </button>
                                            )}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex info">
                                    <h1 className="text-center">{p.title}</h1>
                                    <div className="d-flex price">
                                        <h3>{p.price-(p.discountPercentage*(p.price/100))}$</h3>
                                        <h3 style={{textDecoration:"line-through", color:"grey"}}>{p.price}</h3>
                                    </div>
                                </div>
                            </Col>
                        )):<h1 className="text-center emptywish">You don't have any favourite</h1> }
                        </Row>
                        </Container>
                        <Footer />
    </div>

}
export default Wishlist;