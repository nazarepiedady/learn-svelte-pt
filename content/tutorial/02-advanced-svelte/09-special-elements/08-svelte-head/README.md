---
title: <svelte:head>
---

O elemento `<svelte:head>` permite-nos inserir os elementos dentro do `<head>` do nosso documento. Isto é útil para coisas como marcadores `<title>` e `<meta>`, os quais são cruciais para uma boa otimização do motor de busca.

Uma vez que estes são muito difíceis de mostrar no contexto deste tutorial, o usaremos para um propósito diferente — carregar folhas de estilo.

```svelte
/// file: App.svelte
<script>
	const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
	let selected = themes[0];
</script>

+++<svelte:head>
	<link rel="stylesheet" href="/stylesheets/{selected}.css" />
</svelte:head>+++

<h1>Welcome to my site!</h1>
```

> No modo de interpretação do lado do servidor, os conteúdos do `<svelte:head>` são retornados separadamente a partir do resto do nosso HTML.
