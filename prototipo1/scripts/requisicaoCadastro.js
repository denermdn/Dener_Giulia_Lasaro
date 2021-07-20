

const btnCadastrar = document.getElementById("btnCadastrar");
btnCadastrar.addEventListener("click", async e=> {
    e.preventDefault();
    
    userName = document.getElementById("campoNome").value;
    if (document.getElementById("campoEmail").value == document.getElementById("campoConfEmail").value){
        userLogin = document.getElementById("campoEmail").value;
    }
    else{
        alert("Os e-mails não coincidem, digite novamente");
    }
    if (document.getElementById("campoSenha").value == document.getElementById("campoConfSenha").value){
        userSenha = document.getElementById("campoSenha").value;
    }
    else{
        alert("As senhas não coincidem, digite novamente");
    }

    const form = document.querySelector('form');
    const data = new FormData(form);

    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/user");
    request.setRequestHeader("Content-Type", "application/json");
    //request.setRequestHeader('Accept', '/');


    request.onload = function () {
        console.log(JSON.parse(this.responseText))
      }
    
      request.onerror = function () {
        console.log('erro ao executar a requisição')
    }
    console.log(userName)
    console.log(data)
      //request.send(data);
});