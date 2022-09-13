import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { createResource as fetchData } from './helper'




function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if (searchTerm) {
            setData(fetchData(searchTerm))
        }
    }, [searchTerm])


    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
        <div>
            {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        //<Fragment>
                        <div>
                            <SearchBar handleSearch={handleSearch} />
                            <Gallery data={data} />
                        </div>
                        //</Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;

