import type {ProductInterface} from "@/api/interfaces/product.interface.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {getPrice} from "@/lib/utils.ts";

const Product = (product: ProductInterface) => {
    const {image, title, category, rating, price} = product;

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <img src={image} alt={title}
                     className="h-48 object-contain mx-auto"/>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-lg h-14 line-clamp-2" title={title}>{title}</CardTitle>
                <div className="flex justify-between text-sm text-neutral-500">
                    <span>{category}</span>
                    <span>⭐ {rating.rate}</span>
                </div>
                <p className="text-xl font-bold">{getPrice(price)}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button className="w-full" size="lg">
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Product;


