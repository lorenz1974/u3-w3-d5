import { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Slider from 'react-slick'
import axios from 'axios'
import { ITrack, ITrackError, ITrackData } from '../interfaces'

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
  showArtist,
  showSongTitle,
}: ImageProps) => {
  const [track, setTrack] = useState<ITrack | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await axios.get(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${trackId}`
        )
        if (response.data.error) {
          setTrack({ type: 'error', error: response.data.error.message })
        } else {
          setTrack({ type: 'data', ...response.data })
        }
      } catch (error) {
        console.error('Error fetching trackInfo:', error)
        setError(`Error fetching trackInfo: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTrack()
  }, [trackId])

  if (isLoading)
    return (
      <div className='text-warning d-flex justify-content-center align-items-center fs-7'>
        Loading...
      </div>
    )
  if (error)
    return (
      <div className='text-danger d-flex justify-content-center align-items-center fs-7'>
        {error}
      </div>
    )
  if (!track)
    return (
      <div className='text-danger d-flex justify-content-center align-items-center fs-7'>
        No track data available
      </div>
    )
  if (track.type === 'error')
    return (
      <div className='text-danger d-flex justify-content-center align-items-center fs-7'>
        Error: {track.error || 'An unknown error occurred'}
      </div>
    )
  if (!track.album.cover_medium && !track.artist.picture_medium)
    return (
      <div className='text-danger d-flex justify-content-center align-items-center fs-7'>
        No image available
      </div>
    )

  return (
    <div className='d-flex flex-column align-items-start justify-content-center fs-7'>
      <img
        className='rounded rounded-2 mt-4 bg-songPlaceHolder d-flex justify-content-center align-items-center'
        src={track.album.cover_medium || track.artist.picture_medium}
        alt={track.title || 'No title'}
        style={{ width: '150px', height: '150px' }}
      />
      {showSongTitle && (
        <p className='fs-8 m-0 mt-1 p-0 text-gray-500'>{track.title_short}</p>
      )}
      {showArtist && (
        <p className='fs-8 m-0 mt-1 p-0 text-gray-600'>{track.artist.name}</p>
      )}
    </div>
  )
}

const NewReleases = (props: NewReleasesProps) => {
  if (props.trackList.length === 0) {
    return <div>NewReleases: No tracks data available</div>
  }

  // Configurazione del carosello
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
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
    <div className='slider-container'>
      <Slider {...sliderSettings}>
        {props.trackList.map((trackId, i) => (
          <Col key={`${trackId}${i}`} className='d-flex flex-column'>
            <ImagePlaceHolder
              trackId={trackId}
              showSongTitle={props.showSongTitle}
              showArtist={props.showArtist}
            />
          </Col>
        ))}
      </Slider>
    </div>
  )
}

export default NewReleases
