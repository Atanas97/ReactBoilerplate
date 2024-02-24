import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Suspense fallback="loading...">
                {/* <Headers /> */}
                <main>
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </Suspense>
        </>
    );
};

export default RootLayout;
