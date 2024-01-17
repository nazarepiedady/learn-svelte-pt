---
title: O Marcador @debug
---

Ocasionalmente, é útil inspecionar um pedaço de dado conforme flui através da nossa aplicação.

Uma abordagem é usar `console.log(...)` dentro da nossa marcação. Entretanto, se quisermos pausar a execução, podemos usar o marcador `{@debug ...}` com uma lista separada por vírgula de valores que quisermos inspecionar:

```svelte
/// file: App.svelte
{@debug user}

<h1>Hello {user.firstname}!</h1>
```

Se abrirmos agora as nossas ferramentas de programação e começarmos a inspecionar com os elementos `<input>`, acionaremos o depurador a medida que o valor da `user` mudar. (Nota que a pilha de chamada e as variáveis locais serão escondidas neste tutorial, por causa das restrições de segurança do `iframe`).
