let form = document.querySelector('form');
let input = document.getElementById('task');
let btn = document.querySelector('button');
let list = document.querySelector('.tasks');
let clear = document.getElementById('noMore');
let delete_btn = document.getElementById('delete');


function add(e){
    let input = document.getElementById('task');
    let list = document.querySelector('.tasks');
    let clear = document.getElementById('noMore');
    
    let newtask = document.createElement('p');
    newtask.textContent = input.value;
    list.appendChild(newtask);
    clear.style.display='none';
    input.value = '';
    e.preventDefault();

}




function borrar(){
    while(list.children.length >= 1){
        list.removeChild(list.firstChild)
    }
    clear.style.display='flex';

}

input.addEventListener('keydown',(e) =>{
    if (e.key === 'Enter'){
        let newtask = document.createElement('p');
        newtask.className='newtask';
        newtask.textContent = input.value;
        list.appendChild(newtask);
        clear.style.display='none';
        input.value = '';


        e.preventDefault();
        
        }
    });
