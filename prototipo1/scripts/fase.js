class Fase {
    constructor() {
        this.cenario = new Cenarios();
        this.projetil = new Projetil();
        this.canhao = new Canhao();
        this.alvo = new Alvo();
        this.pontuacaoTotal = 0;
        this.estrelas = 0;
    }
    validaResposta(resposta){}
    calcularPontuacao(){}
    calcularEstrelas(){}
}