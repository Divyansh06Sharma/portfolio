import React, { useState, useEffect, useCallback } from 'react'
import SingleGame from '../../components/singleGame/SingleGame'
import { BiSearch } from 'react-icons/bi'
// import { pes5, sniper, mario, asphalt, maxresedefault } from '../../assets/images'

// Images
import asphalt from '../../assets/images/asphalt.jpg'
import sniper from '../../assets/images/sniper.jpg'
import maxresdefault from '../../assets/images/maxresdefault.jpg'
import mario from '../../assets/images/mario.jpg'
import pes5 from '../../assets/images/pes5.jpeg'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import 'swiper/css'
import './gaming.scss'


const url = "https://api.rawg.io/api/games?key=ec9f420152c1491380f2d2ad07e1a73a"

const Gaming = () => {
    const [loading, setLoading] = useState(false)
    const [games, setGames] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const fetchGames = async (title) => {
        try {
            setLoading(false)
            const response = await fetch(`${url}&search=${title}`)
            if (!response.ok) {
                let msg = ` There was a problem while fetching the data ${response.statusText} ${response.status}`
                throw new Error(msg)
            } else {
                const data = await response.json()
                setGames(data.results[2].tags)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm('')
}

    useEffect(() => {
        fetchGames()
    }, [])

    return <>
        <section className='game-section'>
            <form onSubmit={handleSubmit} className='search-item'>
                <div className='input-group'>
                    <input type="text"
                        className='input-search'
                        value={searchTerm}
                        placeholder="e.g. football, sniper etc"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className='search-icon switch__color' onClick={() => fetchGames(searchTerm)}>
                        <BiSearch />
                    </button>
                </div>
            </form>
            <div className='gaeme_section-wrapper'>
                <div className='hero-section'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay
                    >
                        <SwiperSlide>
                            <img src={sniper} alt="sniper" />
                            <h2> Action Games</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={pes5} alt="pes5" />
                            <h2>PES 5</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={asphalt} alt="asphalt" />
                            <h2> car Racing </h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={maxresdefault} alt="maxresedefault" />
                            <h2> FIFA 2023</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mario} alt="mario" />
                            <h2> Super Mario </h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p>
                    The action game is a genre that includes fights, puzzles, and
                    strategies emphasizing coordination and reaction. It includes a
                    large variety of sub-genres like fighting, beat 'em ups, shooters,
                </p>
                <div className='game-wrapper'>
                {games.map((myGames, index) => {
                    return <SingleGame key={index} {...myGames} /> 
                })}
                </div>
               
            </div>
        </section>
    </>
}

export default Gaming

// ec9f420152c1491380f2d2ad07e1a73a