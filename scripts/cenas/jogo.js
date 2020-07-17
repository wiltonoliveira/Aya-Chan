class Jogo{
    constructor(){
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup(){
        cenario = new Cenario(imagemCenarioPrimeiraFase, 3);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30,110, 135, 220, 270);
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 60, 60, 104, 104, 8);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width *2, 0, 200, 200, 400, 400, 8)
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 8)

        inimigos.push(inimigo);
        inimigos.push(inimigoTroll);
        inimigos.push(inimigoVoador);
      }
    
    //O jogador não deve segurar a tecla pulo, por isso essa função está fora do draw()
      keyPressed(key){
      if(key === 'ArrowUp' || key === 'w' || key === 'W'){
          personagem.pula();
          somDoPulo.play();
        }
     }


    draw() {
        cenario.exibe();
        cenario.move();

        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();
    
        personagem.exibe();
        personagem.aplicaGravidade();

        //Esquerda e direta são movimentos os quais o jogador pode segurar a tecla,
        //por isso estão dentro do Draw enquanto o pulo está fora
        //os valores 65 e 68 correspondem as teclas A e D segundo o JavaScript
        //esses valores podem ser consultados no site http://keycode.info/
        if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
          personagem.andaTras();
        }
        if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
          personagem.andaFrente();
        }

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;

          inimigo.exibe();
          inimigo.move();
    
          if(inimigoVisivel){
            this.indice++;
            inimigo.aparece();
            if(this.indice > this.mapa.length - 1){
              this.indice = 0;
            }
          }
    
          if(personagem.isColidindo(inimigo)){
            vida.perdeVida();
            if(vida.vidas === 0){
              //image(imagemGameOver, 0, 100, 700, 500);
              noLoop();
              somDoJogo.stop();
              //somGameOver.play();
            } else {
              //somHit.play();
              personagem.ficaInvensivel();
            }  
          }
        }
}