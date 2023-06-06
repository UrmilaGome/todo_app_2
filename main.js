let form =document.querySelector('form')
let input =document.querySelector('input')
let ul= document.querySelector('ul')
let removebtn = document.querySelector('.remove')

const saveTodo = (e) => {
    e.preventDefault();
   let newLi = document.createElement('li');
   newLi.textContent = input.value;
   newLi.className = 'list-group-item rounded-0 w-600 my-2 new';
   
   let dltBtn = document.createElement('button');
   dltBtn.textContent = "Delete";
   dltBtn.className = "btn btn-outline-danger btn-sm rounded-0 float-end delBtn";
   newLi.appendChild(dltBtn);
   ul.appendChild(newLi); 
   form.reset();
};

form.addEventListener("submit", saveTodo);

const dltTodo = (e) => {
if(e.target.className.includes("btn")){
    alert("Do you want to delete ?");
     let li = e.target.parentElement;
     ul.removeChild(li);
}
};

ul.addEventListener("click",dltTodo);

function clear(e){
    e.preventDefault();
    ul.remove();
}

removebtn.addEventListener("click", clear)


  