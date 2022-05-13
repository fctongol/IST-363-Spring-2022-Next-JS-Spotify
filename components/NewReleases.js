import Col from './Col'
import Container from './Container'
import Heading from './Heading'
import Image from 'next/image'
import Link from 'next/link'
import Row from './Row'
import Section from './Section'

const NewReleases = ({ items }) => {
    return <Section>
        <Container>
            <Heading level="2">New Releases</Heading>
            <Row>
                {items.map ((item, index) => {
                    const { featuredImage, title, slug, albumInformation } = item.node;
                    const { sourceUrl, altText, mediaDetails} = featuredImage.node;
                    const { artistsToAlbums } = albumInformation;
                    return <Col xs="6" sm="4" md="3" marginBottom="2" key={index}>
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
                        <Heading level="3">
                            <Link href={`/albums/${slug}`}>
                                <a>
                                    {title}
                                </a>
                            </Link>
                        </Heading>
                        {artistsToAlbums.map((artist) => {
                            const { title, slug } = artist;
                            return <Heading level="4">
                                <Link href={`/artists/${slug}`}>
                                    <a>
                                        {title}
                                    </a>
                                </Link>
                            </Heading>
                        })}
                        
                    </Col>
                })}
            </Row>
        </Container>
    </Section>
}
export default NewReleases