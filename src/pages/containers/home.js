import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import RelatedLayout from '../components/related-layout'
import Categories from '../../categories/components/categories'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError  from '../../errores/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux';

class Home extends Component {   
    state = {
        modalVisible : false
    } 

    handleOpenModal =(media) =>{
        this.setState({
            modalVisible: true,
            media
        })
    }

    handleCloseModal =() =>{
        this.setState({
            modalVisible: false
        })
    }

    render(){     
        return (     
            <HandleError>       
                <HomeLayout> 
                    <RelatedLayout />                     
                    <Categories 
                        categories={this.props.categories} 
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />  
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >   
                            <VideoPlayer 
                                autoplay
                                src={this.state.media.src}
                                title={this.state.media.title}
                            />                             
                            </Modal>
                        </ModalContainer>
                    }               
                </ HomeLayout>   
            </HandleError>  
        )
    }
}

function mapStateToProps (state, props){
    console.log(state.getIn(['data', 'entities', 'categories']))
    {/* const categories = state.getIn(['data','categories']).map((categoryId)=>{
        return state.getIn(['data', 'entities', 'categories',categoryId ])
    })  
    return {
        categories : categories, 
        search : state.getIn(['data', 'search'])
    }
    */}

    return {
        categories : null, 
        search : null
    }
}

export default connect(mapStateToProps)(Home)