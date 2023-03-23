let tabela = document.querySelector('.info-delete')

tabela.addEventListener('dblclick', function (evento){
    evento.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        evento.target.parentNode.remove()
    }, 500)
    
})