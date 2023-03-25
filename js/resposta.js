const form = document.querySelector('#form-adiciona');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome');
    const status = document.querySelector('#status');
    const descricao = document.querySelector('#descricao');
    const criada_em = document.querySelector('#criada_em');
    const previsao_em = document.querySelector('#previsao_em');
    const mensagensErro = document.querySelector('#mensagens-erro');

    mensagensErro.innerHTML = '';

    let camposPreenchidos = true;

    if(nome.value.trim() === '') {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'O campo responsável deve ser preenchido';
        mensagensErro.appendChild(mensagem);
        camposPreenchidos = false;
    }

    if(status.value.trim() === '') {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'O campo status deve ser preenchido';
        mensagensErro.appendChild(mensagem);
        camposPreenchidos = false;
    }

    if(descricao.value.trim() === '') {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'O campo descrição deve ser preenchido';
        mensagensErro.appendChild(mensagem);
        camposPreenchidos = false;
    }

    if(criada_em.value.trim() === '') {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'O campo data de criação deve ser preenchido';
        mensagensErro.appendChild(mensagem);
        camposPreenchidos = false;
    }

    if(previsao_em.value.trim() === '') {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'O campo previsão de término deve ser preenchido';
        mensagensErro.appendChild(mensagem);
        camposPreenchidos = false;
    }

    if(camposPreenchidos) {
        // Restante do código para adicionar a tarefa
        
    }
});
