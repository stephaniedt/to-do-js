let addTarefa = document.querySelector(".addTarefa")
let container = document.querySelector("main.container")
let inputTextoTarefa = document.querySelector("#textoTarefa")

// addTarefa.addEventListener('click', function(){
//     alert("Tarefa adicionada à lista (y)")
// });
// //funcao como parametro da funcao.


function addTask() {
    let textoTarefa = inputTextoTarefa.value

    if (textoTarefa.length > 0) {
        let divCard = document.createElement('div');
        divCard.setAttribute('class','card text-white bg-info m-3');

        let divCardBody = document.createElement('div')
        divCardBody.setAttribute('class','card-body')
        

        let pConteudo = document.createElement('p')
        pConteudo.setAttribute('class','card-text')
        pConteudo.textContent = textoTarefa;
        
        let btnEndTarefa = document.createElement('button')
        btnEndTarefa.setAttribute('class', 'btn btn-light')
        btnEndTarefa.textContent = "FinalizarTarefa"
        btnEndTarefa.onclick = function(event) {
            // let cardRemove = event.target.parentNode.parentNode 
            // cardRemove.remove()
            // outra opção de selecionar o elemento. através da relação de pai/filho
            divCard.remove()
            //essa é mais direta, uma vez que já criamo
        }

        divCard.appendChild(divCardBody)
        divCardBody.appendChild(pConteudo)
        divCardBody.appendChild(btnEndTarefa)

        container.appendChild(divCard)
        inputTextoTarefa.value = ""
    }   else {
        alert('Você precisa digitar uma tarefa primeiro.')
    }
    }


addTarefa.onclick = addTask
//on click: atribuicao do metodo


inputTextoTarefa.onkeyup = function(event) {

    if(event.key === "Enter" ) {
        addTask()
}
}
