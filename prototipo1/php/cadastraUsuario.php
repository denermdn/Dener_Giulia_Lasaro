<?php


echo '<pre>';
print_r($_POST);
echo '</pre>';

require_once ('connect.php');
//require('connect.php');


try{
    // $nome = $_POST['nome'];
    // $email = $_POST['email'];
    // $senha = md5($_POST['senha']);
    // $dataNascimento = $_POST['dataNascimento'];

    echo "teste";

    $sql = "INSERT INTO tb_user (user_name, user_email, user_nascimento, user_senha) VALUES (:nome, :email, :dataNascimento, :senha)";


    $stmst = $conn->prepare($sql);

    $dados = array(
        ':nome' => $_POST['nome'],
        ':email' => $_POST['email'],
        ':dataNascimento' => $_POST['dataNascimento'],
        ':senha' => md5($_POST['senha'])
    );
    
    if($stmst->execute($dados)){
        header("Location: ../login.php");
    }
    
    // if(!$query) {
    //     echo $sql->errno;
    // }
    // else {
    //     header('Location: ../cadastro.php');
    // }    
} catch (PDOException $e) {
    echo $e->getMessage();
}

?>