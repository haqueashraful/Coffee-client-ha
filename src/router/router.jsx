import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = () => {
 createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-coffee",
                element: <AddCoffee />
            },
            {
                path: "/update-coffee",
                element: <UpdateCoffee />
            },
            {
                path: "/coffe-details/:id",
                element: <CoffeeDetails />,
            }
        ]
    }
 ])
};

export default router;