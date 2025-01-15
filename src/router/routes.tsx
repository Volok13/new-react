import {createBrowserRouter} from "react-router-dom";
import UserPage from "../page/UserPage.tsx";
import MainLayouts from "../layouts/MainLayouts.tsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayouts/>, children: [
            {path: 'users', element: <UserPage/> }
        ]
    }
])

export default routes;