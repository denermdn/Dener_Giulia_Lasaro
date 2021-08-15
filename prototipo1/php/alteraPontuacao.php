<?php


         require_once('connect.php');
         session_start();
         $query="UPDATE TB_USER SET USER_PONT_TOTAL=:pont WHERE USER_EMAIL=:email";

         $stmt=$conn->prepare($query);

        //mudar aqui caso vá adicionar as estrelas à tabela
        $_SESSION['pontTotal']=$_POST['pontosTotal'];
         $mudaPontos = array(
             ':pont' => $_POST['pontosTotal'],
             ':email' => $_POST['emailu']
         );


         $stmt->execute($mudaPontos);

    header("Location: /Dener_Giulia_Lasaro/prototipo1/ranking.php"/*m=".$em*/);
?>