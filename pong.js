//posição e tamanho da bolinha  
let xbolinha =300;
let ybolinha =200;
let diametro =25;

//velocidade da bolinha
let velocidadeXbolinha=6 ;
let velocidadeYbolinha=6 ;

//variáveis da raquete
let xraquete = 10
let yraquete = 150 ;
let raquetecomprimento = 10;
let raquetealtura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoborda();
  mostraRaquete();
}

//desenho da bolinha
function mostraBolinha() {
  fill("gold")
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha() {
 xbolinha += velocidadeXbolinha;
 ybolinha += velocidadeYbolinha;
}

function verificaColisaoborda() {
  if (xbolinha > width || xbolinha < 0) {
    velocidadeXbolinha *= -1;
    }
  if (ybolinha > height || ybolinha < 0) {
   velocidadeYbolinha *= -1;
    }
  }

function mostraRaquete() {
  fill("deeppink")
  rect(xraquete, yraquete, raquetecomprimento,  raquetealtura, 15);
 }
