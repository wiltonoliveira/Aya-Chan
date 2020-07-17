function preload(){
    imagemCenarioPrimeiraFase = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemGameOver = loadImage('imagens/assets/meme.png');
    imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

    somIntro = loadSound('sons/somIntro.mp3');
    somDoJogo = loadSound('sons/primeira_fase.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somGameOver = loadSound('sons/game_over.mp3');
    somHit = loadSound('sons/somHit.mp3');

    fita = loadJSON('fita/fita.json');
}