import {NAVIGATION} from "@/constants/navigation.ts";
import NavigationItem from "@/components/navigation/navigation-item.tsx";
import Cart from "@/components/cart/cart.tsx";

const Navigation = () => {
    return (
        <nav className="border-b bg-white">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        {
                            NAVIGATION.map((link) => <NavigationItem key={link.path} {...link} />)
                        }
                    </div>

                    <Cart/>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
