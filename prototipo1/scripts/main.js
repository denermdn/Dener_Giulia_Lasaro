var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

var canvas_2 = document.getElementById("canvas_c")
canvas_2.width = window.innerWidth;
canvas_2.height = window.innerHeight;
var context_2 = canvas_2.getContext("2d");

var context_3 = document.getElementById("canvas_p")
context_3.width = window.innerWidth;
context_3.height = window.innerHeight;
var context_3 = context_3.getContext("2d");

const telaEscura = document.getElementById("tela-escura");
const minhatela = document.getElementById('canvaswrap');
const campodados = document.getElementById('campodados');
const exitb = document.getElementById('exitbutton');
const tmenu = document.getElementById('menu'); 
const confirme = document.getElementById('confirmexit');
const gmenu = document.getElementById('modeselect');
telaEscura.style.display = "block";
tmenu.style.display = "block";

document.addEventListener("click", (event) => {
    if (event.target.matches("#playbutton")) {
        telaEscura.style.display = "none";
        minhatela.style.display = "block";
        campodados.style.display = "block";
        exitb.style.display = "block";
    }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#exitbutton")) {
      telaEscura.style.display= "block";
      tmenu.style.display= "none";
      confirme.style.display= "block";

  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#confirmar")) {
      confirme.style.display = "none";
      tmenu.style.display = "block";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#desconfirmar")) {
      confirme.style.display = "none";
      telaEscura.style.display = "none";
  }
});

// document.addEventListener("mouseover", (event) => {
//   if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
//     campodados.style.opacity = "1";
//   }
// });

// document.addEventListener("mouseout", (event) => {
//   if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
//     campodados.style.opacity = "0.5";
//   }
// });

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("#exitbutton")) {
    exitb.style.backgroundColor = "red";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("#exitbutton")) {
    exitb.style.backgroundColor = "gray";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#gamemode")) {
      tmenu.style.display="none";
      gmenu.style.display="block";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoLivre")) {
      telaEscura.style.display = "none";
      gmenu.style.display="none";
      minhatela.style.display = "block";
      campodados.style.display = "block";
      exitb.style.display = "block";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#gsair")) {
      tmenu.style.display="block";
      gmenu.style.display="none";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#tsair")) {
      // window.close();
  }
});

const cenario = new Cenarios(9.8, 0, canvas.width, canvas.height);
const canhao = new Canhao(0);
window.addEventListener("keydown", canhao.move);
function loop() {
    cenario.desenhar(context);
    canhao.draw(context);
    canhao.rodar(context_2);
    // canhao.lancarProjetil();
    requestAnimationFrame(loop);
}
loop();
