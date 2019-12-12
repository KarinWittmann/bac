import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="nav123" variant="tabs" href="/Profileselection">
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav2" to="/Profileselection">
              Profileselection
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} className="nav2" to="/Scores">
              Scores
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav2" to="/Panel">
              Game-Panel
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} className="nav0" to="/LoginForm/LoginForm">
              Logout
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
