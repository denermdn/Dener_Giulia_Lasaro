<?php


require_once ('connect.php');
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

session_start();
if(!empty($_POST)) {
    try{
        $sql = "SELECT USER_ID, USER_EMAIL, USER_NASCIMENTO, USER_NAME, USER_PONT_TOTAL, USER_ULTM_FASE FROM TB_USER WHERE USER_EMAIL = :email and USER_SENHA = :senha";

        $stmt = $conn->prepare($sql);

        $dados = array(
            ':email' => $_POST['email'],
            ':senha' => md5($_POST['senha'])
        );
        
        $stmt->execute($dados);

        $result = $stmt->fetchAll();
        if($stmt->rowCount() == 1){
            $result = $result[0];

            $_SESSION['nome'] = $result['user_name'];
            $_SESSION['email'] = $result['user_email'];
            $_SESSION['nascimento'] = $result['user_nascimento'];
            $_SESSION['pontTotal'] = $result['user_pont_total'];        
            $_SESSION['ultimaFase'] = $result['user_ultm_fase'];
            $_SESSION['id'] = $result['user_id'];

            //$em=$_SESSION['id'];
            
        header("Location: ../main.php?"/*m=".$em*/);

        } 
        else {
            session_destroy();
            header("Location: ../index.html?msgErro=Usuário ou senha incorretos.");
        }
        

        echo '<pre>';
        print_r($result);
        echo '</pre>';



    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
else {
    header("Location: ../index.html?msgErro=Sem Permissão.");
}

 ?>