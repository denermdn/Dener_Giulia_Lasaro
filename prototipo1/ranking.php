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

<body class="principal">
    <div class="tela-escura" id="ranking">
        <h1 id="title_rank">
            RANKING</h1> <br>
        <div style="margin-top: -2vw;">
            <table id="rank_">
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
    <div id="modal">
        <table id="table_modal">
            <tr>
                <td class="modal_td1">Nome:</td>
            </tr>
            <tr>
                <td class="modal_td2" id="u_name"></td>
            </tr>
            <tr>
                <td class="modal_td1">Pontuação : </td>
            </tr>
            <tr>
                <td class="modal_td2" id="u_pont_total"></td>
            </tr>
            <tr>
                <td class="modal_td1">Data de Nascimento : </td>
            </tr>
            <tr>
                <td class="modal_td2" id="u_nascimento"></td>
            </tr>
            <tr>
                <td class="modal_td1">Contato : </td>
            </tr>
            <tr>
                <td class="modal_td2" id="u_email"></td>
            </tr>
        </table>
    </div>
    <script>
        function janela_info(idu) {
            if (document.getElementById("modal").style.display == "block") {
                document.getElementById("modal").style.display = "none";
            } else {
                var result = document.getElementById(idu + '_').textContent;
                result = result.split("#", 5);
                document.getElementById("u_name").textContent = result[1];
                document.getElementById("u_pont_total").textContent = result[2];
                document.getElementById("u_nascimento").textContent = result[4];
                document.getElementById("u_email").textContent = result[3];
                document.getElementById("modal").style.display = "block";
            }
        }
    </script>
</body>

</html>