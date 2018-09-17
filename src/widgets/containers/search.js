import React, { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component{
    state ={
        value : 'Luis Fonsi'
    }
    handleSubmit = event => {
        console.log(this.input.value, 'submit')
        event.preventDefault();        
    }

    setInputRef = (element)=>{
        this.input = element;
    }

    handleInputChange = event => {
        this.setState({
            value : event.target.value.replace(' ', '-')
        })
    }

    render () {
        return (
            <Search 
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;