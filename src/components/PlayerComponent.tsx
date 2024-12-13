import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import {
  FaApple,
  FaRandom,
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaRedo,
  FaVolumeUp,
} from 'react-icons/fa'

const Player = () => {
  return (
    <Row
      id='player'
      className='justify-content-around align-items-center bg-gray-800'
      style={{ height: '3rem' }}
    >
      {/* Controlli musicali */}
      <Col
        id='playerCommands'
        xs={4}
        className='d-flex justify-content-center align-items-center'
      >
        <FaRandom className='mx-2' />
        <FaStepBackward className='mx-2' />
        <FaPlay className='mx-2' />
        <FaStepForward className='mx-2' />
        <FaRedo className='mx-2' />
      </Col>

      {/* Icona centrale */}
      <Col
        id='appleSymbol'
        xs={4}
        className='d-flex justify-content-center bg-gray-700 m-0 h-100 align-items-center d-none d-md-flex'
      >
        <FaApple size={24} />
      </Col>

      {/* Volume e pulsante "Accedi" */}
      <Col xs={4} className='d-flex justify-content-end align-items-center'>
        <FaVolumeUp className='mx-2' />
        <Form.Range className='mx-2 text-black' style={{ width: '100px' }} />
        <Button variant='danger' size='sm' className='px-4 mx-2 fs-7'>
          Accedi
        </Button>
      </Col>
    </Row>
  )
}

export default Player
