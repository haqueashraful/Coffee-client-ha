import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Main = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

export default Main;