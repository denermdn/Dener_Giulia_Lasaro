 <?php
	session_start();
	?>
 <!DOCTYPE html>
 <html lang="pt-br">

 <head>
 	<meta charset="UTF-8">
 	<link type="text/css" rel="stylesheet" href="estilos/style.css" />
 	<link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">
 	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
 	<title>TBPT</title>
 </head>

 <body class="principal">
 	<div id="exitbutton">X</div>
 	<div id="pontuacao">Pontos : 0</div>
 	<div id="estrelas" style="display: none">Estrelas : 0 </div>
 	<div class="container" id="alerta-pontuacao">
 		<div id="texto-pontuacao">Parabéns!</div>
 		<div id="texto-pontuacao2">Voce ganhou :</div>
 		<div id="texto-estrelas" style="font-size: 4.5vw; color: gold;">🟊🟊🟊</div>
 		<button class="botoes_sair" id="reset-fase">Next Level</button>
 		<button class="botoes_sair" id="voltar-menu">Menu</button>
 	</div>
 	<div id="movimentacao">Movimente o canhão com as setas direcionais do teclado (esquerda e direita) e clique em
 		"LANÇAR"" quando tiver terminado de inserir as informações. </div>
 	<div id="sobre">
 		<a href="https://github.com/denermdn/Dener_Giulia_Lasaro" target="_blank"><button>Sobre</button></a>
 	</div>
 	<div id="dica">Dica
 	</div>
 	<div class="cd" id="campodados">
 		<table id="tabeladados">
 			<tr>
 				<td class="tabdados">Velocidade (m/s):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo1" id="campo1" value="100" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Vox (m/s):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo2" id="campo2" value="100" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Voy (m/s):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo3" id="campo3" value="0" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Gravidade (m/s^2):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo4" id="campo4" value="9.80" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Tempo (s):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo5" id="campo5" value="0" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Ângulo (graus):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo6" id="campo6" value="0" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Alcance Horizontal (m)</td>
 				<td class="tabdados"> <input class="inputdados" name="campo7" id="campo7" value="0" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Altura Máxima (m):</td>
 				<td class="tabdados"> <input class="inputdados" name="campo8" id="campo8" value="0" maxlength="10" />
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados">Marcar Trajetória</td>
 				<td class="tabdados"><input class="inputdados" id="trajet" style="cursor: pointer;" type="checkbox" id="trajetoria" name="traj" checked>
 				</td>
 			</tr>
 			<tr>
 				<td class="tabdados" colspan="2" style="text-align: center;">
 					<button id="botaolancar" type="submit">LANÇAR</button>
 				</td>
 			</tr>
 		</table>
 	</div>
 	</div>
 	<div id="tela-escura">
 		<div>
 			<h1 class="titulo">Menu</h1>
 		</div>
 		<div class="container" id="menu">
 			<table>
 				<tr>

 					<form method="POST" action="/Dener_Giulia_Lasaro/prototipo1/php/alteraPontuacao.php" name="formPontos">
 						<input type="hidden" name="pontosTotal" id="pontosTotal" value="0">
 						<input type="hidden" name="estrelasT" id="estrelasT" value="0">
 						<!-- <input type="hidden" name="emailu" id="emailu" value=""> -->
 						<input type="hidden" name="who" id="who" value="">
 					</form>

 					<td id="perfil" style="background-color: red;" onclick="whosub(this.id)">Perfil</td>
 					<td id="rank" style="background-color: green;" onclick="whosub(this.id)">Ranking
 					</td>
 				</tr>
 				<tr>
 					<td id="gamemode" style="background-color: rgb(255, 255, 0);">Modos
 						<br>de<br>Jogo
 					</td>
 					<td id="tsair" style="background-color: rgb(0, 0, 255);">Sair</td>
 				</tr>
 			</table>
 		</div>
 		<div class="container" id="modeselect">
 			<table>
 				<tr>
 					<td id="introducao" style="background-color: rgb(238, 22, 155);">Introdução</td>
 					<td id="modoLivre" style="background-color:  rgb(0, 255, 76);">Modo<br>Livre</td>
 				</tr>
 				<tr>
 					<td id="modoCompetitivo" style="background-color: rgb(0, 160, 253);">Modo
 						<br>Competitivo
 					</td>
 					<td id="voltar" style="background-color: rgb(236, 72, 72);">Voltar</td>
 				</tr>
 			</table>
 		</div>

 		<div class="container" id="playselect">
 			<table>
 				<tr>
 					<td id="faseFacil" style="background-color: rgb(6, 253, 18);">Fácil</td>
 					<td id="faseMedia" style="background-color: rgb(0, 102, 255);">Médio</td>
 				</tr>
 				<tr>
 					<td id="faseDificil" style="background-color: rgb(253, 10, 132);">Difícil
 					</td>
 					<td id="exitp" style="background-color: rgb(255, 230, 0) ;">Exit</td>
 				</tr>
 			</table>
 		</div>
 		<div class="container" id="confirmexit">Deseja Sair?
 			<br>
 			<br>
 			<button class="botoes_sair" id="confirmar">Sim</button>
 			<button class="botoes_sair" id="desconfirmar">Não</button>
 		</div>

 	</div>
 	<div>
 		<div id="canvaswrap">
 			<canvas id="canvas"></canvas>
 			<canvas id="canvas_c"></canvas>
 			<canvas id="canvas_p"></canvas>
 			<canvas id="canvas_b"></canvas>
 		</div>
 	</div>
 	<script src="scripts/cenario.js"></script>
 	<script src="scripts/canhao.js"></script>
 	<script src="scripts/projetil.js"></script>
 	<script src="scripts/posicao.js"></script>
 	<script src="scripts/alvo.js"></script>
 	<script src="scripts/usuario.js"></script>
 	<script src="scripts/equacoes.js"></script>
 	<script>
 		var pontos = <?php echo $_SESSION['pontTotal']; ?>;

 		var estrelas = <?php echo $_SESSION['estrelasTotal']; ?>;

 		var idCanhao = <?php echo $_SESSION['canhao']; ?>;
 		var idCenario = <?php echo $_SESSION['cenario']; ?>;
 		var idProjetil = <?php echo $_SESSION['projetil']; ?>;
 	</script>
 	<script src="scripts/jogar.js">
 	</script>

 	<script>
 		document.getElementById('pontosTotal').value = pontos;
 		document.getElementById('estrelasT').value = estrelas;

 		function whosub(who_sub) {
 			document.getElementById('who').value = who_sub;
 			document.formPontos.submit();
 		}
 	</script>

 </body>

 </html>