import {buttonVariants} from "@/components/ui/button.tsx";
import {ShoppingCart} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

const CartBadge = ({quantity}: { quantity: number }) => {
    return (
        <div className="relative">
            <div className={buttonVariants({variant: "outline", size: "icon"})}>
                <ShoppingCart className="h-5 w-5"/>
            </div>
            {!!quantity &&
                <Badge className="absolute -top-2 -right-2 px-2 py-0.5" variant="destructive">
                    {quantity}
                </Badge>
            }
        </div>
    );
};

export default CartBadge;
