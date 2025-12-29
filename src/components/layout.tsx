import {Outlet} from "react-router-dom";
import Navigation from "@/components/navigation/navigation.tsx";

const Layout = () => {

    return (
        <div className="min-h-screen bg-neutral-50">
            <Navigation/>
            <main className="container mx-auto p-4">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
