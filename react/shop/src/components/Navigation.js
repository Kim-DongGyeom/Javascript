// bootstarap commponents
import { Navbar, Container, Nav } from 'react-bootstrap';

// navigation items
import items from './../utils/Navigation.json';

export default function Navigation(props) {
  const { color } = props;
  return (
    <Navbar bg={color} data-bs-theme={color}>
      <Container>
        <Navbar.Brand href='/'>React-Shop</Navbar.Brand>
        <Nav className='me-auto'>
          {items
            ? items.map((item, idx) => {
                return (
                  <Nav.Link key={item.name + idx} href={item.href}>
                    {item.name}
                  </Nav.Link>
                );
              })
            : ''}
        </Nav>
      </Container>
    </Navbar>
  );
}
