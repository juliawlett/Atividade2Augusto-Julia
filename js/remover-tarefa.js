let tabela = document.querySelector('#tabela-devs');

tabela.addEventListener('click', function (evento){
  if (evento.target.classList.contains('info-delete')) {
    evento.target.parentNode.classList.add('fadeOut');

    setTimeout(function(){
      evento.target.parentNode.remove();
    }, 500);
  }
});

