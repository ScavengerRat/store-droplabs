import './index.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout";
import Products from "./views/products";
import NotFound from "./views/not-found";
import {productsLoader} from "@/api/products-loader.ts";
import Home from "@/views/home.tsx";
import {randomProductLoader} from "@/api/random-product-loader.ts";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
                loader: randomProductLoader
            },
            {
                path: "products",
                Component: Products,
                loader: productsLoader
            },
            {
                path: "*",
                Component: NotFound
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)