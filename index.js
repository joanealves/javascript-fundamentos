Fundamentos JS

                Variavel
//// variável é um nome simbólico para um valor.
// As variáveis são declaradas com a palavra-chave var:
var x; // Declara uma variável chamada x.
// Valores podem ser atribuídos às variáveis com o sinal =
x = 0; // Agora a variável x tem o valor 0
x // => 0: Uma variável é avaliada com seu valor.
// JavaScript aceita vários tipos de valores
x = 1; // Números.
x = 0.01; // Apenas um tipo Number para inteiros e reais.
x = "hello world"; // Strings de texto entre aspas.
x = 'JavaScript'; // Apóstrofos também delimitam strings.
x = true; // Valores booleanos.
x = false; // O outro valor booleano
/*x = null; // Null é um valor especial que significa "nenhum valor".
x = undefined; // Undefined é como null//*

                Objeto!

// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
var book = { // Objetos são colocados entre chaves.
 topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
 fat: true // A propriedade "fat" tem o valor true.
}; // A chave marca o fim do objeto.
// Acesse as propriedades de um objeto com . ou []:
book.topic // => "JavaScript"
book["fat"] // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.
// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0] // => 2: o primeiro elemento (índice 0) do array.
primes.lenght // => 4: quantidade de elementos no array.
primes[primes.lenght-1] // => 7: o último elemento do array.
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
var empty = []; // [] é um array vazio, sem qualquer elemento.
empty.lenght // => 0
// Os arrays e objetos podem conter outros arrays e objetos:
var points = [ // Um array com 2 elementos.
 {x:0, y:0}, // Cada elemento é um objeto.
 {x:1, y:1}
];
var data = { // Um objeto com 2 propriedades
 trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.
 trial2: [[2,3], [4,5]], // Os elementos dos arrays são arrays.
};
//
                    OPERADORES

// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são os mais comuns:
3 + 2 // => 5: adição
3 – 2 // => 1: subtração
3 * 2 // => 6: multiplicação
3 / 2 // => 1.5: divisão
points[1].x – points[0].x // => 1: operandos mais complicados também funcionam
"3" + "2" // => "32": + soma números, ou concatena strings
// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count // => 6: nomes de variáveis também são expressões.
// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2, y = 3; // Esses sinais = são atribuições e não testes
// de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso
// Os operadores lógicos combinam ou invertem valores booleanos
(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. &&
// é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) // => verdadeiro: ! inverte um valor booleano

                    FUNÇÔES

// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) { // Define uma função chamada "plus1", com o parâmetro "x"
return x+1; // Retorna um valor uma unidade maior do que o que foi passado
} // As funções são incluídas entre chaves.
plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3+1
var square = function(x) { // As funções são valores e podem ser atribuídas a
 // variáveis
 return x*x; // Calcula o valor da função
}; // Um ponto e vírgula marca o fim da atribuição.
square(plus(y)) // => 16: chama duas funções em uma única expressão.

                    Métodos

// Quando funções recebem as propriedades de um objeto, as
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:
var a = []; // Cria um array vazio
a.push(1,2,3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos
// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao 
// objeto no qual o método é definido: neste caso, o array de pontos anterior.
points.dist = function() { // Define um método para calcular a distância entre
 // pontos
 var p1 = this[0]; // Primeiro elemento do array que chamamos
 var p2 = this[1]; // Segundo elemento do objeto "this"
 var a = p2.x-p1.x; // Diferença em coordenadas X
 var b = p2.y-p1.y; // Diferença em coordenadas Y
 return Math.sqrt(a*a + // O teorema de Pitágoras
 b*b); // Math.sqrt() calcula a raiz quadrada
};
points.dist() // => 1,414: distância entre nossos 2 pontos        

                Instruções

// As instruções JavaScript incluem condicionais e laços que usam a sintaxe
// das linguagens C, C++, Java e outras.
function abs(x) { // Uma função para calcular o valor absoluto
 if (x >= 0) { // A instrução if...
 return x; // executa este código, se a comparação for 
 // verdadeira.
 } // Este é o fim da cláusula if.
 else { // A cláusula opcional else executa seu código se
 return -x; // a comparação for falsa.
 } // Chaves são opcionais quando há 1 instrução por
 // cláusula.
} // Observe as instruções return aninhadas dentro de 
 // if/else.
function factorial(n) { // Uma função para calcular fatoriais
 var product = 1; // Começa com o produto de 1
 while(n > 1) { // Repete as instruções que estão em {}, enquanto a
 // expressão em () for verdadeira
 product *= n; // Atalho para product = product * n;
 n--; // Atalho para n = n – 1
 } // Fim do laço
 return product; // Retorna o produto
}
factorial(4) // => 24: 1*4*3*2
function factorial2(n) { // Outra versão, usando um laço diferente
 var i, product = 1; // Começa com 1
 for(i=2; i <= n; i++) // Incrementa i automaticamente, de 2 até n
 product *= i; // Faz isso a cada vez. {} não é necessário para laços
 // de 1 linha
 return product; // Retorna o fatorial
}
factorial2(5) // => 120: 1*2*3*4*5

// Define uma função construtora para inicializar um novo objeto Point
function Point(x,y) { // Por convenção, as construtoras começam com letras 
 // maiúsculas
 this.x = x; // A palavra-chave this é o novo objeto que está sendo 
 // inicializado
 this.y = y; // Armazena os argumentos da função como propriedades do 
 // objeto
} // Nenhum return é necessário
// Usa uma função construtora com a palavra-chave "new" para criar instâncias
var p = new Point(1, 1); // O ponto geométrico (1,1)
// Define métodos para objetos Point atribuindo-os ao objeto
// prototype associado à função construtora.
Point.prototype.r = function() {
 return Math.sqrt( // Retorna a raiz quadrada de x2
 + y2
 this.x * this.x + // Este é o objeto Point no qual o método...
 this.y * this.y //...é chamado.
 );
};
// Agora o objeto Point b (e todos os futuros objetos Point) herda o método r()
p.r() // => 1,414..               

                    JavaScript do lado do cliente

  JavaScript em arquivos HTML usando a 
marca <script>:
<html>
<head>
<script src="library.js"></script> <!-- inclui uma biblioteca de código JavaScript -->
</head>
<body>
<p>This is a paragraph of HTML</p>
<script>
// E este é um código JavaScript do lado do cliente
// literalmente incorporado no arquivo HTML
</script>
<p>Here is more HTML.</p>
</body>
</html>       

 ou 
 
 <script>
function moveon() {
 // Exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário
 var answer = confirm("Ready to move on?");
 // Se ele clicou no botão "OK", faz o navegador carregar uma nova página
 if (answer) window.location = "http://google.com";
}
// Executa a função definida acima por 1 minuto (60.000 milissegundos) a partir de agora.
setTimeout(moveon, 60000);
</script>

 ... // Exibe uma mensagem em uma seção de saída de depuração especial do documento.
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
 // Localiza a seção de depuração do documento, examinando os atributos de
 // identificação HTML
 var log = document.getElementById("debuglog");
           
 // Se não existe elemento algum com a identificação "debuglog", cria um.
 if (!log) {
 log = document.createElement("div"); // Cria um novo elemento <div>
 log.id = "debuglog"; // Define o atributo de identificação HTML
 // nele
 log.innerHTML = "<h1>Debug Log</h1>"; // Define o conteúdo inicial
 document.body.appendChild(log); // Adiciona-o no final do documento
 }
 // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
 var pre = document.createElement("pre"); // Cria uma marca <pre>
 var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
 pre.appendChild(text); // Adiciona o texto no <pre>
 log.appendChild(pre); // Adiciona <pre> no log
} 

        JS e construtoras

function hide(e, reflow) { // Oculta o elemento e faz script de seu estilo
 if (reflow) { // Se o 2º argumento é verdadeiro
 e.style.display = "none" // oculta o elemento e utiliza seu espaço
 }
 else { // Caso contrário
 e.style.visibility = "hidden"; // torna e invisível, mas deixa seu espaço
 }
}
function highlight(e) { // Destaca e, definindo uma classe CSS
 // Basta definir ou anexar no atributo da classe HTML.
 // Isso presume que uma folha de estilos CSS já define a classe "hilite"
 if (!e.className) e.className = "hilite";
 else e.className += " hilite";
}

                    evento onclick:

<script src="debug.js"></script>
<script src="hide.js"></script>
Hello
<button onclick="hide(this,true); debug('hide button 1');">Hide1</button>
<button onclick="hide(this); debug('hide button 2');">Hide2</button>
World

// O evento "load" ocorre quando um documento está totalmente carregado. Normalmente,
// precisamos esperar por esse evento antes de começarmos a executar nosso código 
// JavaScript.
window.onload = function() { // Executa esta função quando o documento for carregado
 // Localiza todas as marcas <img> no documento
 var images = document.getElementsByTagName("img");
 // Faz um laço por elas, adicionando uma rotina de tratamento para eventos "click" em
 // cada uma para que clicar na imagem a oculte.
 for(var i = 0; i < images.length; i++) {
 var image = images[i];
 if ( image.addEventListener) // Outro modo de registrar uma rotina de 
 // tratamento
 image.addEventListener("click", hide, false);
 else // Para compatibilidade com o IE8 e anteriores
 image.attachEvent("onclick", hide);
 }
 // Esta é a função de rotina para tratamento de evento registrada anteriormente
 function hide(event) { event.target.style.visibility = "hidden"; }
};

                Jquery
   
function debug(msg) {
 var log = $("#debuglog"); // Localiza o elemento para exibir a msg.
 if (log.length == 0) { // Se ele ainda não existe, cria-o...
 log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
 log.appendTo(document.body); // e o insere no final do corpo.
 }
 log.append($("<pre/>").text(msg)); // Coloca a msg em <pre> e anexa no log.
}

                     Exemplo: uma calculadora de empréstimos em JavaScript

<!DOCTYPE html>
<html>
<head>
<title>JavaScript Loan Calculator</title>
<style> /* Esta é uma folha de estilos CSS: ela adiciona estilo na saída do programa */
.output { font-weight: bold; } /* Valores calculados em negrito */
#payment { text-decoration: underline; } /* Para elemento com id="payment" */
#graph { border: solid black 1px; } /* O gráfico tem borda simples */
th, td { vertical-align: top; } /* Não centraliza células da tabela */
</style>
</head>
<body>
<!--
 Esta é uma tabela HTML com elementos <input> que permitem ao usuário inserir dados e 
elementos <span> nos quais o programa pode exibir seus resultados. Esses elementos têm 
identificações como "interest" e "years". Essas identificações são usadas no código 
JavaScript que vem após a tabela. Note que alguns dos elementos de entrada definem 
rotinas de tratamento de evento "onchange" ou "onclick". Elas especificam strings de 
código JavaScript a ser executado quando o usuário insere dados ou dá um clique.
-->
<table>
 <tr><th>Enter Loan Data:</th>
 <td></td>
 <th>Loan Balance, Cumulative Equity, and Interest Payments</th></tr>
 <tr><td>Amount of the loan ($):</td>
 <td><input id="amount" onchange="calculate();"></td>
 <td rowspan=8>
 <canvas id="graph" width="400" height="250"></canvas></td></tr>
 <tr><td>Annual interest (%):</td>
 <td><input id="apr" onchange="calculate();"></td></tr>
 <tr><td>Repayment period (years):</td>
 <td><input id="years" onchange="calculate();"></td>
 <tr><td>Zipcode (to find lenders):</td>
 <td><input id="zipcode" onchange="calculate();"></td>
 <tr><th>Approximate Payments:</th>
 <td><button onclick="calculate();">Calculate</button></td></tr>
 <tr><td>Monthly payment:</td>
 <td>$<span class="output" id="payment"></span></td></tr>
 <tr><td>Total payment:</td>
 <td>$<span class="output" id="total"></span></td></tr>
 <tr><td>Total interest:</td>
 <td>$<span class="output" id="totalinterest"></span></td></tr>
 <tr><th>Sponsors:</th><td colspan=2>
 Apply for your loan with one of these fine lenders:
 <div id="lenders"></div></td></tr>
</table>
<!-- O restante deste exemplo é código JavaScript na marca <script> a seguir -->
<!-- Normalmente, este script ficaria na marca <head> do documento acima, mas -->
<!-- é mais fácil entendê-lo aqui, depois de ter visto seu contexto HTML. -->
<script>
"use strict"; // Usa o modo restrito da ECMAScript 5 nos navegadores que o suportam
/*
 * Este script define a função calculate() chamada pelas rotinas de tratamento de evento
 * no código HTML acima. A função lê valores de elementos <input>, calcula
 * as informações de pagamento de empréstimo, exibe o resultado em elementos <span>.
 * Também salva os dados do usuário, exibe links para financeiras e desenha um gráfico.
 */
function calculate() {
 // Pesquisa os elementos de entrada e saída no documento
 var amount = document.getElementById("amount");
 var apr = document.getElementById("apr");
 var years = document.getElementById("years");
 var zipcode = document.getElementById("zipcode");
 var payment = document.getElementById("payment");
 var total = document.getElementById("total");
 var totalinterest = document.getElementById("totalinterest");
 // Obtém a entrada do usuário através dos elementos de entrada. Presume que tudo isso
 // é válido.
 // Converte os juros de porcentagem para decimais e converte de taxa
 // anual para taxa mensal. Converte o período de pagamento em anos
 // para o número de pagamentos mensais.
 var principal = parseFloat(amount.value);
 var interest = parseFloat(apr.value) / 100 / 12;
 var payments = parseFloat(years.value) * 12;
 // Agora calcula o valor do pagamento mensal.
 var x = Math.pow(1 + interest, payments); // Math.pow() calcula potências
 var monthly = (principal*x*interest)/(x-1);
 // Se o resultado é um número finito, a entrada do usuário estava correta e
 // temos resultados significativos para exibir
 if (isFinite(monthly)) {
 // Preenche os campos de saída, arredondando para 2 casas decimais
 payment.innerHTML = monthly.toFixed(2);
 total.innerHTML = (monthly * payments).toFixed(2);
 totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
 // Salva a entrada do usuário para que possamos recuperá-la na próxima vez que 
 // ele visitar
 save(amount.value, apr.value, years.value, zipcode.value);
// Anúncio: localiza e exibe financeiras locais, mas ignora erros de rede
try { // Captura quaisquer erros que ocorram dentro destas chaves
    getLenders(amount.value, apr.value, years.value, zipcode.value);
    }
    catch(e) { /* E ignora esses erros */ }
    // Por fim, traça o gráfico do saldo devedor, dos juros e dos pagamentos do 
   capital
    chart(principal, interest, monthly, payments);
    }
    else {
    // O resultado foi Not-a-Number ou infinito, o que significa que a entrada
    // estava incompleta ou era inválida. Apaga qualquer saída exibida anteriormente.
    payment.innerHTML = ""; // Apaga o conteúdo desses elementos
    total.innerHTML = ""
    totalinterest.innerHTML = "";
    chart(); // Sem argumentos, apaga o gráfico
    }
   }
   // Salva a entrada do usuário como propriedades do objeto localStorage. Essas
   // propriedades ainda existirão quando o usuário visitar no futuro
   // Esse recurso de armazenamento não vai funcionar em alguns navegadores (o Firefox, por
   // exemplo), se você executar o exemplo a partir de um arquivo local:// URL. Contudo, 
   // funciona com HTTP.
   function save(amount, apr, years, zipcode) {
    if (window.localStorage) { // Só faz isso se o navegador suportar
    localStorage.loan_amount = amount;
    localStorage.loan_apr = apr;
    localStorage.loan_years = years;
    localStorage.loan_zipcode = zipcode;
    }
   }
   // Tenta restaurar os campos de entrada automaticamente quando o documento é carregado 
   // pela primeira vez.
   window.onload = function() {
    // Se o navegador suporta localStorage e temos alguns dados armazenados
    if (window.localStorage && localStorage.loan_amount) {
    document.getElementById("amount").value = localStorage.loan_amount;
    document.getElementById("apr").value = localStorage.loan_apr;
    document.getElementById("years").value = localStorage.loan_years;
    document.getElementById("zipcode").value = localStorage.loan_zipcode;
    }
   };
   // Passa a entrada do usuário para um script no lado do servidor que (teoricamente) pode
   // retornar
   // uma lista de links para financeiras locais interessadas em fazer empréstimos. Este 
   // exemplo não contém uma implementação real desse serviço de busca de financeiras. Mas 
   // se o serviço existisse, essa função funcionaria com ele.
   function getLenders(amount, apr, years, zipcode) {
    // Se o navegador não suporta o objeto XMLHttpRequest, não faz nada
    if (!window.XMLHttpRequest) return;
    // Localiza o elemento para exibir a lista de financeiras
 var ad = document.getElementById("lenders");
 if (!ad) return; // Encerra se não há ponto de saída
 // Codifica a entrada do usuário como parâmetros de consulta em um URL
 var url = "getLenders.php" + // Url do serviço mais
 "?amt=" + encodeURIComponent(amount) + // dados do usuário na string 
// de consulta
 "&apr=" + encodeURIComponent(apr) +
 "&yrs=" + encodeURIComponent(years) +
 "&zip=" + encodeURIComponent(zipcode);
 // Busca o conteúdo desse URL usando o objeto XMLHttpRequest
 var req = new XMLHttpRequest(); // Inicia um novo pedido
 req.open("GET", url); // Um pedido GET da HTTP para o url
 req.send(null); // Envia o pedido sem corpo
 // Antes de retornar, registra uma função de rotina de tratamento de evento que será
 // chamada em um momento posterior, quando a resposta do servidor de HTTP chegar. 
// Esse tipo de programação assíncrona é muito comum em JavaScript do lado do 
// cliente.
 req.onreadystatechange = function() {
 if (req.readyState == 4 && req.status == 200) {
 // Se chegamos até aqui, obtivemos uma resposta HTTP válida e completa
 var response = req.responseText; // Resposta HTTP como string
 var lenders = JSON.parse(response); // Analisa em um array JS
 // Converte o array de objetos lender em uma string HTML
 var list = "";
 for(var i = 0; i < lenders.length; i++) {
 list += "<li><a href='" + lenders[i].url + "'>" +
 lenders[i].name + "</a>";
 }
 // Exibe o código HTML no elemento acima.
 ad.innerHTML = "<ul>" + list + "</ul>";
 }
 }
}
// Faz o gráfico do saldo devedor mensal, dos juros e do capital em um elemento <canvas>
// da HTML.
// Se for chamado sem argumentos, basta apagar qualquer gráfico desenhado anteriormente.
function chart(principal, interest, monthly, payments) {
 var graph = document.getElementById("graph"); // Obtém a marca <canvas>
 graph.width = graph.width; // Mágica para apagar e redefinir o elemento 
 // canvas
 // Se chamamos sem argumentos ou se esse navegador não suporta
 // elementos gráficos em um elemento <canvas>, basta retornar agora.
 if (arguments.length == 0 || !graph.getContext) return;
 // Obtém o objeto "contexto" de <canvas> que define a API de desenho
 var g = graph.getContext("2d"); // Todo desenho é feito com esse objeto
 var width = graph.width, height = graph.height; // Obtém o tamanho da tela de
 // desenho
// Essas funções convertem números de pagamento e valores monetários em pixels
function paymentToX(n) { return n * width/payments; }
function amountToY(a) { return height-(a * height/(monthly*payments*1.05));}
// Os pagamentos são uma linha reta de (0,0) a (payments, monthly*payments)
g.moveTo(paymentToX(0), amountToY(0)); // Começa no canto inferior esquerdo
g.lineTo(paymentToX(payments), // Desenha até o canto superior direito
amountToY(monthly*payments));
g.lineTo(paymentToX(payments), amountToY(0)); // Para baixo, até o canto 
// inferior direito
g.closePath(); // E volta ao início
g.fillStyle = "#f88"; // Vermelho-claro
g.fill(); // Preenche o triângulo
g.font = "bold 12px sans-serif"; // Define uma fonte
g.fillText("Total Interest Payments", 20,20); // Desenha texto na legenda
// O capital acumulado não é linear e é mais complicado de representar no gráfico
var equity = 0;
g.beginPath(); // Inicia uma nova figura
g.moveTo(paymentToX(0), amountToY(0)); // começando no canto inferior 
// esquerdo
for(var p = 1; p <= payments; p++) {
// Para cada pagamento, descobre quanto é o juro
var thisMonthsInterest = (principal-equity)*interest;
equity += (monthly – thisMonthsInterest); // O resto vai para o capital
g.lineTo(paymentToX(p),amountToY(equity)); // Linha até este ponto
}
g.lineTo(paymentToX(payments), amountToY(0)); // Linha de volta para o eixo X
g.closePath(); // E volta para o ponto inicial
g.fillStyle = "green"; // Agora usa tinta verde
g.fill(); // E preenche a área sob a curva
g.fillText("Total Equity", 20,35); // Rotula em verde
// Faz laço novamente, como acima, mas representa o saldo devedor como uma linha 
// preta grossa no gráfico
var bal = principal;
g.beginPath();
g.moveTo(paymentToX(0),amountToY(bal));
for(var p = 1; p <= payments; p++) {
var thisMonthsInterest = bal*interest;
bal -= (monthly – thisMonthsInterest); // O resto vai para o capital
g.lineTo(paymentToX(p),amountToY(bal)); // Desenha a linha até esse ponto
}
g.lineWidth = 3; // Usa uma linha grossa
g.stroke(); // Desenha a curva do saldo
g.fillStyle = "black"; // Troca para texto preto
g.fillText("Loan Balance", 20,50); // Entrada da legenda
// Agora faz marcações anuais e os números de ano no eixo X
g.textAlign="center"; // Centraliza o texto nas 
// marcas
var y = amountToY(0); // Coordenada Y do eixo X
for(var year=1; year*12 <= payments; year++) { // Para cada ano
var x = paymentToX(year*12); // Calcula a posição da marca
g.fillRect(x-0.5,y-3,1,3); // Desenha a marca
if (year == 1) g.fillText("Year", x, y-5); // Rotula o eixo
if (year % 5 == 0 && year*12 !== payments) // Numera cada 5 anos
 g.fillText(String(year), x, y-5);
 }
 // Marca valores de pagamento ao longo da margem direita
 g.textAlign = "right"; // Alinha o texto à direita
 g.textBaseline = "middle"; // Centraliza verticalmente
 var ticks = [monthly*payments, principal]; // Os dois pontos que marcaremos
 var rightEdge = paymentToX(payments); // Coordenada X do eixo Y
 for(var i = 0; i < ticks.length; i++) { // Para cada um dos 2 pontos
 var y = amountToY(ticks[i]); // Calcula a posição Y da marca
 g.fillRect(rightEdge-3, y-0.5, 3,1); // Desenha a marcação
 g.fillText(String(ticks[i].toFixed(0)), // E a rotula.
 rightEdge-5, y);
 }
}
</script>
</body>
</html>

    