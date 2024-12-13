import react from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Row, Col, Container } from 'react-bootstrap'
import './assets/css/bootstrap.css'
import './interfaces'

import Sidebar from './components/SidebarComponent'
import Player from './components/PlayerComponent'
import Footer from './components/FooterComponent'
import BigImages from './components/BigImages'
import NewReleases from './components/NewReleases'
import OtherToExplore from './components/OtherToExplore'

const NewradioEpisodesTrackList: string[] = [
  '2675212382',
  '525948612',
  '1664120082',
  '2012733657',
  '2267672507',
  '539350272',
]

const NewReleasesTrackList1: string[] = [
  '527505901',
  '527505911',
  '1858274097',
  '1723330727',
  '122506960',
  '2413630085',
]

const NewReleasesTrackList2: string[] = [
  '2068438117',
  '106751068',
  '3576408',
  '1759869267',
  '742559652',
  '66749324',
]
const App = () => {
  return (
    <Container className='border p-4' style={{ maxWidth: '1280px' }}>
      <Row className='row-cols-1 row-cols-lg-2'>
        <Col className='col-12 col-lg-2 d-flex flex-column bg-bgSidebar'>
          <header>
            <Sidebar />
          </header>
        </Col>
        <Col className='col-12 col-lg-10 bg-bgMain '>
          <main>
            <Player />
            <section className='mx-2' id='twoImages'>
              <h3 className='fw-bold fs-4 mt-5 py-2 border-bottom'>Novità</h3>
              <BigImages />
            </section>
            <section className='mx-2' id='newRadioEpisodes'>
              <h4 className='fw-bold fs-6 mt-5'>
                Nuovi episodi radio <span className='text-gray-600'>&gt;</span>
                <NewReleases
                  trackList={NewradioEpisodesTrackList}
                  showArtist={true}
                  showSongTitle={false}
                />
              </h4>
            </section>
            <section className='mx-2' id='newReleases'>
              <h4 className='fw-bold fs-6 mt-5'>
                Nuove uscite <span className='text-gray-600'>&gt;</span>
                <NewReleases
                  trackList={NewReleasesTrackList1}
                  showArtist={true}
                  showSongTitle={true}
                />
                <NewReleases
                  trackList={NewReleasesTrackList2}
                  showArtist={true}
                  showSongTitle={true}
                />
              </h4>
            </section>
            <section className='mx-2' id='other'>
              <h4 className='fw-bold fs-6 mt-5'>Altro da esplorare</h4>
              <OtherToExplore />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </Col>
      </Row>
    </Container>
  )
}

export default App
