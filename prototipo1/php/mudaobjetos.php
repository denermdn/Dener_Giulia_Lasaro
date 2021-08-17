<?php

    require_once('connect.php');
    session_start();

    $_SESSION['canhao']=$_POST['idCanhao'];
    $_SESSION['cenario']=$_POST['idCenario'];
    $_SESSION['projetil']=$_POST['idProjetil'];

    header("Location: ../main.php?");

?>