import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([ //повертає обєкт routes
    {
        path: "/", element: <MainLayout/>, children:[ //рендеремо MainLayout
            {index:true, element:<HomePage/>},
            {path:'login', element:<LoginPage/>},
            {path:'/auth/resources', element:<AuthResourcesPage/>},
        ]
    }
]); //повертає обєкт routes