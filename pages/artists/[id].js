import Col from '../../components/Col'
import Image from 'next/image'
import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Row from '../../components/Row'

import {getAllArtistSlugs, getSingleArtistData} from '../../lib/api'

//WATERFALL
// 1. getStaticPaths
export async function getStaticPaths() {
    const paths = await getAllArtistSlugs();
    return {
        paths,
        fallback: false
    }
}
// 2. getStaticProps
export async function getStaticProps({ params }) {
    const artistData = await getSingleArtistData(params.id);
    return {
        props: {
            artistData
        }
    }
}
// 3. Use the data

const SingleArtistPage = ( { artistData }) => {
     const { title, featuredImage, artistInformation } = artistData;
     const { sourceUrl, altText, mediaDetails } = featuredImage.node;
     const { artistsToAlbums } = artistInformation;
    return <Layout>
        <Image 
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height}/>

        <Heading level="1">{title}</Heading>
        { artistsToAlbums &&
        <section>
            <Heading level="2">Albums</Heading>
            <Row>
                {artistsToAlbums.map((album, index) => {
                    const { title, featuredImage, slug } = album;
                    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
                    return <Col key={index} xs="6" sm="4" md="3">
                        <Link href={`/albums/${slug}`}>
                            <a>
                                <Image
                                src={sourceUrl}
                                alt={altText} 
                                width={mediaDetails.width}
                                height={mediaDetails.height}
                                />
                            </a>
                        </Link>
                        <Heading level="3">{title}</Heading>
                    </Col>
                })}
            </Row>
        </section>
        }
    </Layout>
}
export default SingleArtistPage