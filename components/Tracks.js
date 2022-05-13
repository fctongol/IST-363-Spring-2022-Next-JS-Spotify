import Paragraph from './Paragraph';
import styles from './tracks.module.scss'

function convertDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const formattedDuration = `${minutes}:${seconds}`
    return formattedDuration
}

const Tracks = ({ items }) => {
    
    return <ul className={styles.tracks}>
        {items.map((item, index) => {
            const { title, songInformation } = item;
            return<li 
                key={index}
                className={styles.trackitem}
                >

                <h3>{title}</h3>
                <Paragraph>{convertDuration(songInformation.duration)}</Paragraph>
            </li>
        })}
    </ul>
}

export default Tracks;