import React from 'react'

export default function Tile({ mark, changeMark, position }) {
    return (
        <div className={`tile mark${mark}`}
            onClick={event => changeMark(position)}>

        </div>
    )
}
