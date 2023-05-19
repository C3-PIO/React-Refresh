import React from "react";
import Search from "../components/search";
import Header from "../components/header";
import { Container, Row, Image, Col } from "react-bootstrap";
import employees from "../data/EmployeeList";

function HomePage() {
  const title = "Employee Directory";
  return (
    <>
      <Header title={title}></Header>
      <Search></Search>
      <Container className="Container">
        {employees.map((employee, index) => {
          return (
            <Row key={index} className="border">
              <Col xs={4}>
                <Image className="img py-2" fluid src={employee.picture} roundedCircle />
              </Col>
              <Col xs={8} className="p-0 my-2">
                <div className="fw-bold">{employee.name}</div>
                {employee.position}
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default HomePage;
