import "./theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AI from "./pages/AI";
import CCV from "./pages/CCV";
import DA from "./pages/DA";
import IOT from "./pages/IOT";
import CSF from "./pages/CSF";
import Library from "./pages/Library";
import Account from "./pages/Account";
import MyAccount from "./pages/MyAccount";
import MyCourses from "./pages/MyCourses";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Card,
  CardGroup,
} from "react-bootstrap";
export default function Theme() {
  return (
    <div className="body">
      <Router>
        <div className="body-head">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/home">P2G</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Courses" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="AI">
                      Artificial Intelligence And Machine Language
                    </NavDropdown.Item>
                    <NavDropdown.Item href="CCV">
                      Cloud Computing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="DA">
                      Data Analytics
                    </NavDropdown.Item>
                    <NavDropdown.Item href="CSF">
                      Cyber Security
                    </NavDropdown.Item>
                    <NavDropdown.Item href="IOT">
                      Internet Of Things
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="body-middle">
          <div className="body-middle-content">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/AI">
                <AI />
              </Route>
              <Route path="/CCV">
                <CCV />
              </Route>
              <Route path="/DA">
                <DA />
              </Route>
              <Route path="/CSF">
                <CSF />
              </Route>
              <Route path="/IOT">
                <IOT />
              </Route>
              <Route path="/library">
                <Library />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/MyAccount">
                <MyAccount />
              </Route>
              <Route path="/MyCourses">
                <MyCourses />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <CardGroup>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>
                    <div className="footer-logo">P2G</div>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>Courses</Card.Title>
                  <Nav>
                    <div className="footer-links">
                      <Nav.Item>
                        <Nav.Link href="AI">
                          Artificial Intelligence And Machine Learning
                        </Nav.Link>
                        <Nav.Link href="CCV">Cloud Computing</Nav.Link>
                        <Nav.Link href="DA">Data Analytics</Nav.Link>
                        <Nav.Link href="CSF">Cyber Security</Nav.Link>
                        <Nav.Link href="IOT">Internet Of Things</Nav.Link>
                      </Nav.Item>
                    </div>
                  </Nav>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>Contact Us</Card.Title>
                  <div className="footer-about">
                    <Card.Text>Mail - path2Go@gmail.com</Card.Text>
                    <Card.Text>Phone - +731 12345</Card.Text>
                    <Card.Text>Mobile - +91 123456789</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </Router>
    </div>
  );
}
