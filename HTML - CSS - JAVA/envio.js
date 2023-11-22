var parametro = new URLSearchParams (window.location.search)

nome = parametro.get('nome')
telefone = parametro.get('telefone')
email = parametro.get('email')
mensagem = parametro.get('mensagem')




document.getElementById('spanNome').innerHTML = '<h1>'+ nome + '<h1>';
document.getElementById('spanTelefone').innerHTML = '<h1>'+ telefone + '<h1>';
document.getElementById('spanEmail').innerHTML = '<h1>'+ email + '<h1>';
document.getElementById('spanMensagem').innerHTML = '<h1>'+ mensagem + '<h1>';