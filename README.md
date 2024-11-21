<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<h1>Contador Interativo</h1>
<p>Este repositório contém duas versões do <strong>Contador Interativo</strong>: uma implementada com <strong>HTML, CSS e JavaScript puro</strong>, e outra utilizando a biblioteca <strong>React</strong>. Ambas têm como objetivo apresentar funcionalidades básicas de interação do usuário, como incremento, decremento e reset, além de sugestões de uso que podem ser alternadas.</p>

<div >
    <h2>Versão em HTML, CSS e JavaScript</h2>
    <h3>Funcionalidades:</h3>
    <ul>
        <li><strong>Incremento e Decremento:</strong> Dois botões permitem aumentar ou diminuir o valor do contador. O valor inicial é zero, e decrementos abaixo de zero não são permitidos.</li>
        <li><strong>Reset do Contador:</strong> Um botão adicional reseta o valor do contador para zero.</li>
        <li><strong>Sugestões de Uso:</strong> Uma área exibe sugestões sobre como usar o contador. Setas laterais permitem navegar entre diferentes sugestões.</li>
        <li><strong>Design Responsivo:</strong> O layout foi pensado para oferecer uma boa experiência em dispositivos móveis e desktops.</li>
    </ul>
</div>

<div>
    <h2>Versão em React</h2>
    <h3>Funcionalidades:</h3>
    <ul>
        <li><strong>Incremento, Decremento e Reset:</strong> Funcionalidades iguais à versão em HTML/JS, mas implementadas como componentes do React. Utiliza estado (<code>state</code>) para gerenciar o valor do contador.</li>
        <li><strong>Sugestões de Uso Dinâmicas:</strong> Sugestões são armazenadas em um array e exibidas dinamicamente, com possibilidade de alternância usando botões de navegação.</li>
        <li><strong>Estilo Integrado:</strong> O CSS foi adaptado para funcionar como arquivos de estilo separados, mantendo a identidade visual da versão HTML/JS.</li>
        <li><strong>Design Responsivo:</strong> Assim como na versão em HTML/JS, o layout é responsivo.</li>
        <li><strong>Otimizações do React:</strong> Reutilização de lógica através de funções específicas e atualização eficiente da interface usando o Virtual DOM.</li>
    </ul>
</div>

<div >
    <h2>Estrutura do Repositório</h2>
    <ul>
        <li><strong>versao-html-css-js:</strong> Contém os arquivos <code>index.html</code>, <code>style.css</code>, e <code>script.js</code>.</li>
        <li><strong>versao-react:</strong> Inclui um projeto React criado com Create React App, dividido em componentes e com estilos organizados em <code>App.css</code> e <code>index.css</code>.</li>
    </ul>
</div>

<div >
    <h2>Como Executar</h2>
    <h3>Versão em HTML/CSS/JS</h3>
    <ol>
        <li>Clone o repositório.</li>
        <li>Navegue até a pasta <code>versao-html-css-js</code>.</li>
        <li>Abra o arquivo <code>index.html</code> no navegador.</li>
    </ol>

<h3>Versão em React</h3>
<ol>
    <li>Certifique-se de ter o Node.js instalado.</li>
    <li>Clone o repositório e navegue até a pasta <code>versao-react</code>.</li>
    <li>Execute o comando <code>npm install</code> para instalar as dependências.</li>
    <li>Inicie o servidor local com <code>npm start</code>.</li>
</ol>

</div>
</body>
</html>
