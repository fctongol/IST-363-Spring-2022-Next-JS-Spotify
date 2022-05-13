import { useState } from 'react'

import Tabs from './Tabs'
import Tracks from './Tracks'

import { 
	getTracks, getGenres, filterTracksByGenre 
} from '../lib/api'

const TracksByGenre = ({ items }) => {
	//const [stateVariable, setStateFunction] = useState(initValue);
    const [activeGenre, setActiveGenre] = useState("Rock");
	const genres = getGenres();

    return <div>
        <h2>Top Songs by Genre</h2>
        <Tabs 
            items={genres} 
            activeItem={activeGenre} 
            clickHandler={setActiveGenre}/>

        <Tracks items={filterTracksByGenre(items, activeGenre)} />
    </div>
}

export default TracksByGenre;