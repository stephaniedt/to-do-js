let addTarefa = document.querySelector(".addTarefa")
let container = document.querySelector(".container")
let inputTextoTarefa = document.querySelector("#textoTarefa")

// addTarefa.addEventListener('click', function(){
//     alert("Tarefa adicionada à lista (y)")
// });
// //funcao como parametro da funcao.


addTarefa.onclick = function() {
    
    let divCard = document.createElement('div');
    divCard.setAttribute('class','card text-white bg-info m-3');

    let divCardBody = document.createElement('div')
    divCardBody.setAttribute('class','card-body')
    
    let textoTarefa = inputTextoTarefa.value

    let pConteudo = document.createElement('p')
    pConteudo.setAttribute('class','card-text')
    pConteudo.textContent = textoTarefa;
    
    let btnAddTarefa = document.createElement('button')
    btnAddTarefa.setAttribute('class', 'btn btn-light')
    btnAddTarefa.textContent = "FinalizarTarefa"


    divCard.appendChild(divCardBody)
    divCardBody.appendChild(pConteudo)
    divCardBody.appendChild(btnAddTarefa)

    container.appendChild(divCard)
    inputTextoTarefa.value = ""

}
//on click: atribuicao do metodo
