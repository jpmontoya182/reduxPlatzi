
function data (state, action) {
    
    switch (action.type){
        case 'SEARCH_VIDEO':           
            let results = [];
            const list = state.data.categories[2].playlist;            
            if(action.payload.query){
                results = list.filter((item)=>{
                    return item.title.toLowerCase().includes(action.payload.query.toLowerCase());
                });
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