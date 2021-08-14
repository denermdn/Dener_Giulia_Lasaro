<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="estilos/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <title>TBPT - Ranking</title>
</head>

<body  class="principal">
    <div class="tela-escura" id="ranking">
        <h1 id="title_rank">
            RANKING</h1> <br>
        <div style="margin-top: -2vw;">
            <table style="width: 100%; height: 100%; font-family: 'Bebas Neue', cursive; text-align: center; font-size: 100%"
                border="0">
                 <tr>
                    <td>Posição</td>
                    <td>Nome</td>
                    <td>Pontuação</td>
                </tr>
                
                <?php 
                require_once ('php/connect.php');
                session_start();
                $query = "select user_name from (select row_number() over() as id, t.*
                from (select * from tb_user order by user_pont_total desc) t) t2 where id=:id";

                $queryy = "select  user_pont_total from (select row_number() over() as id, t.*
                from (select * from tb_user order by user_pont_total desc) t) t2 where id=:id";

                // echo "<tr>
                // <td>Posição</td>
                // <td>Nome</td>
                // <td>Pontuação</td>
                // </tr>"; 

                for($j=1; $j<=10; $j+=1){

                    if($j==1)
                    echo "<tr style=\"background: #ffbf00\">";
                    else if($j==2)
                    echo "<tr style=\"background: #C0C0C0\">";
                    else if($j==3)
                    echo "<tr style=\"background: #bf8970\">";
                    else
                    echo "<tr>";

                    echo "<td>";
                    echo $j;
                    echo "</td>
                    <td>";
                    $i=array(
                        ':id' => $j
                );
                $stmt=$conn->prepare($query);
                $stmt->execute($i);
                $result = $stmt->fetchColumn();
                echo $result;
                
                echo "</td>
                <td>";
                $stmt=$conn->prepare($queryy);
                $stmt->execute($i);
                $result = $stmt->fetchColumn();
                echo $result;
                echo "</td>
                </tr>";
            }
                // $result = $conn->query($query);
                // $row = $result->fetchColumn(0);
                // echo $row;
                // echo "</td>
                // <td>";
                // $result = $conn->query($queryy);
                // $row = $result->fetchColumn(0);
                // echo $row;
                
                ?>
            </table>
            <br><br>
        </div>
        <a href="./index.html"><button>Voltar ao menu</button></a>
    </div>
</body>

</html>