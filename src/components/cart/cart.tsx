import {useAppDispatch, useAppSelector} from "@/hooks/store-hooks.ts";
import {Button} from "@/components/ui/button.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import CartItem from "@/components/cart/cart-item.tsx";
import {clearCart} from "@/store/cartSlice.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {getPrice} from "@/lib/utils.ts";
import CartBadge from "@/components/cart/cart-badge.tsx";

const Cart = () => {

    const dispatch = useAppDispatch()
    const {totalQuantity, itemList, totalAmount} = useAppSelector((state) => state.cart)

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <CartBadge quantity={totalQuantity}/>
                </PopoverTrigger>
                <PopoverContent className="md:w-96 p-0" align="end">
                    {totalQuantity === 0 ? <div className="p-4 text-base font-medium">Cart is empty</div> :
                        <div className="flex flex-col divide-y h-[calc(-350px+100vh)] min-h-72 max-h-100">
                            <div className="p-4 flex justify-between items-center shrink-0">
                                <span className="text-base font-medium">Cart ({totalQuantity})</span>
                                <Button onClick={() => dispatch(clearCart())} variant="link">
                                    Clear cart
                                </Button>
                            </div>
                            <ScrollArea className="relative overflow-auto flex-1">
                                <div className="grid grid-cols-1">
                                    {itemList.map((item) => <CartItem key={item.id} {...item} />)}
                                </div>
                            </ScrollArea>
                            <div className="p-4 flex justify-between items-center text-base font-medium shrink-0">
                                <span>Total</span>
                                <span>{getPrice(totalAmount)}</span>
                            </div>
                        </div>
                    }
                </PopoverContent>
            </Popover>
        </>
    );
};

export default Cart;
