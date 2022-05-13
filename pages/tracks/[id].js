import Col from "../../components/Col";
import Container from "../../components/Container"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import Link from "next/link";
import Row from "../../components/Row";

import { getAllTrackPaths,  getSingleTrackData } from '../../lib/api'

// THE WATERFALL
// 1. get a list of paths to prerender
export async function getStaticPaths() {
    const paths = getAllTrackPaths();

    return {
        paths,
        fallback: false
    }
}

// 2. get the data the belongs to the single song
export async function getStaticProps({ params }) {
    const singleTrackData = getSingleTrackData(params.id);
    return {
        props : {
            singleTrackData
        }
    }
}


const SingleTrackTemplate = ({ singleTrackData }) => {
    const { matchingTrack } = singleTrackData;
    const { title, artist } = matchingTrack;
    return <Layout>
        <Container>
            <Row>
                <Col>
                <Heading level="3">
                        <Link href="/tracks">
                        <a>
                            Back to all songs
                        </a>
                        </Link>
                </Heading>
                    <Heading level="1">{title}</Heading>
                    <Heading level="2">{artist}</Heading>
                </Col>
            </Row>
        </Container>
    </Layout>
}
export default SingleTrackTemplate;  