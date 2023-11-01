---
title: O Nosso Primeiro Componente
---

Na Svelte, uma aplicação é composta de um ou mais _componentes_. Um componente é um bloco de código autossuficiente e reutilizável que encapsula HTML, CSS e JavaScript que estão associados, escrito num ficheiro `.svelte`. O ficheiro `App.svelte`, aberto no editor de código à direita, é um componente simples.

## Adicionando Dados

Um componente que apenas desenha alguma marcação estática não é muito interessante. Vamos adicionar algum dado.

Primeiro, adicionamos um marcador `script` ao nosso componente e declaramos uma variável `name`:

```svelte
/// file: App.svelte
+++<script>
	let name = 'Svelte';
</script>+++

<h1>Hello world!</h1>
```

Depois, podemos fazer referência à `name` na marcação:

```svelte
/// file: App.svelte
<h1>Hello +++{name}+++!</h1>
```

Dentro das chavetas, podemos colocar qualquer JavaScript que quisermos. Tente mudar `name` para `name.toUpperCase()` para uma saudação mais barulhenta:

```svelte
/// file: App.svelte
<h1>Hello {name+++.toUpperCase()+++}!</h1>
```
