import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// custom components
import Button from '../components/Button'
import Col from '../components/Col'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import NewReleases from '../components/NewReleases'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import Showcase from '../components/Showcase'
import TracksByGenre from '../components/TracksByGenre'

import { getAlbums } from '../lib/api'

export async function getStaticProps() {
    const albums = await getAlbums()
    return {
      props: {
          albums
      }
    }
}

export default function Home({ albums }) {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a summary of my website" />
      </Head>
        <Showcase />
        <NewReleases items={albums} />
      {/*<TracksByGenre items={tracks} />*/}
    </Layout>
  )
}
