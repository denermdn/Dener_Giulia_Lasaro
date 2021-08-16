<?php

require_once('connect.php');
    try{

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
        
        if($_POST['who']=='rank')
        header("Location: /Dener_Giulia_Lasaro/prototipo1/ranking.php");
        else if($_POST['who']=='perfil')
        header("Location: /Dener_Giulia_Lasaro/prototipo1/perfil.php");
        else if($_POST['who']=='tsair')
        header("Location: /Dener_Giulia_Lasaro/prototipo1/php/logout.php");
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>