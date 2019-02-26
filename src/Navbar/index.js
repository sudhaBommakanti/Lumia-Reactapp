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
                <Navbar>
                    <NavbarBrand href="/"> Lumia </NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink to = "/kontakt"> Kontakta oss </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(AppNavbar);