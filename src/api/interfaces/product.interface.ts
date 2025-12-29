import type {RatingInterface} from "@/api/interfaces/rating.interface.ts";

export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingInterface;
}