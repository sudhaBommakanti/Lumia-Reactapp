import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../Navbar/index';
import Lamps from '../Lamps/index';
import Contact from '../Contact/index';

export default function () {
    return <Router>
        <div className="App">
        <div className="page corners padding transp">
            <NavBar />
            <main>
                <Route exact path='/' component={Lamps} />
                <Route path='/kontakt' component={Contact} />
            </main>
        </div>
        </div>
    </Router>
}