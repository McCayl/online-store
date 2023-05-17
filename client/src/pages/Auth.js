import React, { useContext, useState } from 'react'
import {Button, Container, Form, Card, Row} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import { SHOP_ROUTE, SIGNIN, SIGNUP } from '../utils/consts';
import { signin, signup } from '../http/userAPI';
import {Context} from '../index'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === SIGNIN
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      data = isLogin ? await signin(email, password) : await signup(email, password)
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Signin' : 'Signup'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control 
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ? 
              <>
                <div>
                  <NavLink to={SIGNUP}>Signup</NavLink>
                </div>
                <Button 
                  variant={'outline-success'} className='mt-3'
                  onClick={click}
                >
                  signin
                </Button>
              </>
              :
              <>
                <div>
                  <NavLink to={SIGNIN}>Signin</NavLink>
                </div>
                <Button 
                  variant={'outline-success'} className='mt-3'
                  onClick={click}
                >
                  signup
                </Button>
              </>
            }
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth