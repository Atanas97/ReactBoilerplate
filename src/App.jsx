import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./routes/routeConfig";
import RootLayout from "./pages/RootLayout";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <Page404 />,
        children: routes,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
