import React from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import NavBar from '../Navbar/index';
import Lamps from '../Lamps/index';

export default function() {
    return <Router>
        <div className = "App">

            <h1>App process </h1>
            <NavBar />
            <main>
                <Route exact path='/' component={Lamps} />
            </main>

        </div>
    </Router>
}