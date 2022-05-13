import Col from '../../components/Col';
import Image from 'next/image'
import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';

import { getAllAlbumSlugs, getSingleAlbumData } from '../../lib/api';

export async function getStaticPaths() {
    const paths = await getAllAlbumSlugs();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const albumData = await getSingleAlbumData(params.id);
    return {
        props: {
            albumData
        }
    }
}

const SingleAlbumPage = ({ albumData }) => {
    const { title, featuredImage, albumInformation } = albumData;
    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
    const { year, songsToAlbums, artistsToAlbums } = albumInformation;
    return <Layout>
        <Image 
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height}/>
            
       <Heading level="1">{title}</Heading>
       <Heading level="2">{year}</Heading>
       {artistsToAlbums.map((artist) => {
        const { title, slug } = artist;
        return <Heading level="2">
            <Link href={`/arists/${slug}`}>
                <a>
                    {title}
                </a>
            </Link>
            </Heading>
       })}
       <section>
        <Heading level="2">Songs</Heading>
        <Row>
        {songsToAlbums.map((song, index) => {
            const { title } = song;
            return <Col key={index} xs="12" sm="12">
                <Heading level="3">{title}</Heading>
            </Col>
        })}
        </Row>
       </section>
       <Paragraph>
           <Link href="/artists">
               <a>
                   Back to artists
               </a>
           </Link>
       </Paragraph>
    </Layout>
}
export default SingleAlbumPage 