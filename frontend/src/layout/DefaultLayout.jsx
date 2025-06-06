import { Outlet } from "react-router-dom";
import Header from "../components/layout-components/Header"
import Footer from "../components/layout-components/Footer";
import ScrollToTop from "../components/layout-components/ScrollToTop";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    )

}