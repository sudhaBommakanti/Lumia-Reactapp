import React from 'react';
import ProductsData from '../ProductsData/lamps.json';


export default class ProductsList extends React.Component {
constructor (props) {
    super(props);
   /*  this.state = {
        lamps: []
    }; */

    this.listProducts = props.lamps.map((product) =>
      <li>{product}</li>
    )
}

/* componentDidMount() {
    fetch('../ProductsData/lamps.json')
    .then(lamps => {
        return lamps.json();
    }).then(data => {
        let lamps = data.lamps.map((lamp) => {
            return(
                <h2>{lamps.name}></h2>
                     
               
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
 */
}

