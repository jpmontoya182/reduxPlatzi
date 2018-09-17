const $form = document.getElementById('form');

$form.addEventListener('submit', handleSubmit)

function handleSubmit (ev){
    ev.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);   
}