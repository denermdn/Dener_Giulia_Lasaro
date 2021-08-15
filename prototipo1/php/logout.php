<?php
session_start();

if(empty($_SESSION)){
    header("Location: ../login.html?msgErro=Você precisa estar logado para realizar logout.");
}
else {
    session_destroy();
    header("Location: ../login.html?msgSucesso=Logout realizado com sucesso.");
}
die();

?>