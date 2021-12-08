ANOTAÇÕES DO CURSO

Modulo A:
Aula 01:

O que o JavaScript faz?

O JavaScript iniciou com foco ao lodo do cliente, mas, hoje em dia, também é usado do lado do servidor.

O HTML cuida dos textos, imagens e videos do site, ou seja, o conteudo.
O CSS cuida do design da pagina, deixando tudo mais bonito e organizado.
E o JavaScript cuida das interações e integrações das coisas.

É errado dizer que voce programa em HTML e CSS, pois não são linguagens de programação e sim tecnologias de contrução de sites. Já JavaScript é sim uma linguagem de programação.

Aula 02:

Historia do JavaScript

Basicamente tem inicio junto da internet. Em 93 surgiu o HTML, o protocolo HTTP e o WWW, alem de um navegador para tudo funcionar. Em 95 foi preciso criar uma linguagem que ajudaria na criação de sites, já que o HTML era muito simples. Como na epoca a linguagem JAVA ficou muito famosa e conhecida decidiram chamar essa nova linguagem de JavaScript por pura estrategia de marketing. Em 2010 surgiu o NodeJs, que roda o JavaScript do lado do servidor.

Aula 03:

Primeiros Passos com JavaScript

O aprendizado vem aos poucos, para aprender a materia é preciso colocar a mão na masse e ir aprendendo e treinando aos poucos.

Qualquer pessoa em qualquer lugar pode aprender a programar, só é preciso vontade e dedicação.

Não existe a melhor linguagem do mundo, tudo depende de gosto e de qual necessidade vc tem.

Aula 04:

Primeiros scripts

Um bom programador organiza os arquivos, para facilitar mais pra frente, quando for preciso encontrar algo.

No vscode, para iniciar um html é so escrever "html" e selecionar a opção "html:5" que sera criado um corpo para o nosso codigo em html. Na lang é so alterar para "pt-br" para mostrar que o site sera em portugues. A parte da cabeça (head) é a parte das configurações da página, já a parte do corbo (body) é o que será exibido para p usuario. No body a tag <h1></h1> seria o primeiro titulo do site e a tag <p></p> representa um paragrafo. No head é possivel adicionar a tag <style></style> que controla o estilo da pagina e oque for escrito dentro dessa tag é um css. No css é preciso marcar a tag que vc quer editar e abrir chaves {} e detro disso é onde será editado o css (DICA: COM AS CORES É POSSIVEL TROCAR O RGD DELAS SO CLOCANDO O MOUSE EM CIMA), backgorun-color cuida da cor do fundo, color cuida da cor das letras e font cuida do tamanho da fonte. Para adicionar um script é sp adicionar a tag <script></script> no fim do body (para que todo o html carregue antes de se iniciar o script). Para aparecer um alertDialog no  site é so usar o comando window.alert("") ou apenas alert("") , com o comando window.confirm("") ou confirm("") é possivel mostra um Dialog com o botao de ok e de cancelar e com o comando window.prompt("") ou prompt("") aparece um Dialog com um camp para digitar informações.

(é importante separar os arquivos html, css e javasript, mas por ser a primeira aula tudo ficara no mesmo lugar)

-------------------------------------------------------------------------------------------------------------------------

Modulo B:
Aula 05:

Tipos de dados e variaveis

O comentario é algo muito importante, pois facilita na documentação do codigo. Para comentar em JavaScript // ou /* */

Um = deve ser chamdo de "recebe", para mudar oq tem dentro da variavel oq estava antes perdido. As variaveis sao espaços na memoria que guardam os valores, para definir uma variavel é so chamar var nomeDaVariavel. Nome das variaveis podem começar com letras, $ ou _, não podem começar com numeros, pode ter acentos e simbolos, pode ter espaços e nao podem ser palavras reservadas (exemplo var var). Dicas para criar variaveis: Maiusculos e Minusculos tem diferença, tentar utilizar nomes coerentes. Diferentes tipos de variaveis: podem ser numeros inteiros ou flutuantes ( O JavaScript reconhecee esses numeros todos como number apenas, nao tem diferenciação igual em outras linguagens), podem ser string, boolean, null, undefined, object ou function. Para saber o tipo da variavel é so utilizar o comando typeof nomeDaVariavel.

Aula 06:

Tratamento de Dados

(é possivel usar var, let e const, mas agora será usado var para melhor entendimento no momento)

Uma variavel pode receber o retorno dos Dialogs, é so colocar a var nomeVariavel = prompt("")

Comentario em HTML é so usar <!-- Aqui fica o comentario -->
Comentario no CSS é so p /* Aqui fica o comentario */

Uma das maneiras de passar uma variavel em uma String é pela concatenação alert("É um grande prazer te conhecer " + nomeDaVariavel) dessa forma.

O + pode ser concatenção e adição, para forçar uma soma as variaveis somadas precisam ser numeros, mas como o prompt retorna uma string não tem como fazer essa soma de maneira tão simples. Nesse caso para fazer a soma é preciso converter as variaveis para numero. Para transformar em um numero inteiro é so usar Number.parseInt(nomeDaVariavel) ou parseInt(nomeDaVariavel), para numero com virgula é so usar Number.parseFloat(nomeDaVariavel) ou parseFloat(nomeDaVariavel)  e tem mais uma maneira mais simples que é o Number(nomeDaVariavel). 

Para transformar um numero em strings é so utilizar String(noomeDaVariavel) ou nomeDaVariavel.toString().

Formatação de Strings
Outra forma de utilizar a variavel em uma string é `Lalalalal ${nomeDaVariavel}` (SIM É NECESSARIO ESSE ACENTO COMO SE FOSSE PARENTESES PARA FUNCIONAR).

nomeDaVariavel.length mostra o tamanho da string
nomeDaVariavel.toUpperCase() transforma tudo em maiusculo
nomeDaVariavel.toLowerCase() transforma tudo em minusculo

document.write() escreve no documento (na pagina) alguma coisa e dentro dele é possivel passar tags de HTML.

document.writeln() quebra a linha ou é so usar a tag <br></br> e para negrido é so usar a tag <strong></strong>.

Formatação de numeros
nomeDaVariavel.toFixed(2) mostra duas casas depois da virgula
nomeDaVariavel.toFixed(2).replace('.', ',') troca o ponto pela virgula
nomeDaVariavel.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) ele localiza a string para o Brasil e ele localiza para currency (moeda local) para o real.

Aula 07:

Operadores Parte 01

operadores aritmeticos são +, -, *, /, % e **. Esses são os peradores usados para fazer calculos.

Como na matematica tem a ordem dos operadores, primeiro raiz e potencia, depois divisao e multiplicação (no caso da programção o operador % entra aqui tambem) e por ultimo soma e subtração. Caso queira mudar essa ordem é so usar um (), assim como é feito na matematica.

n = 1
n += 2
Isso faz com que o n receba n = n + 2

Aula 08:

Operadores Parte 02

Operadores relacionais sao >, <, >=, <=, == e !=

Em JavaScrip o 5 == 5 e 5 == "5" dão true, pois o JavaScrip nao faz essa diferenciação de tipo na hora de compara. Caso eu queira verificar o tipo tambem eu uso ===, dessa forma 5 === "5" vai dar false e 5 === 5 da true.

Operadores logicos são !, && e ||

Odem de precedencia: 
primeiro se verifica operadores aritmeticos (seguindo a ordem descrita acima), depois relacionais (quem aparece primeiro é feito primeiro) e por ultimo operadores logicos (primeiro !, depois && e ai ||).

Operadores ternarios são ? e :
Esses operadores são igual no flutter teste ? true : false (na parte true é caso o teste de true e la vc faz algo, se for falso executa a segunda parte)

-------------------------------------------------------------------------------------------------------------------------

Modulo C:
Aula 09:

Introdução ao DOM

Extensoes do VSCode: Live Server e Node Exec

O que é DOM? É um modelo de objetos para documento. É um conjuntos de objetos para o navegador que da acesso ao website, ou seja não funciona com o node.js.

É preciso aprender a utilizar a arvore do DOM no website. Toda arvore DOM tem a raiz chamada de window, que tem varios objetos, como exemplo temos o location (diz qual é a url do site, a pagina atual e a apagina anterior), o document(que é o documento atual) e o history(que guarda da onde vc veio e pra onde vc vai, facilitando a navegação).

Dentro do document temos o htlm, que tem o head e o body como filhos. Dentro de head temos varias tags como meta e title, ja em body (para o documento atual do ex006) temos o h1, p, p e div, onde o segundo p tem um filho chamado strong.

Existem algumas formas de acessar o DOM. Por marca (seria a tag do html), por ID, por nome, por classe e por seletor(que seria com o css nas versoes mais recentes).

Por marca:
getElementsByTagName() -> consigo selecionar mais de um objeto
document.getElementsByTagName('p') dessa forma é pego os elementos pela tag P, para selecionar apenas um elemento é so usar document.getElementsByTagName('p')[indexDoElementoDesejado]. Para pegar o texto desse elemento document.getElementsByTagName('p')[indexDoElementoDesejado].innerText. So é usado esse index quando o o get estiver no plural, caso contrario não é necessario utilizar.
Tambem é possivel mudar o style do elemento, é so usar document.getElementsByTagName('p')[indexDoElementoDesejado].style.color = "blue". É possivel fazer isso com qualquer parte do script e ate armazenar em variaveis. var corpo = document.body e depois corpo.style.background = "green". Caso algum script tenha uma formatação que vc deseje usar é so colocar o .innerHTML ao inves de innerText.

Por ID:
pode ser usado o getElementById(), dessa forma pegamos o elemento pelo id que foi passado na tag

Por nome:
Pode ser usado o getElementsByName() para pegar pelo nome do objeto

Por classe:
Pode ser usado o getElementsByClassName() para pegar pela classe do elemento

Por seletor:
pode ser usado com querySelector() ou querySelectorAll(). Para selecionar assim deve ser feito dessa forma document.querySelector("div#msg") (dentro dos paranteses deve ser igual no css, passar a tag e oidentificador da tag que que pegar). Id sao representados por "#" e classe por ".". O querySelector é bem recente, logo em navegadores antigos e desatualizados não ira funcionar.

Aula 10:

Eventos DOM

Os eventos é tudo o que pode acontecer com qualquer elemento, no caso do exemplo com a div que criamos no ex007. Um evento que pode acontecer é um evento do mouse, como o mouse dentro da div parado(mouseenter), se movendo dentro dela(mousemove), apertando e segurano(mousedown), soltando(mouseup), clicando(click) e removendo o mouse da div(mouseout).

Uma função é um conjunto de codigos que serao executados so quando o evento acontecer. Para fazer isso acontecer é so usar: function nomeFuncao(possivelParamentro){} (é possivel criar uma funcao sem nome, chamada de funcao anonima, mas dessa forma nao é possivel chamar a funcao em outros locais do codigo).

É possivel chamar esses eventos pelo HTML ou pelo JavaScript:
No HTML é so chamr o evento dentro do componente dessa forma:
<div id="area" onclick="clicar()">interaja...</div>
O onClick chama a funcao clicar que faz uma interacao

No JavaScript
var area = document.getElementById("area")
area.addEventListener("click", clicar)

Dessa forma é adicionado algo que fica esperando o click acontecer e quando acontece chama a funcao clicar (nao precisa chamar a funcao com parenteses nesse caso).

Na hora de usar esses listeners pode escolher entre usar o HTML ou o JavaScript, não precisa usar das duas formas.

Como descobrir que esta tendo algum erro no codigo. No Browser, onde o codigo esta rodando é so clicar no F12 e ir em console para verificar qual erro esta sendo acusado.

Para criar um input de numeros:
<input type="number" name="txtn1" id="txtn1">

E criando um botao para o input:
<input type="button" value="Somar" onclick="somar()">

Agora para pegar o valor desses elementos e tranforma-los em numero (isso ja foi mostrado anteriormente, mas o exemplo é apenas para deixar mais claro)
var tn1 = document.getElementById("txtn1")
var n1 = Number(tn1.value)

-------------------------------------------------------------------------------------------------------------------------

Modulo D:
Aula 11:

Condições (Parte 1)

Normalmente os códigos seguem uma sequencia, de cima para baixo. Essa sequencia só é quebrada com um condicional, dependendo de algo uma parte do codigo é executado ou não (na verdade o codigo segue sendo lido de cima para baixo, mas com as condições certas partes podem ser ignoradas, dependendo da condição)

Existem alguns tipos de condição

Condição simples -> onde so se tem o if

Condição composta -> onde se usa if e else

print no node.js -> console.log()


Aula 12:

Condições (Parte 2)

Condição aninhada -> if dentro de if ou if dentro de else (ou o famoso else if)

pegando hora atual com node.js:
var agora = new Date()
var hora = agora.getHours()

Condição multipla -> switch case
switch(expressao){
    case caso1:
        break

    case caso2:
        break

    default: (seria tipo o else)
    break
}
No switch case sempre é preciso usar o break no fim dae cada caso


Exercicios 01:

É muito importante planejar a estrutura de um site antes de faze-lo.

Comecamos fazendo um arquivo diferente para o estilo e, para importalo, <link rel="stylesheet" href="estilo.css">. E para importar um arquivo de JavaScript <script src="script.js"></script>


Exercicios 02:

Para pegar fotos é so entrar no site "https://www.pexels.com/pt-br/procurar/portugu%C3%AAs/"

Para usar uma foto no HTML <img src="fotos/manha.jpg" alt="Foto do Dia" id="imagem">

Para chamar uma funcao quando a tela carregar é so chamar o 'onload=""' em alguma tag do HTML

Para mudar o arquivo de foto com o DOM:
var img = document.getElementById('imagem')
img.src = "fotos/tarde.jpg"

Exercicios 03:

Para definir um valor minimo ou maximo no input em HTML:
<input type="number" name="txtano" id="txtano" min="0">

Para fazer aquele input com o botao arredondado:
<input type="radio" name="radsex" id="masc" checked>
 <label for="masc">Masculino</label>
<input type="radio" name="radsex" id="fem" >
 <label for="fem">Feminino</label>
Onde o name deve ser o mesmo para representar que faz parte do mesmo input

Checando no JavaScript se o botao de input arredondado esta maracado:
var sex = document.getElementsByName('radsex')
if(sex[0].checked){
    genero = 'Masculino'
} else if(sex[1].checked){
    genero = 'Feminino'
}

Criando um elemento e passando um id para ele em JavaScript:
var img = document.createElement('img')
img.setAttribute('id', 'foto')

Adicionando uma tag em alguma outra tag pelo JavaScript:
res.appendChild(img) (o img é o mesmo criado acima com o JavaScript)

-------------------------------------------------------------------------------------------------------------------------

Modulo E:
Aula 13:

Repetições (Parte 1)

Primeira estrutura

while(condicao){
    esse bloco sera executado enquanto a condicao for verdadeira
}

Segunda estrutura

do{
    primeiro executa o bloco e depois testa a condicao
}while(condicao)


Aula 14:

Repetições (Parte 2)

for(var i = 1; condicao; i++){

}


Exercicios 04:

Aula de demonstração de como serão os exercicios.


Exercicios 05:

Para utilizar emojis
entrar no site -> https://unicode.org/emoji/charts/full-emoji-list.html
pegar o codigo do emoji desejado e retirar o U+ e colocar \u{restante do codigo do emoji}


Exercicios 06:

para criar um tab item
<select name="tabuada" id="seltab" size="10">
                <option>Digite um número acima</option>
            </select>

E para adicionar options no JavaScript
    var num = document.getElementById('txtValue')
    var tab = document.getElementById('seltab')
    numero = Number(num.value)
    tab.innerHTML = ''
    for(var i = 0; i <= 10; i++){
        var item = document.createElement(`option`)
        tabuada = numero * i
        item.text = `${numero} x ${i} = ${tabuada}`
        item.value = `tab${i}`
        tab.appendChild(item)  
    }



-------------------------------------------------------------------------------------------------------------------------

Modulo F:
Aula 15:    

variaveis compostas conseguem armazenar varios valores de uma vez

como em qualquer linguagem os indices começam com o 0 e para declarar uma lista é so usar: let num = [0,1,2]

para adicionar um elemento na lista é so usar: num[3] = 6, assim o JavaScript adiciona um elemento nessa posicao

num.push(valor), dessa forma sera adicionado um elemento no fim da lista

num.length, retorna o tamanho da lista

num.sort(), pega os elementos e coloca em ordem crescente

para mostrar os elementos de dentro de um vetor é so usar ums estrutura de repetição para acessar os elementos

existe um outro jeito de mostrar os elementos em uma lista em JavaScript, que é o for( let pos in num){ oq deve acontecer na repeticao}

num.indexOf(7), vai pegar o index da onde tem o valor 7, caso nao tenha o valor ele retorna -1


Aula 16:

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
    
}

os iguais nos parametros represetam um valor padrao caso o usuario nao passe um dos valores, dessa forma evita erros

Outra maneira de criar uma funcao:
let v = function (x) {

    return x*2
    
}

console.log(v(2))


Exercicios 07 e 08:

variaveis escritas fora de funcoes sao consideras globais e podem ser acessadas por qualquer parte do codigo, é possivel ver isso no ex024

let num = document.getElementById('txtValue')
num.value = ''
num.focus()

dessa forma faz com que o valor desse num vire nada e o foco da pagina va para ele


Aula 17:

Estudar mais sobre funcoes, objetos, modularizacao, expressoes regulares, json, ajax, nodejs, bibliotecas e framework

para criar um objeto é so utilizar:
let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p){}
}

os objetos podem guardar funcionalidades e metodos

e para mostrar o nome é so utilizar o amigo.nome, o mesmo vale para os outros campos


FIM

-------------------------------------------------------------------------------------------------------------------------


