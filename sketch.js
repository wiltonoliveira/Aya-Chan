function keyPressed(){
  jogo.keyPressed(key);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(40);
    jogo = new Jogo();
    telaInicial = new TelaInicial();
    jogo.setup();
    somIntro.play();
    cenas = {
      jogo:jogo,
      telaInicial:telaInicial
    };
    botaoGerenciador = new BotaoGerenciador('Iniciar', width /2 , height / 2);
}

  function draw() {
    cenas[cenaAtual].draw();
  }

