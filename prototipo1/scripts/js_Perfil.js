window.onload = function () {
var canvas_box_cenario = document.getElementById("box_cenario");
var context_box_cenario = canvas_box_cenario.getContext("2d");

var canvas_box_canhao = document.getElementById("box_canhao");
var context_box_canhao = canvas_box_canhao.getContext("2d");

var canvas_box_projetil = document.getElementById("box_projetil");
var context_box_projetil = canvas_box_projetil.getContext("2d");


cenario.desenhar(context_box_cenario,1);
}