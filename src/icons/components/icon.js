import React from 'react';

function Icon(props){
    const {color, size} = props
    return (
        <svg
            fill={color}
            viewBox="0 0 34 32"
            width={size} 
            heigth={size}
        >
            { props.children }
        </svg>
    )
}

export default Icon

