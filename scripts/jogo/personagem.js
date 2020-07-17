class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY,largura, altura, larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;
        this.velocidadePulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;
        this.puloCount = 0;
        this.invensivel = false;
    }

    pula(){
        this.puloCount++;
        if(this.puloCount <= 2){
            this.velocidadePulo = this.alturaDoPulo;
        }
    }

    andaFrente(){
        this.x += 10;
    }

    andaTras(){
        if(this.x > 0)  
        this.x -= 10;
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if(this.y > this.yInicial){
            this.y = this.yInicial;
            this.puloCount = 0;
        }
    }

    ficaInvensivel(){
        this.invensivel = true;

        setTimeout(()=> {
            this.invensivel = false
        }, 1000);
    }

     isColidindo(inimigo){
        if(this.invensivel){
            return false;
        }
        const precissao = .7;
        const colissao = collideRectRect(
            this.x, this.y, this.largura * precissao, this.altura * precissao, 
            inimigo.x, inimigo.y, inimigo.largura * precissao, inimigo.altura * precissao
        );
        return colissao;
    };
}