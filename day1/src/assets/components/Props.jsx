import React from 'react'

export const Props = (props) => {

    const styling = {
        color : 'green ',
        fontSize : '40px',
    };

     
    return (
        <>
            <div style={styling}>hello my name is {props.name}</div>
            <h1> I am working as a {props.profesion} </h1>
        </>
    )
}
