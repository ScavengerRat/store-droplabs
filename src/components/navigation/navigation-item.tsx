import {buttonVariants} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {NavLink} from "react-router-dom";

const NavigationItem = ({name, path}: { name: string, path: string }) => {
    return (
        <NavLink key={path} to={path} className={({isActive}) => buttonVariants({
            variant: "ghost",
            className: cn(isActive && "bg-accent", "font-bold text-lg")
        })}>{name}</NavLink>
    );
};

export default NavigationItem;
