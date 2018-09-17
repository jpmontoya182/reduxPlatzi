import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';


class VideoPlayer extends Component {
    state = {
        pause : true, 
        duration : 0,
        currentTime : 0,
        loading : false,
        currentVolume :0
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = (event) => {    
        this.video = event.target;
        this.setState({
            duration : this.video.duration 
        })
    }

    handleTimeUpdate = (event) => {        
        this.setState({
           currentTime : this.video.currentTime
        })
    }

    handleProgressChange = (event) =>{
        this.video.currentTime = event.target.value;
    }

    handleSeeking = (event) =>{
        this.setState({
            loading: true
        })
    }

    handleSeeked = (event) =>{
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event=>{
        this.video.volume = event.target.value
    }

    handleVolumeClick = event =>{
        if (this.video.volume == 0)
        {
            this.video.volume = this.state.currentVolume
        }else{
            this.setState({
                currentVolume : this.video.volume
            })
            this.video.volume = 0;
        } 
    }

    setRef = element => {
        this.player = element
    }

    handleFullScreenClick = (event) => {
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen();
        }else{
            document.webkitExitFullscreen();            
        }        
    }

    render(){
        return (
            <VideoPlayerLayout
                setRef = {this.setRef}
            >
                <Title 
                    title = {this.props.title}
                />
                <Controls>
                    <PlayPause 
                        pause = {this.state.pause}
                        handleClick = {this.togglePlay}
                    />
                    <Timer 
                        duration = { this.state.duration }
                        currentTime = { this.state.currentTime }
                    />
                    <ProgressBar 
                       duration={this.state.duration} 
                       value = { this.state.currentTime }
                       handleProgressChange = {this.handleProgressChange}
                    />
                    <Volume 
                        handleVolumeChange = {this.handleVolumeChange}
                        handleVolumeClick = {this.handleVolumeClick}
                    />
                    <FullScreen 
                        handleFullScreenClick = {this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active = { this.state.loading }
                />
                <Video 
                    src={this.props.src}
                    autoplay = {this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    muted={this.muted}
                    handleTimeUpdate = {this.handleTimeUpdate}
                    handleSeeking = {this.handleSeeking}
                    handleSeeked = {this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer