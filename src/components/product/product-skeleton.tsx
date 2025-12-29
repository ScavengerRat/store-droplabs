import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

const ProductSkeleton = () => {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <Skeleton className="h-48 w-full"/>
            </CardHeader>

            <CardContent>
                <Skeleton className="h-14 w-full mb-1"/>

                <div className="flex justify-between mb-1">
                    <Skeleton className="h-4 w-1/3"/>
                    <Skeleton className="h-4 w-12"/>
                </div>

                <Skeleton className="h-5 w-1/4 mb-1"/>
            </CardContent>

            <CardFooter className="">
                <Skeleton className="h-10 w-full"/>
            </CardFooter>
        </Card>
    );
};

export default ProductSkeleton;
