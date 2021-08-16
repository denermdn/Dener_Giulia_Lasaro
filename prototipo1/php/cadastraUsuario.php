<?php


echo '<pre>';
print_r($_POST);
echo '</pre>';

require_once ('connect.php');



try{

    // echo "teste";

    $sql = "INSERT INTO tb_user (user_name, user_email, user_nascimento, user_senha) VALUES (:nome, :email, :dataNascimento, :senha)";


    $stmst = $conn->prepare($sql);

    $dados = array(
        ':nome' => $_POST['nome'],
        ':email' => $_POST['email'],
        ':dataNascimento' => $_POST['dataNascimento'],
        ':senha' => md5($_POST['senha'])
    );
    
    if($stmst->execute($dados)){
        header("Location: ../index.html");
    }
    
} catch (PDOException $e) {
    header("Location: ../cadastro.html?msgErro=Usuário ja cadastrado.");
    // echo $e->getMessage();
}

?>