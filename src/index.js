import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Living from './FurniturePages/Living'
import Kitchen from './FurniturePages/Kitchen';
import Diningroom from './FurniturePages/Diningroom';
import Bedroom from './FurniturePages/Bedroom';
import Decoration from './FurniturePages/Decoration';
import Allcart from './Cart/Allcart';
import Wishlist from './Whishlist/Wishlist';
import AppContextProvider from './Context/appContext';
import { CartProvider } from 'react-use-cart';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "living",
        element: <Living />
    },
    
    {
        path: "kitchen",
        element:  <Kitchen />
    },
    {
        path: "dining",
        element: <Diningroom />
    },
    {
        path: "bed",
        element: <Bedroom />
    },
    {
        path: "decoration",
        element: <Decoration />
    },
    {
        path: "cart",
        element: <Allcart />
    },
    {
        path: "wishlist",
        element: <Wishlist />
    },
    ]);

createRoot(document.getElementById("root")).render(
    <AppContextProvider>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </AppContextProvider>
);


