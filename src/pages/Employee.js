import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import Header from "../components/header";
import employees from "../data/EmployeeList";

function EmployeePage() {
  const title = "Employee";
  return (
    <>
      <Header title={title}></Header>
      <Card className="Container">
        <Row className="p-2 justify-content-left">
          <Col xs={4}>
            <Image
              src={require("../images/JT.jpg")}
              className="card-img"
              roundedCircle
            />
            </Col>
            <Col className="employee" xs={8}>
            <span className="fw-bold">{employees[1].name}</span>
            <br />
            {employees[1].position}
          </Col>
        </Row>
        <Row className="border m-0 p-1">
          <Col className="d-block py-2">
          <div className="fw-bold">Call Office</div>
          <div>{employees[1].officeNum}</div>
          </Col>
        </Row>
        <Row className="border m-0 p-1">
          <Col className="d-block py-2">
          <div className="fw-bold">Call Mobile</div>
          <div>{employees[1].mobileNum}</div>
          </Col>
        </Row>
        <Row className="border m-0 p-1">
          <Col className="d-block py-2">
          <div className="fw-bold">SMS</div>
          <div>{employees[1].sms}</div>
          </Col>
        </Row>
        <Row className="border m-0 p-1">
          <Col className="d-block py-2">
          <div className="fw-bold">Email</div>
          <div>{employees[1].email}</div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default EmployeePage;
