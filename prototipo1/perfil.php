<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="estilos/style.css">
    <title>Perfil</title>
</head>

<body id="corpo_perfil" overflow="nome">
    <h1 id="title_perfil">
        <span style="color:orangered">P</span>E<span style="color:chartreuse">R</span>F<span style="color:chartreuse">I</span><span style="color:orangered">L</span>
    </h1>
    <div id="area-principal">
        <div class="containers_top">
            <h3 class="titulo_box">Meus Dados</h3>
            <div id="box_form" >
                <table >
                    <tr>
                        <td class="nome_linha">Nome: </td>
                    </tr>
                    <tr>
                        <td class="dados_usuario"><?php echo $_SESSION['nome'] ?></td>

                    </tr>
                    <tr>

                        <td class="nome_linha">Data de Nascimento:</td>
                    </tr>
                    <tr>

                        <td class="dados_usuario"><?php echo date("d/m/Y", strtotime($_SESSION['nascimento'])) ?></td>
                    </tr>
                    <tr>

                        <td class="nome_linha">E-mail:</td>
                    </tr>
                    <tr>
                        <td class="dados_usuario"><?php echo $_SESSION['email'] ?></td>
                    </tr>
                </table>
                <div class="botoes_navegacao"> <input type="button" value="Editar "></input></div>
            </div>
        </div>
        <div class="containers_top">
            <h3 class="titulo_box">Estrelas</h3>
                <?php echo $_SESSION['estrelasTotal']?>
            <div class="box">
            </div>
        </div>
        <div class="containers_top">
            <h3 class="titulo_box">Pontuação</h3>
            <div class="box">
                <?php echo $_SESSION['pontTotal'] ?>
            </div>
        </div>
        <div class="containers">
            <h3 class="titulo_box">Cenário</h3>
            <div class="box">
                <canvas class="canvas_perfil" id="box_cenario"></canvas>
                <div class="botoes_navegacao">
                    <input type="button" onclick="trocaCenario(-1);" value="<< Voltar"></input>
                    <!-- <input type="button" onclick="trocaCenario(-1);" value="Selecionar" disabled></input> -->
                    <input type="button" onclick="trocaCenario(1);" value="Próximo >>"></input>
                </div>
                <!-- <img src="./imagens/cenario0.png" width="100%"> -->
            </div>
        </div>
        <div class="containers">
            <h3 class="titulo_box">Canhão</h3>
            <div class="box">
                <canvas class="canvas_perfil" id="box_canhao"></canvas>
                <!-- <img src="./imagens/cannon.png" height="100%"> -->
                <div class="botoes_navegacao">
                    <input type="button" onclick="trocaCanhao(-1);" value="<< Voltar"></input>
                    <!-- <input type="button" onclick="trocaCenario(-1);" value="Selecionar" disabled></input> -->
                    <input type="button" onclick="trocaCanhao(1);" value="Próximo >>"></input>
                </div>
            </div>
        </div>
        <div class="containers">
            <h3 class="titulo_box">Projéteis</h3>
            <div class="box">
                <canvas class="canvas_perfil" id="box_projetil"></canvas>
                <div class="botoes_navegacao">
                    <input type="button" onclick="trocaProjetil(-1);" value="<< Voltar"></input>
                    <!-- <input type="button" onclick="trocaCenario(-1);" value="Selecionar" disabled></input> -->
                    <input type="button" onclick="trocaProjetil(1);" value="Próximo >>"></input>
                </div>
            </div>
        </div>
        <div class="botao_perfil">
            <a href="./main.php"><input type="button" value="Menu Inicial"></input></a>
        </div>
    </div>
    <script src="scripts/js_Perfil.js"></script>
</body>

</html>