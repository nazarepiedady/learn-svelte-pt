---
title: This
---

Num [exercício anterior](onmount), aprendemos a como usar a função do ciclo de vida `onMount` para pintar numa tela.

Mas o exemplo é defeituoso — está usando `document.querySelector('canvas')`, que sempre retornará o primeiro `<canvas>` encontrado na página, que pode não ser aquele pertencente ao nosso componente.

No lugar disto, podemos usar o vínculo `this` de apenas leitura para obter uma referência ao elemento:

```js
/// file: App.svelte
+++let canvas;+++

onMount(() => {
	---const canvas = document.querySelector('canvas')---
	const context = canvas.getContext('2d');

	let frame = requestAnimationFrame(function loop(t) {
		frame = requestAnimationFrame(loop);
		paint(context, t);
	});

	return () => {
		cancelAnimationFrame(frame);
	};
});
```

```svelte
/// file: App.svelte
<canvas
	+++bind:this={canvas}+++
	width={32}
	height={32}
></canvas>
```

Nota que o valor do `canvas` será `undefined` até que o componente for montado.
