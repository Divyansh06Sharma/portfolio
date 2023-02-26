import React from 'react'
import './blast.scss'

const Blast = ({ letterClass, arrayStr, indexLetter }) => {
  // const letterClass = "text-animate";
  return (
    <span>
    
      {arrayStr.map((char, index) => {
        return (
          <span
            key={char + index}
            className={`${letterClass} _${index + indexLetter}`}
          >
            {char}
            {console.log(letterClass)}
          </span>
        )
      })}
    </span>
  )
}

export default Blast