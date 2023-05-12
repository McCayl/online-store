import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className='d-flex flex-row'>
      <Button onClick={() => setDeviceVisible(true)}className='mt-4 p-2'>Устройство</Button>
      <Button onClick={() => setTypeVisible(true)} className='mt-4 p-2'>Тип</Button>
      <Button onClick={() => setBrandVisible(true)} className='mt-4 p-2'>Бренд</Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}></CreateBrand>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}></CreateType>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}></CreateDevice>
    </Container>
  )
}

export default Admin