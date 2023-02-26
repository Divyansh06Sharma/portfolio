import React from 'react'
import Fade from 'react-reveal/Fade'
import { FaWindows, FaXbox, FaPlaystation } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

import './singlegame.scss'

const SingleGame = (props) => {
    const { image_background, name, slug, language, games_count } = props
    return <>
        <Fade>
            <div className='game-card'>
                <img src={image_background} alt="GameImage" />
                <div className='game-description'>
                    <div className='game-header' style={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div className='game-icons-wrapper'>
                            <FaWindows className='game-icons' />
                            <FaXbox className='game-icons' />
                            <FaPlaystation className='game-icons' />
                        </div>
                        <div>
                            {[1, 2, 3, 4, 5].map((_, index) => {
                                return <AiFillStar style={{ color: 'fbca03' }} />
                            })}
                        </div>
                    </div>
                    <h2 className='switch__color'>{name}</h2>
                    <div>
                        <span>{language}</span>
                        <span>{games_count}</span>
                        <p>{slug}</p>
                    </div>
                </div>
            </div>
        </Fade>
    </>


}

export default SingleGame