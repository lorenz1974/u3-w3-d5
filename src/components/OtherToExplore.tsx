import { Col, Row, Button } from 'react-bootstrap'

const buttonLabels: string[] = [
  'Esplora per genere',
  'Worldwide',
  'Video musicali',
  'Decenni',
  'Classifiche',
  'Nuovi artisti',
  "Attività e stati d'animo",
  'Audio spaziale',
  'Hit del passato',
]

interface ButtonProps {
  class?: string
  label: string
}
const CreateButton = (props: ButtonProps) => {
  return (
    <Col className='d-flex justify-content-center align-items-center'>
      <Button
        className={`btn text-red btn-gray-800 m-2 p-2 w-100 d-flex justify-content-between align-items-center ${props.class}`}
      >
        <p className='p-2 m-0'>{props.label}</p>
        <p className='p-2 m-0'>&gt;</p>
      </Button>
    </Col>
  )
}
const OtherToExplore = () => {
  return (
    <Row className='justify-content-around row-cols-1 row-cols-lg-3'>
      {buttonLabels.map((label, i) => {
        return <CreateButton key={i} class='' label={label} />
      })}
    </Row>
  )
}

export default OtherToExplore
