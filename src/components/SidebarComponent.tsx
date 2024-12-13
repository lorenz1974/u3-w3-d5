import React from 'react'
import { Container, Nav, Form, InputGroup } from 'react-bootstrap'
import {
  FaApple,
  FaHome,
  FaThLarge,
  FaBroadcastTower,
  FaSearch,
} from 'react-icons/fa'

const Sidebar: React.FC = () => {
  return (
    <Container fluid className='text-white'>
      <h3 className='mb-4 p-1 d-flex align-items-center'>
        <FaApple className='navbar-icon me-2' />
        <p className='pt-1 my-auto'>Music</p>
      </h3>

      {/* Barra di ricerca */}
      <Form className='mb-4'>
        <InputGroup>
          <InputGroup.Text>
            <FaSearch className='text-danger' />
          </InputGroup.Text>
          <Form.Control
            type='text'
            placeholder='Cerca'
            className='search-input'
          />
        </InputGroup>
      </Form>

      {/* Navigazione */}
      <Nav className='flex-lg-column mb-4'>
        <Nav.Link className='text-white' href='#home'>
          <FaHome className='text-danger me-2' />
          Home
        </Nav.Link>
        <Nav.Link className='text-white' href='#novita'>
          <FaThLarge className='text-danger me-2' />
          Novità
        </Nav.Link>
        <Nav.Link className='text-white' href='#radio'>
          <FaBroadcastTower className='text-danger me-2' />
          Radio
        </Nav.Link>
      </Nav>
    </Container>
  )
}

export default Sidebar
