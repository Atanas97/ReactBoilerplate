import React from "react";

const Homepage = React.lazy(() => import("../pages/Homepage"));
const About = React.lazy(() => import("../pages/About"));
const Contacts = React.lazy(() => import("../pages/Contacts"));

const routes = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
];

export default routes;
