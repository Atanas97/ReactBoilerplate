import React from "react";
import { Link } from "react-router-dom";
import pathConstants from "../routes/pathConstants";

const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to={pathConstants.ABOUT}>About Page</Link>
            <Link to={pathConstants.CONTACTS}>Contacts Page</Link>
        </div>
    );
};

export default Homepage;
