<?php
try{ 
    // $mysqli = mysqli_connect("localhost", "tbpt_execute", "engsoft2021", "tbpt");
    $conn = new PDO('pgsql:host=localhost;port=5432;dbname=tbpt', 'tbpt_execute','engsoft2021', [PDO::ATTR_ERRMODE => PDO:: ERRMODE_EXCEPTION]);
    //$conn->exec('SET CHARSET utf8');
    echo "database conectado";

    
    }catch (PDOException $e){
    // report error message
    die($e->getMessage()) ;
} 

?>