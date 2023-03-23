let botaoAdicionar = document.querySelector('#adicionar-tarefa')
//adicionando evento ao botão click
botaoAdicionar.addEventListener('click', function (evento){
    //impede a natureza padrão do elemento
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let tarefa = obtemTarefaDoForm(form)

    adicionaTarefaNaTabela(tarefa)

    form.reset()
})


function obtemTarefaDoForm(form){
    let tarefa = {
        responsalvel: form.nome.value,
        status: form.status.value,
        descricao: form.descricao.value,
        criado_em: form.criada_em.value,
        previsao_em: form.previsao_em.value,
        info_delete: 'Deletar'
        
        
    }

    return tarefa
}

function adicionaTarefaNaTabela(tarefa){
    let tarefaTr = montarTr(tarefa)
    let tabela = document.querySelector('#tabela-devs')
    tabela.appendChild(tarefaTr)
}

function montarTr(tarefa){
    //createElemete cria um novo elemento de html
    let tarefaTr = document.createElement('tr')
    tarefaTr.classList.add('tarefa')

//     //Fazendo filhos de elemntos html
    tarefaTr.appendChild(montarTd(tarefa.responsalvel, "info-responsavel"))
    tarefaTr.appendChild(montarTd(tarefa.status, "info-status"))
    tarefaTr.appendChild(montarTd(tarefa.descricao, "info-descricao"))
    tarefaTr.appendChild(montarTd(tarefa.criado_em, "info-inicio"))
    tarefaTr.appendChild(montarTd(tarefa.previsao_em, "info-previsao"))
    tarefaTr.appendChild(montarTd(tarefa.info_delete, "info-delete"))

    return tarefaTr
}

function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}