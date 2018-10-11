import React, {Component} from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {    
    render () {
        return <Media 
            title={item.get('title')} 
            author={item.get('author')} 
            cover={item.get('cover')}  
            key={item.get('id')}
        />
    }    
}

function mapStateToProps(state, props){
    return {
        data : state.getIn(['data','entities','media',props.id])
    }
}

export default connect(mapStateToProps)(MediaContainer)