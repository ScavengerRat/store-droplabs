import {BACK_END_URL} from "@/constants/api.ts";
import type {ProductInterface} from "@/api/interfaces/product.interface.ts";

export const randomProductLoader = async () => {
    const randomId = Math.floor(Math.random() * 20) + 1;

    const product = fetch(`${BACK_END_URL}/products/${randomId}`)
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch product');
            return res.json() as Promise<ProductInterface>;
        });

    return {
        product,
    };
};