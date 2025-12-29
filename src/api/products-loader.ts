import {BACK_END_URL} from "@/constants/api.ts";
import type {ProductInterface} from "@/api/interfaces/product.interface.ts";

export const productsLoader = async () => {
    const products = fetch(`${BACK_END_URL}/products`)
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch products');
            return res.json() as Promise<ProductInterface[]>;
        });

    return {
        products,
    };
};