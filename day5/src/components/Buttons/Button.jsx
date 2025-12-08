import React from 'react'

export const Button = ({ type, text, onClick , bg , font_color , padding }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{ color : font_color , padding : padding }}
            className={`${bg} hover:bg-blue-400 cursor-pointer`}
        >
            {text}</button>
    )
}
