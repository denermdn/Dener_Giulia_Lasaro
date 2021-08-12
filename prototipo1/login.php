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
        <h1>Login</h1> <br>
        <form  method="POST" action="./php/processaLogin.php">
            <input type="text" name="email" id="email" placeholder="E-mail">
            <br><br>
            <input type="password" name="senha" id="senha" placeholder="Senha">
            <br><br>
            <button type="submit" id="btnLogin" name="btnLogin">Login</button>

            <br><br>
            <button><a href="./cadastro.php">Cadastrar-se</a></button>
        </form>
   </div>
</body>

</html>