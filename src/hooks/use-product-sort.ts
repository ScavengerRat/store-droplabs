import {useSearchParams} from "react-router-dom";
import {useCallback} from "react";
import type {ProductInterface} from "@/api/interfaces/product.interface.ts";

export const useProductSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentSort = searchParams.get("sort") || "default";

    const handleSortChange = (value: string) => {
        setSearchParams(searchParams => {
            searchParams.set("sort", value);
            return searchParams;
        });
    };

    const sortProducts = useCallback((products: ProductInterface[]) => {
        const sorted = [...products];

        switch (currentSort) {
            case "price_asc":
                return sorted.sort((a, b) => a.price - b.price);
            case "price_desc":
                return sorted.sort((a, b) => b.price - a.price);
            case "title_asc":
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case "title_desc":
                return sorted.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return sorted;
        }
    }, [currentSort]);

    return {
        currentSort,
        handleSortChange,
        sortProducts
    };
};