import { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Slider from 'react-slick'
import axios from 'axios'
import { ITrack } from '../interfaces'

interface NewReleasesProps {
  trackList: string[]
  showArtist?: boolean
  showSongTitle?: boolean
}

interface ImageProps {
  trackId: string
  className?: string
  showArtist?: boolean
  showSongTitle?: boolean
}

const ImagePlaceHolder = ({
  trackId,
  className,
  showArtist,
  showSongTitle,
}: ImageProps) => {
  const [track, setTrack] = useState<ITrack | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    axios
      .get<ITrack>(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${trackId}`
      )
      .then((response) => {
        setTrack(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching trackInfo:', error)
        setError(`Error fetching trackInfo: ${error}`)
        setIsLoading(false)
      })
  }, [trackId])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!track) return <div>No track data available</div>
  if (!track.album.cover_medium) return <div>No image available</div>

  return (
    <Col className={`d-flex flex-column ${className}`}>
      <img
        className='rounded rounded-2 mt-4 bg-songPlaceHolder d-flex justify-content-center align-items-center'
        src={track.album.cover_medium}
        alt={track.title || 'No title'}
        style={{ width: '150px', height: '150px' }}
      />
      {showSongTitle && (
        <p className='fs-8 m-0 mt-1 p-0 text-gray-500'>{track.title_short}</p>
      )}
      {showArtist && (
        <p className='fs-8 m-0 mt-1 p-0 text-gray-600'>{track.artist.name}</p>
      )}
    </Col>
  )
}

const NewReleases = (props: NewReleasesProps) => {
  if (props.trackList.length === 0) {
    return <div>NewReleases: No tracks data available</div>
  }

  // Configurazione del carosello
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Mostra 6 elementi per volta su schermi grandi
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // Per schermi medi-grandi
        settings: {
          slidesToShow: 5, // Mostra 5 elementi
        },
      },
      {
        breakpoint: 968, // Per schermi medi
        settings: {
          slidesToShow: 4, // Mostra 4 elementi
        },
      },
      {
        breakpoint: 768, // Per tablet
        settings: {
          slidesToShow: 3, // Mostra 3 elementi
        },
      },
      {
        breakpoint: 576, // Per dispositivi mobili
        settings: {
          slidesToShow: 2, // Mostra 2 elementi
        },
      },
    ],
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <Slider {...sliderSettings}>
        {props.trackList.map((trackId, i) => (
          <ImagePlaceHolder
            key={`${trackId}${i}`}
            trackId={trackId}
            showSongTitle={props.showSongTitle}
            showArtist={props.showArtist}
          />
        ))}
      </Slider>
    </div>
  )
}

export default NewReleases
