import React from 'react';
import './full-screen.css'
import FullScreenIcon from '../../icons/components/full-screen'

function FullScreen (props) {
    return (
        <div className="FullScreen">
            <button
                onClick = {props.handleFullScreenClick}
            >
                <FullScreenIcon
                    size={25}
                    color= "white"
                />
            </button>
        </div>
    )
}

export default FullScreen;