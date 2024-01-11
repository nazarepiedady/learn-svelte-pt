---
title: setContext e getContext
---

A API de contexto fornece um mecanismo para os componentes 'falarem' uns com os outros sem passarem dados e funções como propriedades, ou despacharem muitos eventos. É uma funcionalidade avançada, mas útil. Neste exercício, iremos recriar a [Schotter](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/) by George Nees — um dos pioneiros da arte generativa — usando a API de contexto.

Dentro do `Canvas.svelte`, existe uma função `addItem` que adiciona um item à tela. Nós podemos torná-la disponível aos componentes dentro do `<Canvas>`, como `<Square>`, com a `setContext`:

```svelte
/// file: Canvas.svelte
<script>
	import { +++setContext+++, afterUpdate, onMount, tick } from 'svelte';

	// ...

	onMount(() => {
		ctx = canvas.getContext('2d');
	});

+++	setContext('canvas', {
		addItem
	});+++

	function addItem(fn) {...}

	function draw() {...}
</script>
```

Dentro dos componentes filhos, podemos agora receber obter o contexto com, bem, a `getContext`:

```svelte
/// file: Square.svelte
<script>
	+++import { getContext } from 'svelte';+++

	export let x;
	export let y;
	export let size;
	export let rotate;

	+++getContext('canvas').addItem(draw);+++

	function draw(ctx) {...}
</script>
```

Até agora, tão... aborrecido. Vamos adicionar alguma aleatoriedade à grade:

```svelte
/// file: App.svelte
<div class="container">
	<Canvas width={800} height={1200}>
		{#each Array(12) as _, c}
			{#each Array(22) as _, r}
				<Square
					x={180 + c * 40+++ + jitter(r * 2)+++}
					y={180 + r * 40+++ + jitter(r * 2)+++}
					size={40}
					+++rotate={jitter(r * 0.05)}+++
				/>
			{/each}
		{/each}
	</Canvas>
</div>
```

Tal como [funções gatilhos do ciclo de vida](/tutorial/onmount), `setContext` e `getContext` devem ser chamadas durante a inicialização do componente. (A chave do contexto (`'canvas'` neste caso) pode ser qualquer coisa que quisermos, incluindo valores que não são sequências de caracteres, o que é útil para controlar quem pode acessar o contexto).

O nosso objeto de contexto pode incluir qualquer coisa, incluindo memórias. Isto permite-nos passar valores que mudam ao longo do tempo aos componentes filhos:

```js
/// no-file
// num componente pai
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

setContext('my-context', {
	count: writable(0)
});
```
```js
/// no-file
// num componente filho
import { getContext } from 'svelte';

const { count } = getContext('my-context');

$: console.log({ count: $count });
```
