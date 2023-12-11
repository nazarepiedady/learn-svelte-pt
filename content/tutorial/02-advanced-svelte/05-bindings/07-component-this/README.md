---
title: Vincular às Instâncias do Componente
---

Tal como podemos vincular aos elementos do DOM, podemos vincular às próprias instâncias do componente com `bind:this`.

Isto é útil nos casos raros em que precisamos interagir com um componente programaticamente (ao invés de fornecê-lo com propriedades atualizadas). Revisitando a nossa aplicação de tela de pintura de [alguns exercícios atrás](actions), seria bom adicionar um botão para limpar o ecrã.

Primeiro, vamos exportar uma função a partir do `Canvas.svelte`:

```svelte
/// file: Canvas.svelte
export let color;
export let size;

+++export function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}+++
```

Depois, criamos uma referência à instância do componente:

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	import { trapFocus } from './actions.js';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
	+++let canvas;+++
</script>

<div class="container">
	<Canvas +++bind:this={canvas}+++ color={selected} size={size} />
```

Finalmente, adicionamos um botão que chama a função `clear`:

```svelte
/// file: App.svelte
<div class="controls">
	<button class="show-menu" on:click={() => showMenu = !showMenu}>
		{showMenu ? 'close' : 'menu'}
	</button>

+++	<button on:click={() => canvas.clear()}>
		clear
	</button>+++
</div>
```