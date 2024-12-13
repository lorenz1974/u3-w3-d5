import { Col } from 'react-bootstrap'
import Slider from 'react-slick'

interface ImageProps {
  text1: string
  text2: string
  src: string
}

const Image = (props: ImageProps) => {
  return (
    <Col className='d-flex flex-column mx-2'>
      <p className='fs-8 fw-bold m-0 p-0 text-gray-500'>{props.text1}</p>
      <p className='fs-7 m-0 p-0'>{props.text2}</p>
      <img
        className='rounded rounded-4 mt-4 img-fluid'
        src={props.src}
        alt={`Text for ${props.src}`}
      />
    </Col>
  )
}

const BigImages = () => {
  // Configurazione del carosello
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div>
      <Slider {...sliderSettings}>
        <Image
          text1='NUOVA STAZIONE RADIO'
          text2='Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill'
          src='/src/assets/images/1a.png'
        />
        <Image
          text1='NUOVA STAZIONE RADIO'
          text2='Ecco la nuova casa della musica latina'
          src='/src/assets/images/1b.png'
        />
      </Slider>
    </div>
  )
}

export default BigImages
