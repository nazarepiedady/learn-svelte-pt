---
title: Transições de CSS Personalizadas
---

O módulo `svelte/transition` tem um punhado de transições embutidas, mas é muito fácil criar nossas próprias transições. Por exemplo, este é o código-fonte da transição `fade`:

```js
/// no-file
function fade(node, { delay = 0, duration = 400 }) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: (t) => `opacity: ${t * o}`
	};
}
```

A função recebe dois argumentos — o nó ao qual a transição é aplicada, e quaisquer parâmetros que foram passados — e retorna um objeto de transição que pode ter as seguintes propriedades:

- `delay` — milissegundos antes da transição começar
- `duration` — duração da transição em milissegundos
- `easing` — uma função atenuante `p => t` (consular o capítulo sobre [intercalação](/tutorial/tweens))
- `css` — uma função `(t, u) => css`, onde `u === 1 - t`
- `tick` — uma função `(t, u) => {...}` que tem algum efeito sobre o nó

O valor de `t` é `0` no início duma introdução ou no final duma conclusão, e `1` no final duma introdução ou no início duma conclusão.

Na maioria das vezes devemos retornar a propriedade `css` e _não_ a propriedade `tick`, porque as animações de CSS são executadas fora da linha principal para evitar brincadeiras sempre que possível. A Svelte 'simula' a transição e constrói uma animação de CSS, e depois deixa-a executar.

Por exemplo, a transição `fade` gera uma animação de CSS mais ou menos assim:

```css
/// no-file
0% { opacity: 0 }
10% { opacity: 0.1 }
20% { opacity: 0.2 }
/* ... */
100% { opacity: 1 }
```

Mas podemos ser muito mais criativos. Façamos algo verdadeiramente infundado:

```svelte
/// file: App.svelte
<script>
	import { fade } from 'svelte/transition';
	+++import { elasticOut } from 'svelte/easing';+++

	let visible = true;

	function spin(node, { duration }) {
		return {
			duration,
			css: t => +++{
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`
			}+++
		};
	}
</script>
```

Lembre-se: com grande poder vem grande responsabilidade.
