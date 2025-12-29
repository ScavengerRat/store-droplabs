import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Await, useLoaderData} from "react-router-dom";
import React from "react";
import Product from "@/components/product/product.tsx";
import ProductSkeleton from "@/components/product/product-skeleton.tsx";
import type {ProductInterface} from "@/api/interfaces/product.interface.ts";

const Products = () => {

    const {products} = useLoaderData() as { products: Promise<ProductInterface[]> };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Select>
                    <SelectTrigger className="w-45">
                        <SelectValue placeholder="Sort products"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="price_asc">Price ASC</SelectItem>
                        <SelectItem value="price_desc">Price DESC</SelectItem>
                        <SelectItem value="title_asc">Name ASC</SelectItem>
                        <SelectItem value="title_desc">Name DESC</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <React.Suspense fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {Array.from({length: 8}).map((_, idx) => (
                        <ProductSkeleton key={idx}/>
                    ))}
                </div>
            }>
                <Await resolve={products}>
                    {(products) => {
                        return (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                                {
                                    products.map(product => <Product key={product.id} {...product} />)
                                }
                            </div>
                        )
                    }}
                </Await>
            </React.Suspense>
        </div>
    );
};

export default Products;
