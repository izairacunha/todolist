

// Adicionar tarefas à lista
const input = document.querySelector('.input-task')
const buttonAdd = document.querySelector('.add')
const lista = document.getElementById('task-container')
const error = document.getElementById('error')
const all = document.querySelector('.container-task')



buttonAdd.addEventListener('click', function(){
         
        if (input.value != "") { // Verifica se o usuário deixou o input vazio
            lista.innerHTML += `<li id="card" class="cards" draggable="true" ondragstart="onDragStart(event)" ondrag="onDrag(event)" ondragend="onDragEnd(event)" onclick="checkItem(this)"> <p>${input.value}</p>
              <span id="delete-item" onclick="removeItem(this)"> <img id="img" src="/images/remove.svg" alt="delete item"></span>
              </li>  `

            input.value = "" // Limpa o campo do input ao adicionar tarefa
            error.innerHTML =""
            all.add()

        } else {
            error.innerHTML = "Por favor, digite uma tarefa."
            
        }
        
})


// Marcar item da lista de tarefas 
function checkItem(item) {
    item.classList.toggle('check')
}

//Detelar item da lista de tarefas
function removeItem(item) {
    item.parentNode.remove()
}


// Marca todos os itens como verificados
function checkAll(){
    lista.classList.toggle('check')
}

//Remove todos os itens
function removeAll(){
    lista.remove()
}


// TESTANDO DRAG AND DROP

function onDragStart(e){
   // console.log('começou')
    e.dataTransfer.setData("Text",e.target.id);
    // dataTransfer seleciona qual elemento está sendo arrastado
    // text indica o id do elemento arrastado 
    // target indica quem foi o alvo do evento
    event.target.style.background = "rgba(128, 0, 128, 0.5)";
    
        
}
function onDrag(e){
    console.log('card movendo')
    event.target.style.cursor="move"
}

function onDragEnter(e){
    //console.log('entrou')
    
}

function onDragOver(e){
    //console.log('movendo')
    e.preventDefault();
        
}

function onDragLeave(e){
    //console.log('saiu')
}

function onDrop(e){
    //console.log('soltou')
    var data = e.dataTransfer.getData("Text");
    // getData pega o elemento que está no dataTransfer
    document.getElementById('task-container').appendChild(document.getElementById(data));
    // colocar o getElement antes do appendChild faz com que os cadas tenham um "destino" certo e não entrem um no outro, como acontecia com o target
    
    e.preventDefault(); // permirtir que o navegador deixe soltar o elemento em cima de outro  
}

function onDragEnd(e){
    //console.log('terminou')
    event.target.style.background = "";
    
    
}



















