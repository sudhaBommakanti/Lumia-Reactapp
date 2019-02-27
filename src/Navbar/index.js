import React from 'react';
import { withRouter, NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';


class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar className="nav flex-column flex-sm-row">
                    <NavbarBrand href="/" className="nav flex-sm-fill text-sm-left nav-link active"> Lumia </NavbarBrand>
                    <Nav>
                        <NavItem className="text-sm-right nav-link">
                            <NavLink to="/kontakt" > Kontakta oss </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(AppNavbar);