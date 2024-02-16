import React, { useState, useEffect, useCallback } from "react";
import Footer from "../Home/Footer";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import Pagination from 'rc-pagination';
import { useAppContext } from '../Context/appContext';
import Subnavbar from "./Subnavbar";

function Page() {
    const { addItem } = useCart();
    const Beds = [
        {
            "id": 1,
            "title": "Bed",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom1.png",
                "\\asset\\img\\bedroom1r.png"
            ]
        },
        {
            "id": 2,
            "title": "Bed",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom2.png",
                "\\asset\\img\\beedroom2r.png",
            ]
        },
        {
            "id": 3,
            "title": "Bed",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom3.png",
                "\\asset\\img\\beedroom3r.png"
            ]
        },
        {
            "id": 4,
            "title": "Bed",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom4.png",
                "\\asset\\img\\brdroom4r.png",
            ]
        },
        {
            "id": 5,
            "title": "Bed",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom5.png",
                "\\asset\\img\\bedroom5r.png"
            ]
        },
        {
            "id": 6,
            "title": "Bed",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
                "\\asset\\img\\bedroom6.png",
                "\\asset\\img\\bedroom6r.png"  
            ]
        },
        {
            "id": 7,
            "title": "Bed",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom7.png",
                "\\asset\\img\\bedroom7r.png",
            ]
        },
        {
            "id": 8,
            "title": "Bed",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom8.png",
                "\\asset\\img\\bedroom8r.png",
            ]
        },
        {
            "id": 9,
            "title": "Bed",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "\\asset\\img\\bedroom9.png",
                "\\asset\\img\\bedroom9r.png",
            ]
        },
        {
            "id": 10,
            "title": "Bed",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            "images": [
                "\\asset\\img\\living10.png",
                "\\asset\\img\\sofa10.png"
            ]
        },
        {
            "id": 11,
            "title": "Bed",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "price": 13,
            "discountPercentage": 8.4,
            "rating": 4.26,
            "stock": 65,
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa11.png",
                "\\asset\\img\\living11.png"
            ]
        },
        {
            "id": 12,
            "title": "Bed",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living12.png",
                "\\asset\\img\\sofa12.png"
            ]
        },
        {
            "id": 13,
            "title": "Bed",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "price": 13,
            "discountPercentage": 8.14,
            "rating": 4.59,
            "stock": 61,
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
            "images": [
                "\\asset\\img\\living13.png",
                "\\asset\\img\\living14.png"
            ]
        },
        {
            "id": 14,
            "title": "Bed",
            "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "discountPercentage": 15.6,
            "rating": 4.21,
            "stock": 114,
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa14.png",
                "\\asset\\img\\sofa13.png"
            ]
        },
        {
            "id": 15,
            "title": "Bed",
            "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "price": 30,
            "discountPercentage": 10.99,
            "rating": 4.7,
            "stock": 105,
            "brand": "Lord - Al-Rehab",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living15.png",
                "\\asset\\img\\sofa15.png"
            ]
        },
        {
            "id": 16,
            "title": "Bed",
            "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            "price": 19,
            "discountPercentage": 13.31,
            "rating": 4.83,
            "stock": 110,
            "brand": "L'Oreal Paris",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living16.png",
                "\\asset\\img\\sofa16.png"
            ]
        },
        {
            "id": 17,
            "title": "Bed",
            "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
            "price": 12,
            "discountPercentage": 4.09,
            "rating": 4.52,
            "stock": 78,
            "brand": "Hemani Tea",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa17.png",
                "\\asset\\img\\living17.png"
            ]
        },
        {
            "id": 18,
            "title": "Bed",
            "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
            "price": 40,
            "discountPercentage": 13.1,
            "rating": 4.56,
            "stock": 88,
            "brand": "Dermive",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living18.png",
                "\\asset\\img\\sofa18.png"
            ]
        },
        {
            "id": 19,
            "title": "Bed",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living7.png",
                "\\asset\\img\\sofa7.png"
            ]
        },
        {
            "id": 20,
            "title": "Bed",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "\\asset\\img\\pngwing.com.png",
                "\\asset\\img\\sofa1.png",
            ]
        },
        {
            "id": 21,
            "title": "Bed",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa3.png",
                "\\asset\\img\\living3.png"
            ]
        },
        {
            "id": 22,
            "title": "Bed",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living4.png",
                "\\asset\\img\\sofa4.png",
            ]
        },
        {
            "id": 23,
            "title": "Bed",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa5.png",
                "\\asset\\img\\living5.png"
            ]
        },
        {
            "id": 24,
            "title": "Bed",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
                "\\asset\\img\\living6.png",
                "\\asset\\img\\sofa6.png"  
            ]
        },
        {
            "id": 25,
            "title": "Bed",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living2.png",
                "\\asset\\img\\sofa2.png",
            ]
        },
        {
            "id": 26,
            "title": "Bed",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living8.png",
                "\\asset\\img\\sofa8.png",
            ]
        },
        {
            "id": 27,
            "title": "Bed",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living9.png",
                "\\asset\\img\\sofa9.png",
            ]
        },
        {
            "id": 28,
            "title": "Bed",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            "images": [
                "\\asset\\img\\living10.png",
                "\\asset\\img\\sofa10.png"
            ]
        },
        {
            "id": 29,
            "title": "Bed",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "price": 13,
            "discountPercentage": 8.4,
            "rating": 4.26,
            "stock": 65,
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa11.png",
                "\\asset\\img\\living11.png"
            ]
        },
        {
            "id": 30,
            "title": "Bed",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "\\asset\\img\\living12.png",
                "\\asset\\img\\sofa12.png"
            ]
        },
        {
            "id": 31,
            "title": "Bed",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "price": 13,
            "discountPercentage": 8.14,
            "rating": 4.59,
            "stock": 61,
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
            "images": [
                "\\asset\\img\\living13.png",
                "\\asset\\img\\living14.png"
            ]
        },
        {
            "id": 32,
            "title": "Bed",
            "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "discountPercentage": 15.6,
            "rating": 4.21,
            "stock": 114,
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
            "images": [
                "\\asset\\img\\sofa14.png",
                "\\asset\\img\\sofa13.png"
            ]
        },
    ];
    
    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(7500);
    const updateSlider = useCallback(
        () => {
        // Update the slider or any other related logic here
        const progress = document.querySelector(".progress");
        const rangeMin = document.querySelector(".range-min");
        const rangeMax = document.querySelector(".range-max");
        const minPercentage = minPrice / rangeMin.max * 100;
        const maxPercentage = maxPrice / rangeMax.max * 100;
        progress.style.left = `${minPercentage}%`;
        progress.style.right = `${100 - maxPercentage}%`;
        },
        [minPrice, maxPrice]
    );
    const {favorites,addToFavorites,removeFromFavorites} = useAppContext();
    console.log("favorites are",favorites);

    const favoritesChecker = (id) =>{
        const boolean = favorites.some((p) => p.id === id);
        return boolean;
    }

    useEffect(
        () => {
        // This function will be called whenever minPrice or maxPrice changes
        updateSlider();
        },
        [minPrice, maxPrice, updateSlider]
    );

const [perPage] = useState(9);
const [size, setSize] = useState(perPage);
const [current, setCurrent] = useState(1);

const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(Beds.length / value);
    if (current > newPerPage) {
        setCurrent(newPerPage);
    }
};
const getData = (current, pageSize) => {
    return Beds.slice((current - 1) * pageSize, current * pageSize);
};

const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
};

const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
        return <button>&#171;</button>;
    }
    if (type === "next") {
        return <button>&#187;</button>;
    }
    return originalElement;
};
    return (
        <div>
        <div className="living">
            <Container>
            <Row>
                <Col>
                    <h2>Bed Room</h2>
                </Col>
            </Row>
            </Container>
        </div>
        <Container>
            <Row>
            <Col md-4>
                <div className="filter">
                <p>Filter By</p>
                <div className="furniture-type">
        <p className="price sizep">Furniture Type</p>
        <Form>
            <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Bed</Label>
            </FormGroup>
            <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Chair</Label>
            </FormGroup>
            <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Dressing</Label>
            </FormGroup>
        </Form>
    </div>
                <div className="d-flex">
                    <div className="wrapper">
                        <p className="price">Price</p>
                        <div className="price-input">
                            <div className="field">
                            <span>Min</span>
                            <input
                                type="number"
                                className="input-min"
                                value={minPrice}
                                onChange={e => setMinPrice(parseInt(e.target.value))}
                            />
                            </div>
                            <div className="separator">-</div>
                            <div className="field">
                            <span>Max</span>
                            <input
                                type="number"
                                className="input-max"
                                value={maxPrice}
                                onChange={e => setMaxPrice(parseInt(e.target.value))}
                            />
                            </div>
                        </div>
                    <div className="slider">
                        <div className="progress" />
                    </div>
                    <div className="range-input">
                        <input
                        type="range"
                        className="range-min"
                        min="0"
                        max="10000"
                        value={minPrice}
                        step="100"
                        onChange={e => setMinPrice(parseInt(e.target.value))}
                        />
                        <input
                        type="range"
                        className="range-max"
                        min="0"
                        max="10000"
                        value={maxPrice}
                        step="100"
                        onChange={e => setMaxPrice(parseInt(e.target.value))}
                        />
                    </div>
                    </div>
                </div>
                <div className="size">
                    <p className="price sizep">Size</p>
                    <Form>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            S
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            M
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            L
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            XL
                            </Label>
                        </FormGroup>
                    </Form>
                </div>
                <div className="color">
                    <p className="price sizep">Color</p>
                    <Form>
                        <FormGroup>
                            <Input
                                id="exampleColor"
                                name="color"
                                placeholder="color placeholder"
                                type="color"
                            />
                        </FormGroup>
                    </Form>
                </div>
                <div className="size">
                    <p className="price sizep">Dimension</p>
                    <Form>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            40x60cm
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            60x90cm
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            80x120cm
                            </Label>
                        </FormGroup>
                    </Form>
                    </div>
                    
                </div>
                <Container>
                    <Row className="r-product">
                        {getData(current, size).map((p) => (
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
                                                <button onClick={()=> addToFavorites(p)}>
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
                        ))}
                            <div className="table-filter-info">
                                <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange}
                                    total={Beds.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                />
                            </div>
                            
                    </Row>
                </Container>
            </Col>
            </Row>
        </Container>
        </div>
    );
}

function Bedroom() {
    return (
        <CartProvider>
            <Subnavbar />
            <Page />
            <Footer />
        </CartProvider>
    )
}
export default Bedroom;


