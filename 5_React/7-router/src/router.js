import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Detail from "./pages/Detail";

// 경로 설정
/*
1. Home.js
2. /create -> Create.js
*/
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/create", element: <Create />}
        ],
    },
    {
        path: "/detail/:no",
        element: <Detail />,

    },
]);

export default router;
