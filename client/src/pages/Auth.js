import React from 'react'
import {Button, Container, Form, Card, Row} from "react-bootstrap";
import { NavLink, useLocation } from 'react-router-dom';
import { SIGNIN, SIGNUP } from '../utils/consts';

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === SIGNIN

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Signin' : 'Signup'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control placeholder='Email' className='mt-3'></Form.Control>
          <Form.Control placeholder='Password' className='mt-3'></Form.Control>
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ? 
              <>
                <div>
                  <NavLink to={SIGNUP}>Signup</NavLink>
                </div>
                <Button variant={'outline-success'} className='mt-3'>
                  signin
                </Button>
              </>
              :
              <>
                <div>
                  <NavLink to={SIGNIN}>Signin</NavLink>
                </div>
                <Button variant={'outline-success'} className='mt-3'>
                  signup
                </Button>
              </>
            }
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth