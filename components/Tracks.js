import styles from './tracks.module.scss'

const Tracks = ({ items }) => {
    return <ul className={styles.tracks}>
        {items.map((item, index) => {
            return<li 
                key={index}
                className={styles.trackitem}>
                <h3>{item.title}</h3>
                <h4>{item.artist}</h4>
            </li>
        })}
    </ul>
}

export default Tracks;