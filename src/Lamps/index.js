import React from 'react';
import Data from '../Data/lamps.json';
import {
  Container,
  Row,
  Col,
  Button,
  Input
} from 'reactstrap';


export default class Lamps extends React.Component {
  constructor(props) {
    super(props);
    this.alertFunc();

  }

  // search(){
  //   let inputText = event.target.value;
  //   this.setState(state => this)
  // }

  alertFunc() {
    
      alert("hello");
      return 
    
  }

    render() {
      return (
        <Container>
          <Row>
            <Col xs="12">
            <Input className="flex-sm-fill text-sm-center nav-link" onKeyPress="alertFunc()"  placeholder="Type to search"></Input>
              {Data.map((lamp, index) => {
                return <div className="lamps">
                <div className="product clearfix">
                  <img src={lamp.image} />
                  <div className="content">
                    <h2>{lamp.name}</h2>
                    <p>{lamp.description}</p>
                    <Button>{lamp.cost}</Button>
                  </div>
                </div>
                </div>
              })}
            </Col>
          </Row>
        </Container>
      )
    }
  
  }
  