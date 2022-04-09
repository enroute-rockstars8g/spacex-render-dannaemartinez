import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";

export const Menu: FC = () => {

  return (
    <div className="menu">
      <Row className="justify-content-md-center">
        <Col xs lg="1">
          <Link to="/dragons">
            <Button variant="dark">Dragons</Button>
          </Link>
        </Col>
        <Col xs lg="1">
          <Link to="/ships">
            <Button variant="dark">Ships</Button>
          </Link>
        </Col>
        <Col xs lg="1">
          <Link to="/rockets">
            <Button variant="dark">Rockets</Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}