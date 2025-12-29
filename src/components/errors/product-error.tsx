import {useAsyncError} from "react-router-dom";
import {AlertCircleIcon} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const ProductError = () => {
    const error = useAsyncError() as Error;

    return (
        <Alert className="w-full">
            <AlertCircleIcon/>
            <AlertTitle>Oops! Something went wrong</AlertTitle>
            <AlertDescription>
                <p>{error.message}</p>
            </AlertDescription>
        </Alert>
    );
};

export default ProductError;
