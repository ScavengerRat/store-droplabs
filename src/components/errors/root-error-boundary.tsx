import {isRouteErrorResponse, NavLink, useRouteError} from "react-router-dom";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty.tsx";
import {Button, buttonVariants} from "@/components/ui/button.tsx";
import {RefreshCw} from "lucide-react";

const RootErrorBoundary = () => {
    const error = useRouteError();

    let errorTitle = "Unexpected Error";
    let errorMessage = "There was a problem loading the application";
    let stackTrace: string | undefined = undefined;

    if (isRouteErrorResponse(error)) {
        errorTitle = `${error.status}: ${error.statusText}`;
        errorMessage = error.data;
    } else if (error instanceof Error) {
        errorTitle = "Error";
        errorMessage = error.message;
        stackTrace = error.stack;
    }

    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle className="text-xl">
                    {errorTitle}
                </EmptyTitle>
                <EmptyDescription>
                    {errorMessage}
                </EmptyDescription>
            </EmptyHeader>

            {stackTrace && (
                <div className="my-4 w-full max-w-lg rounded-md bg-slate-950 p-4 text-left shadow-inner">
                    <div className="mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Stack Trace
                    </div>
                    <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                            <pre className="text-xs font-mono text-red-200 whitespace-pre-wrap break-all">
                                {stackTrace}
                            </pre>
                    </div>
                </div>
            )}

            <EmptyContent className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                    onClick={() => window.location.reload()}
                    variant="default"
                >
                    <RefreshCw/>
                    Try again
                </Button>

                <NavLink
                    to="/"
                    className={buttonVariants({variant: "outline"})}
                >
                    Go to home page
                </NavLink>
            </EmptyContent>
        </Empty>
    );
};

export default RootErrorBoundary;