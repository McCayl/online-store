import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI'

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({ name: value }).then(data => {
      setValue('')
      onHide()
    })
  }

  return (
    <Modal
        show={show}
        onHide={onHide}
        centered
    >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>Добавить бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder='Название'
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addBrand}>Добавить</Button>
          <Button onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand