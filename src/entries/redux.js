import { createStore } from 'redux';

const $form = document.getElementById('form');

$form.addEventListener('submit', handleSubmit)

function handleSubmit (ev){
    const data = new FormData($form);
    const title = data.get('title');

    // action
    store.dispatch({
        type: 'ADD_Song',
        payload : {
            title
        }
    })

    ev.preventDefault();
}

//
const initialState = [
    {'title': 'Despacito'},
    {'title': 'One more time'},
    {'title': 'Echame la culpa'}
]

// 
const reducer = function(state, action){
    switch (action.type){
        case 'ADD_Song':
            return [...state, action.payload]
        default:
            return state
    }
}

// store
const store = createStore(
    reducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// render main html
function render(){
    const $container = document.getElementById('playlist');
    const playlist = store.getState();
    $container.innerHTML = '';
    playlist.forEach((item) => {
        const template = document.createElement('p');
        template.textContent = item.title;
        $container.appendChild(template)
    })
}

//
store.subscribe(handleChange);
function handleChange(){
    render();    
}

render();