import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login'
const router = createBrowserRouter([
    {
        children: [
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    }
]);

export default router;
