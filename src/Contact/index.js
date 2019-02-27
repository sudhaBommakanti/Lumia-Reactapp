import React from 'react';
import {
  Container,
  Row, 
  Col,
  Form,
  FormGroup, Label, Input,
  Button
} from 'reactstrap';


export default class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Col>
      </Row>
      </Container>
    );
  }
}
