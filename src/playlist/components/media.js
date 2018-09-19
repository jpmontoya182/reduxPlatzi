import React, { PureComponent } from 'react';

// valida el contenido de las propiedades
import PropTypes from 'prop-types';
import './media.css'

class Media extends PureComponent {
    handleClick = (event) => {
        this.props.openModal(this.props)
    }
    render(){       
        return (
            <div className="Media" onClick={this.handleClick} >
                <div className="Media-cover">
                    <img 
                        src={this.props.cover}
                        alt="Imagen"                        
                        width={200}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.title}</h3>
                    <p className="Media-author">{this.author}</p>
                </div>
            </div>
        )
    }
}

Media.PropTypes = {
    cover : PropTypes.string.isRequired, 
    title : PropTypes.string, 
    author : PropTypes.string
}

export default Media;