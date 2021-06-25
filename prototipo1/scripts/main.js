var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");


const telaEscura = document.getElementById("tela-escura");
const minhatela = document.getElementById('canvas');
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

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
    campodados.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
    campodados.style.opacity = "0.5";
  }
});

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
//window.close()
const cenario = new Cenarios(9.8, 0, canvas.width, canvas.height);
const canhao = new Canhao(45, 0);
function loop() {
    cenario.desenhar(context);
    canhao.draw(context, (canvas.height - 70));
    document.addEventListener("keydown", canhao.move());
    canhao.lancarProjetil();
    requestAnimationFrame(loop);
    canhao.rodar(context);
}

loop();