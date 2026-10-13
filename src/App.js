import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";

function App() {
  const cards = [
    {
      title: "Design",
      text: "Build polished interfaces with reusable, flexible components.",
      variant: "primary",
    },
    {
      title: "Performance",
      text: "Create smooth user experiences with fast, lightweight UI patterns.",
      variant: "success",
    },
    {
      title: "Innovation",
      text: "Turn ideas into compelling experiences with scalable product design.",
      variant: "warning",
    },
  ];

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="my-5">
          <h1 className="text-center mb-4"> React Check Point</h1>

          <Row xs={1} md={3} className="g-4">
            {cards.map((card) => (
              <Col key={card.title}>
                <Card border={card.variant} className="h-100 shadow-sm">
                  <Card.Header className={`bg-${card.variant} text-white`}>
                    {card.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
