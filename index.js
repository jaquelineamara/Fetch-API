const consultaUsuario = async (evento) => {
    evento.preventDefault();
    const campoMensagem = document.getElementById('mensagem');
    const campoAvatar = document.getElementById('avatar');

    //Obtem URL
    const usuario = document.getElementById('usuario').value;
    const url = `https://api.github.com/users/${usuario}`;

    //Executar a consulta a API do github
    const resposta = await fetch(url);
    console.log(resposta);

    if (!resposta.ok) {
        campoMensagem.innerHTML = 'Não Encontrado';
        campoAvatar.setAttribute('src', '');
        return;
    }
    
    const resultado = await resposta.json();

    //Exibir
    if(!resultado.name){
        campoMensagem.innerHTML = resultado.login;
    }else{
        campoMensagem.innerHTML = resultado.name;
    }
    
    campoAvatar.setAttribute('src', resultado.avatar_url);
}

   document.addEventListener('DOMContentLoaded',() => {
    const botaoConsultar = document.getElementById('consultar');
    botaoConsultar.addEventListener('click',consultaUsuario);
   });