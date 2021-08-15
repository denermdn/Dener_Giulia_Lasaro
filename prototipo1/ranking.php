<!DOCTYPE html>
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
            <table style="width: 100%; height: 100%; font-family: 'Bebas Neue', cursive; text-align: center;"
                border="0">
                <?php
                include_once('./php/auxiliar.php');
                montaTabela();
                ?>
                </tr>
            </table>
            <br><br>
        </div>
        <a href="./main.php"><button>Voltar ao menu</button></a>
    </div>
</body>

</html>