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
        <table>
            <tr>
                <td id="u_name">Nome : </td>
            </tr>
            <tr>
                <td id="u_pont_total">Pontuação : </td>
            </tr>
            <tr>
                <td id="u_nascimento">Data de Nascimento : </td>
            </tr>
            <tr>
                <td id="u_email">Contato : </td>
            </tr>
        </table>
    </div>
    <script>

        function janela_info(idu) {//Essa função tem coisa a mais só pra testar
            console.log("Chegou aqui");

            if (document.getElementById("modal").style.display == "block") {
                document.getElementById("modal").style.display = "none";
            } else {
                
                
                var result = document.getElementById(idu+'_').textContent;
                result = result.split(" ",5);
                document.getElementById("u_name").textContent ='Nome : '+ result[1];
                document.getElementById("u_pont_total").textContent ='Pontuação : '+ result[2];
                document.getElementById("u_nascimento").textContent ='Data de Nascimento : '+ result[4];
                document.getElementById("u_email").textContent ='Contato : '+ result[3];

                
                

                
                document.getElementById("modal").style.display = "block";
            }
        }
    </script>

</body>
</html>