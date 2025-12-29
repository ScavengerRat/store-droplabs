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
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store.ts";
import RootErrorBoundary from "@/components/errors/root-error-boundary.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        ErrorBoundary: RootErrorBoundary,
        children: [
            {
                index: true,
                Component: Home,
                loader: randomProductLoader
            },
            {
                path: "products",
                Component: Products,
                loader: productsLoader,
                shouldRevalidate: ({currentUrl, nextUrl, defaultShouldRevalidate}) => {
                    if (currentUrl.pathname === nextUrl.pathname) {
                        return false;
                    }
                    return defaultShouldRevalidate;
                }
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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    </StrictMode>,
)