<?php


require_once ('connect.php');


session_start();
if(!empty($_POST)) {
    try{
        $sql = "SELECT USER_ID, USER_EMAIL, USER_NASCIMENTO, USER_NAME, USER_PONT_TOTAL, USER_ULTM_FASE, USER_ESTRELAS FROM TB_USER WHERE USER_EMAIL = :email and USER_SENHA = :senha";

        $stmt = $conn->prepare($sql);

        $dados = array(
            ':email' => $_POST['email'],
            ':senha' => md5($_POST['senha'])
        );
        
        $stmt->execute($dados);

        $result = $stmt->fetchAll();
        if($stmt->rowCount() == 1){
            $result = $result[0];

            $_SESSION['id'] = $result['user_id'];
            $_SESSION['nome'] = $result['user_name'];
            $_SESSION['email'] = $result['user_email'];
            $_SESSION['nascimento'] = $result['user_nascimento'];
            $_SESSION['pontTotal'] = $result['user_pont_total'];        
            $_SESSION['ultimaFase'] = $result['user_ultm_fase'];
            $_SESSION['estrelasTotal'] = $result['user_estrelas'];
            $_SESSION['id'] = $result['user_id'];
            $_SESSION['canhao']=0;
            $_SESSION['cenario']=0;
            $_SESSION['projetil']=0;

            
            
        header("Location: ../main.php?");

        } 
        else {
            session_destroy();
            header("Location: ../index.html?msgErro=Usuário ou senha incorretos.");
        }
        

        // echo '<pre>';
        // print_r($result);
        // echo '</pre>';



    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
else {
    header("Location: ../login.html?msgErro=Sem Permissão.");
}

die();
