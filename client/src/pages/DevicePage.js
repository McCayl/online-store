import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {id: 1, name: 'Gibson Les Paul Standard 50s Heritage Cherry Sunburst', price: 9999, rating: 5, img: 'https://images.musicstore.de/images/1280/gibson-les-paul-standard-50s-heritage-cherry-sunburst_1_GIT0049490-000.jpg'}
  const info = [
    {id: 1, title: 'Производитель', description: 'Gibson'},
    {id: 2, title: 'Серия', description: 'Gibosn USA'},
    {id: 3, title: 'Дизайн', description: 'Les Paul'},
    {id: 4, title: 'Корпус', description: 'Красное дерево'},
    {id: 5, title: 'Топ', description: 'Клен'}
  ]
  
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={350} src={device.img}/>
        </Col>
        <Col className='d-flex flex-column align-items-center' md={4}>
          <h2>{device.name}</h2>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
          >
            {device.rating}
          </div>
        </Col>
        <Col md={4}>
          <Card 
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {device.price}</h3>
            <Button>Добавить в коризну</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column mt-3'>
        <h1>Характеристики</h1>
        {info.map((info, i) => 
          <Col key={info.id} style={{padding: 10, background: i % 2 === 0 ? 'lightgray' : 'transparent'}}> 
            {info.title} : {info.description}
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default DevicePage