import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"
import {NavLink} from "react-router-dom";
import {buttonVariants} from "@/components/ui/button.tsx";

const NotFound = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle className="text-xl">
                    404 - Not Found
                </EmptyTitle>
                <EmptyDescription>
                    The page you're looking for doesn't exist.
                    You can turn back to the home page.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <NavLink to="/" className={buttonVariants()}>Go to home page</NavLink>
                <EmptyDescription>
                    Need help? <a href="#">Contact support</a>
                </EmptyDescription>
            </EmptyContent>
        </Empty>
    );
};

export default NotFound;
