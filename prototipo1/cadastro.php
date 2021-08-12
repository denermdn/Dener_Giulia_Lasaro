<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="estilos/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">
    <title>TBPT - Login</title>

</head>

<body>
    <div class="tela-escura" id="login">
        <h1>Cadastro</h1> <br>
        <form  method="POST" action="./login.php">
        <input type="text" id="nome" placeholder="Nome" name="nome">
        <br><br>
        <input type="date" name="dataNascimento" id="dataNascimento" required="required">
        <br><br>
        <input type="text" id="email" placeholder="E-mail" name="email">
        <br><br>
        <input type="text" id="campoConfEmail" placeholder="Confirmação do e-mail">
        <br><br>
        <input type="password" id="senha" placeholder="Senha" name="senha">
        <br><br>
        <input type="password" id="campoConfSenha" placeholder="Confirmação de Senha">
        <br><br>
        <button type="submit" id="btnCadastrar" name="btnCadastrar">Cadastrar</button>
        <br><br>            
        </form>

        <a href="./login.html"><button>Voltar à tela de login</button></a>
    </div>


    <!-- <script src="scripts/requisicaoCadastro.js"></script> -->

</body>

</html>