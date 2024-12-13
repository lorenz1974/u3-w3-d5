import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Row className='p-3 pt-5 mt-5 bg-bgFooter'>
      <Col className='d-flex flex-column fs-7'>
        <div>
          <span className='fw-bold'>Italia</span> | Englisk (Uk)
        </div>
        <div className='mt-3'>
          Copyright &copy; <span className='fw-bold'>Apple Inc.</span> Tutti i
          diritti riservati.
        </div>
        <div>
          <span className='fw-bold'>Condizioni dei servizi internet</span> |{' '}
          <span className='fw-bold'>Apple Music e priivacy</span> |{' '}
          <span className='fw-bold'>Avviso sui cookies</span> |{' '}
          <span className='fw-bold'>Supporto</span> |{' '}
          <span className='fw-bold'>Feedback</span>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
