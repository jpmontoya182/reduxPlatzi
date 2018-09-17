import React from 'react';
import './timer.css'

function formattedTime(secs){
    let minutes = parseInt(secs / 60, 10)    
    let seconds = parseInt(secs % 60, 10)

    if(minutes < 10){
        minutes = '0' + minutes 
    }

    if(seconds < 10){
        seconds = '0' + seconds 
    }

    return `${minutes} : ${seconds}`
}

function Timer (props){
    return (
        <div className="Timer">
            <p>
                <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
            </p>           
        </div>
    )
}

export default Timer