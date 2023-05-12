import React, { useContext, useState } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '../../index'
import { Button, Modal, Form, Dropdown, Col, Row } from 'react-bootstrap'

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `$(price)`)
    formData.append('typeId', device.selectedType.id)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('img', file)
    formData.append('info', JSON.stringify(info))
  }

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={name}
            className='mt-3'
            placeholder='Название'
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            value={price}
            className='mt-3'
            placeholder='Цена'
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Row>
            <Col md={4}>
              <Dropdown className='mt-2 mb-2'>
                <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {device.types.map(type =>
                    <Dropdown.Item
                      onClick={() => device.setSelectedType(type)}
                      key={type.id}
                    >
                      {type.name}
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={4}>
              <Dropdown className='mt-2 mb-2'>
                <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {device.brands.map(brand =>
                    <Dropdown.Item
                      onClick={() => device.setSelectedBrand(brand)}
                      key={brand.id}
                    >
                      {brand.name}
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Form.Control
            className='mt-3'
            type='file'
            onChange={selectFile}
          />
          <hr/>
          <Button onClick={addInfo}>Добавить свойство</Button>
          {info.map(i =>
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addDevice}>Добавить</Button>
        <Button onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice
