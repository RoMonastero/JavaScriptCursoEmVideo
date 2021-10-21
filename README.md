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
