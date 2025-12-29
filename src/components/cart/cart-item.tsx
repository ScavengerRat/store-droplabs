import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle
} from "@/components/ui/item.tsx";
import {
    ButtonGroup
} from "@/components/ui/button-group"
import {addToCart, type CartProductInterface, removeFromCart, removeWholeProductFromCart} from "@/store/cartSlice.ts";
import {Button} from "@/components/ui/button.tsx";
import {MinusIcon, PlusIcon, Trash2Icon} from "lucide-react";
import {useAppDispatch} from "@/hooks/store-hooks.ts";
import {getPrice} from "@/lib/utils.ts";

const CartItem = (item: CartProductInterface) => {

    const {image, title, quantity, id, price} = item;

    const dispatch = useAppDispatch()

    return (
        <Item>
            <ItemMedia>
                <img className="size-12 object-contain" src={image} alt={title}/>
            </ItemMedia>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription className="flex justify-between">
                    <span>{getPrice(price)}</span>
                    <span>x{quantity}</span>
                </ItemDescription>
            </ItemContent>
            <ItemActions className="w-full justify-end">
                <ButtonGroup>
                    <Button onClick={() => dispatch(removeFromCart(id))} size="icon"
                            variant="outline"><MinusIcon/></Button>
                    <Button onClick={() => dispatch(addToCart(item))} size="icon"
                            variant="outline"><PlusIcon/></Button>
                    <Button onClick={() => dispatch(removeWholeProductFromCart(id))} size="icon">
                        <Trash2Icon/>
                    </Button>
                </ButtonGroup>
            </ItemActions>
        </Item>
    );
};

export default CartItem;
