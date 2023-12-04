import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-stars";
import { VscDebugRestart } from "react-icons/vsc";

function NavBar({ setSearch, setRate, rating }) {
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">MBC2</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#" style={{ display: "flex" }}>
              <ReactStars
                value={rating}
                count={5}
                color="white"
                size={25}
                edit={true}
                half={false}
                onChange={ratingChanged}
              />
              <VscDebugRestart
                onClick={() => {
                  setRate(0);
                }}
                size={25}
              />
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
