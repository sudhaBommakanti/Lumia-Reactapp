import React from 'react';
import { withRouter, NavLink } from "react-router-dom";

export default class Lamps extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        lamps: []
    };
}

componentDidMount() {
    fetch('./lamps.json')
    .then(lamps => {
        return lamps.json();
    }).then(data => {
        let lamps = data.lamps.map((lamp) => {
            return(
                <div key = {lamp.name}>
                     <img src= {lamp.image}/>
                </div>
            )
        })
        this.setState({lamps:lamps});
        console.log("state",this.state.lamps);
    })
}

render() {
    return (
        <div className = "container1">
            <div className = "container2">
                {this.state.lamps}

            </div>
        </div>
    )
}

}

