<?php


require_once ('connect.php');
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// //require('connect.php');

// die();

try{
    $sql = "SELECT USER_EMAIL, USER_NASCIMENTO, USER_NAME, USER_PONT_TOTAL, USER_ULTM_FASE FROM TB_USER WHERE USER_EMAIL = :email and USER_SENHA = :senha";

    $stmt = $conn->prepare($sql);

    $dados = array(
        ':email' => $_POST['email'],
        ':senha' => md5($_POST['senha'])
    );
    
    $stmt->execute($dados);

    $result = $stmt->fetchAll();
    if($stmt->rowCount() == 1){
        $result = $result[0];

        
    } 
    else {

    }
    

    echo '<pre>';
    print_r($result);
    echo '</pre>';


    // if($stmt->execute($dados)){
    //     header("Location: ../index.html");
    // }

} catch (PDOException $e) {
    echo $e->getMessage();
}

// try{
//     // $nome = $_POST['nome'];
//     // $email = $_POST['email'];
//     // $senha = md5($_POST['senha']);
//     // $dataNascimento = $_POST['dataNascimento'];

//     echo "teste";

//     $sql = "INSERT INTO tb_user (user_name, user_email, user_nascimento, user_senha) VALUES (:nome, :email, :dataNascimento, :senha)";


//     $stmst = $conn->prepare($sql);

//     $dados = array(
//         ':nome' => $_POST['nome'],
//         ':email' => $_POST['email'],
//         ':dataNascimento' => $_POST['dataNascimento'],
//         ':senha' => md5($_POST['senha'])
//     );
    
//     if($stmst->execute($dados)){
//         header("Location: ../index.html");
//     }
    
//     // if(!$query) {
//     //     echo $sql->errno;
//     // }
//     // else {
//     //     header('Location: ../cadastro.php');
//     // }    
// } catch (PDOException $e) {
//     echo $e->getMessage();
// }

 ?>