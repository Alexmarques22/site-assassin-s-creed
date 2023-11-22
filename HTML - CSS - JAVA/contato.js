const formulario = document.getElementById('meuFormulario')// variavel que nao pode ser alterada

formulario.addEventListener('submit',function (event) {
    event.preventDefault() //DESLIGANDO O EVENTO PADÃO DO FORMULARIO
   
    


    
    var nome = document.getElementById('nome').value
    var telefone = document.getElementById('telefone').value
    var email = document.getElementById('email').value
    var mensagem = document.getElementById('mensagem').value
    
    
    var nomecodificado = encodeURIComponent(nome)
    var telefonecodificado = encodeURIComponent(telefone)
    var emailcodificado = encodeURIComponent(email)
    var mensagemcodificado = encodeURIComponent(mensagem)
    
    window.location.href = 'envio.html' +
    
    '?nome=' + nomecodificado +
    '&telefone=' + telefonecodificado +
    '&email=' + emailcodificado +
    '&mensagem=' + mensagemcodificado     
    
    
})
