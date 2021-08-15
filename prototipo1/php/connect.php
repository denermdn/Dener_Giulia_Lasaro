<?php
try{ 

    $conn = new PDO('pgsql:host=localhost;port=5432;dbname=tbpt', 'tbpt_execute','engsoft2021', [PDO::ATTR_ERRMODE => PDO:: ERRMODE_EXCEPTION]);
    echo "database conectado";

    
    }catch (PDOException $e){

    die($e->getMessage()) ;
} 

?>