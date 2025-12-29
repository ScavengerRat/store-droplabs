import React from "react";
import {Await, useLoaderData} from "react-router-dom";
import Product from "@/components/product/product.tsx";
import ProductSkeleton from "@/components/product/product-skeleton.tsx";
import type {ProductInterface} from "@/api/interfaces/product.interface.ts";
import ProductError from "@/components/errors/product-error.tsx";

const Home = () => {

    const {product} = useLoaderData() as { product: Promise<ProductInterface> };

    return (
        <div className="grid place-items-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">Welcome to Droplabs store!</h1>
            <p className="mb-8 text-neutral-600">Check out our products</p>

            <React.Suspense fallback={<ProductSkeleton/>}>
                <Await resolve={product} errorElement={<ProductError/>}>
                    {(product) => <Product {...product} />}
                </Await>
            </React.Suspense>
        </div>
    );
};

export default Home;
