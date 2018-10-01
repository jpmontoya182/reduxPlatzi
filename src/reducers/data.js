import schema from '../schemas/index';

const initialState = {
    entities : schema.entities, 
    categories: schema.result.categories, 
    search: [],
}


function data (state = initialState, action) {    
    switch (action.type){
        case 'SEARCH_VIDEO':           
            let results = [];
            const list = state.data.entities.media;  
            if(action.payload.query){
                // results = list.filter((item)=>{
                //     return item.title.toLowerCase().includes(action.payload.query.toLowerCase());
                // });
            }
            return {
                ...state,
                search : results
            };
        default :
            return { 
                ...state, 
                search : []
            }
    }
}

export default data