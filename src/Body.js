import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUpForm from "../src/SignUpForm"

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
         <SignUpForm />
        </Jumbotron>
        <Row>
          <Col md={4}>
            <h2>Heading</h2>
            <p>
              Adipisicing ratione incidunt eaque expedita rerum porro inventore.
              Nihil sit ipsam iure officiis sit eos at quibusdam natus
              dignissimos natus dolore! Vel doloremque ipsa alias nihil harum
              laborum necessitatibus rerum?
            </p>
            <p>
              <Button>View details »</Button>
            </p>
          </Col>
          <Col md={4}>
            <h2>Heading</h2>
            <p>
              Sit quia nemo quis enim provident porro eaque accusamus tenetur
              provident aliquid commodi? Velit nesciunt maiores obcaecati totam
              praesentium sint vitae exercitationem quaerat maxime iusto et!
              Consequatur aspernatur sit impedit.
            </p>
            <p>
              <Button>View details »</Button>
            </p>
          </Col>
          <Col md={4}>
            <h2>Heading</h2>
            <p>
              Dolor aliquid dolores perferendis repellendus cum! Quam maiores
              blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat
              tempora. Rem debitis accusamus pariatur officia corrupti.
              Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.
            </p>
            <p>
              <Button>View details »</Button>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
