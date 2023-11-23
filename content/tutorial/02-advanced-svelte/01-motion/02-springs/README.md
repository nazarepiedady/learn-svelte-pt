---
title: Saltos
---

A função `spring` é uma alternativa à `tweened` que muitas vezes funciona melhor para os valores que estão mudando frequentemente.

Neste exemplo temos duas memórias — uma representando as coordenadas do círculo, e um representando o seu tamanho. Vamos convertê-los em saltos:

```svelte
/// file: App.svelte
<script>
	import { +++spring+++ } from 'svelte/+++motion+++';

	let coords = +++spring+++({ x: 50, y: 50 });
	let size = +++spring+++(10);
</script>
```

Os ambos saltos tem valores de `stiffness` e `damping` padrão, as quais controlam bem..., a saltada do salto. Nós podemos especificar os nossos próprios valores iniciais:

```js
/// file: App.svelte
let coords = spring({ x: 50, y: 50 }, +++{
	stiffness: 0.1,
	damping: 0.25
}+++);
```

Se Tentarmos agitar o nosso rato, e arrastar os controlos deslizantes, sentiremos como estes afetam o comportamento do salto. Repara que podemos ajustar os valores enquanto o salta ainda é em movimento.
