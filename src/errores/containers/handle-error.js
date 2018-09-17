import React, { Component } from 'react';
import RegularError from '../components/regular-error'


class HandleError extends Component {
    state = {
        handleError: false
    }
    componentDidCatch(error, info){
        // envia este error a un servicio con Sentry
        this.setState({
            handleError : true
        })
        console.log(error)
        console.log(info)
    }
    render (){
        if(this.state.handleError){
           return (
               <RegularError></RegularError>             
           ) 
        }
        return this.props.children
    }

}

export default HandleError
