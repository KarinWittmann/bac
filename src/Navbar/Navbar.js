import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";



class Navigation extends React.Component{

    
    
render() {
    return(
    <div>
        <Navbar className="nav123" variant="tabs" href="/Profileselection">
            
            <Nav.Item>
                <Nav.Link className="nav2" href="/Profileselection">Profileselection</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="nav2" href="/Scores">Scores</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav2" href="/Panel">Game-Panel</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link className="nav0" href="/LoginForm/LoginForm">Logout</Nav.Link>
            </Nav.Item>
    </Navbar>
    </div>


    )

}

}

export default Navigation;