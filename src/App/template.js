import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from '../Navbar/index';

export default function() {
    return <Router>
        <div className = "App">

            <h1>App process </h1>
            <NavBar />

        </div>
    </Router>
}