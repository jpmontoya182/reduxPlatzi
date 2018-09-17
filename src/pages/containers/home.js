import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import RelatedLayout from '../components/related-layout'
import Categories from '../../categories/components/categories'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError  from '../../errores/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

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
                        categories={this.props.data.categories} 
                        handleOpenModal={this.handleOpenModal}
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

export default Home