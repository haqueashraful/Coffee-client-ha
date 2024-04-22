import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Error from '../pages/Error';
import Home from '../pages/Home';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
import CoffeeDetails from '../pages/CoffeeDetails';

const Routes =  createBrowserRouter([
            {
                path: "/",
                element: <Main />,
                errorElement: <Error />,
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

export default Routes;