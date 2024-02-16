import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import { useCart } from 'react-use-cart';

function Navbar() {
    const {totalUniqueItems} = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><span>F</span>URNI</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active bord" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link bord" to="service" smooth={true} offset={-200} duration={1000}>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link bord" to="about" smooth={true} offset={0} duration={1000}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link bord" to="contact" smooth={true} offset={30} duration={1000}>Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Furniture
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/living"><i class="fa-solid fa-angles-right"></i> Living Room</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/kitchen"><i class="fa-solid fa-angles-right"></i> Kitchen</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/dining"><i class="fa-solid fa-angles-right"></i> Dining Room</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/bed"><i class="fa-solid fa-angles-right"></i> Bed Room</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/decoration"><i class="fa-solid fa-angles-right"></i> Decoration</NavLink></li>
                        </ul>
                        </li>
                    </ul>
                <div className="d-flex">
                    <i class="fa-regular fa-user"></i>
                    <NavLink  to="/wishlist"><i class="fa-regular fa-heart"></i></NavLink>
                    <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"><span>{totalUniqueItems}</span></i></NavLink>
                </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
// position: relative;
//     top: -572px;
//     left: 8%;
//     font-size: 62px;
//     font-weight: 500;
//     color: bisque;
//     text-align: start !IMPORTANT;
//     WIDTH: 471px;
//     text-align: center;
//     position: relative;
//     display: block;
//     top: -561px;
//     border-radius: 37px;
//     padding: 19px 37px;
//     border: 3px solid bisque;
//     background-color: chocolate;
//     left: 10%;
//     animation: shadow 1.2s ease-in-out .1s infinite alternate-reverse forwards;