import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class Navigation extends React.Component{
    
render(){
return(
<div>
    <Navbar className="nav123" variant="tabs" href="/Level1">
        
        <Nav.Item>
            <Nav.Link className="nav11" href="/Level1">Level1</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link className="nav2" href="/Level2">Level2</Nav.Link>
        </Nav.Item>
</Navbar>
</div>


)

}

}

export default Navigation;