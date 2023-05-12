import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, SHOP_ROUTE, SIGNIN } from '../utils/consts';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
  const {user} = useContext(Context)

  const logOut = () => {
    user.setIsAuth(false)
    user.setUser({})
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link as={Link} to={SHOP_ROUTE}>MusicShop</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user.isAuth ? 
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={ADMIN_ROUTE}>Admin</Nav.Link>
              <Nav.Link onClick={() => logOut()}>
                Logout
              </Nav.Link>
            </Nav>
            :
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={SIGNIN}>
                Signin
              </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
})

export default NavBar