---
title: onMount
---

Todo componente tem um _ciclo de vida_ que começa quando for criado, e termina quando for destruído. Existem um punhado de funções que permitem-nos executar código em momentos chaves durante este ciclo de vida. Aquela que usaremos com mais frequência é `onMount`, que executa depois do componente ser desenhado primeiro no DOM.

Neste exercício, teremos um `<canvas>` que gostaríamos de animar, usando a função `paint` no `gradient.js`. Começamos importando a função a partir da `svelte`:

```svelte
/// file: App.svelte
<script>
	+++import { onMount } from 'svelte';+++
	import { paint } from './gradient.js';
</script>
```

Depois, adicionamos uma função que executa quando componente montar:

```svelte
/// file: App.svelte
<script>
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';

+++	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');+++

+++		requestAnimationFrame(function loop(t) {
			requestAnimationFrame(loop);
			paint(context, t);
		});
	});+++
</script>
```

> Num [exercício posterior](bind-this),, aprendermos como obter a referência dum elemento sem usar o `document.querySelector`.

Até agora muito bem — devemos ver cores onduladas gentilmente na forma do logótipo da Svelte. Mas não há problema — o laço de repetição continuará mesmo depois do componente ter sido destruído. Para corrigirmos isto, precisamos retornar uma função de limpeza a partir da `onMount`:

```js
/// file: App.svelte
onMount(() => {
	const canvas = document.querySelector('canvas')
	const context = canvas.getContext('2d');

	+++let frame =+++ requestAnimationFrame(function loop(t) {
		+++frame =+++ requestAnimationFrame(loop);
		paint(context, t);
	});

+++	return () => {
		cancelAnimationFrame(frame);
	};+++
});
```
