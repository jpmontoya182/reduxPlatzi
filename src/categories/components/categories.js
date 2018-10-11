import React from 'react';
import Category from './category';
import './categories.css'
import Search from '../../widgets/containers/search'
import Media from '../../playlist/components/media'

function Categories(props) {
    return (
        <div className="Categories">
            <Search />
            {
                props.search.map((item) => {
                    return <Media
                        title = {item.get('title')}
                        author =  {item.get('author')}
                        key={item.get('id')}
                    />
                })
            }
            {
                props.categories.map((item) => {
                    return (
                        <Category                            
                            key={item.get('id')}
                            title = {item.get('title')}
                            description  = {item.get('description')}
                            handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories;