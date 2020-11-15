## Hooks
<hr />

<p>
<b>O que é um Hook?</b> Um Hook é uma função especial que te permite utilizar recursos do React. Por exemplo, useState é um Hook que te permite adicionar o state do React a um componente de função. Vamos aprender outros Hooks mais tarde.
</p>

 - ## useState

O que o useState faz? Ele declara um variável state. Nossa variável é chamada de count mas poderíamos chamar de qualquer coisa, como banana. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções — useState é uma nova maneira de usar as mesmas capacidades que o this.state tem em uma classe. Normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.
<hr />

 - ## useEffect

O que o useEffect faz? Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função que você passou (nos referiremos a ele como nosso “efeito”), e chamá-la depois que realizar as atualizações do DOM. Nesse efeito, mudamos o título do documento, mas podemos também realizar busca de dados ou chamar alguma API imperativa.
<hr />

 - ## useContext

Contexto (context) é usado principalmente quando algum dado precisa ser acessado por muitos componentes em diferentes níveis. Use contexto moderadamente uma vez que isto pode dificultar a reutilização de componentes.
