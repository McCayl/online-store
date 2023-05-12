import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addType = () => {

  }

  return (
    <Modal
        show={show}
        onHide={onHide}
        centered
    >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>Добавить тип</Modal.Title>
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
          <Button onClick={addType}>Добавить</Button>
          <Button onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateType
