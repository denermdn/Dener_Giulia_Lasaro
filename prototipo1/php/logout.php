<?php
session_start();

if(empty($_SESSION)){
    header("Location: ../index.html?msgErro=Você precisa estar logado para realizar logout.");
}
else {
    session_destroy();
    header("Location: ../index.html?msgSucesso=Logout realizado com sucesso.");
}
die();

?>