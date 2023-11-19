---
title: beforeUpdate e afterUpdate
---

A função `beforeUpdate` agenda atividade para acontecer imediatamente antes do DOM ser atualizado. A `afterUpdate` é a sua equivalente, usada para executar código assim que o DOM estiver em sincronia com os nossos dados.

Juntas, são úteis para fazer coisas que imperativamente são difíceis de alcançar duma maneira puramente orientada a estado, como atualizar a posição do deslocamento dum elemento.

Este robô de conversas [Eliza](https://en.wikipedia.org/wiki/ELIZA) é irritante de usar, porque temos de estar sempre a deslocar a janela da conversa. Corrigiremos isto.

```js
/// file: App.svelte
let div;
+++let autoscroll = false;+++

beforeUpdate(() => {
+++	if (div) {
		const scrollableDistance = div.scrollHeight - div.offsetHeight;
		autoscroll = div.scrollTop > scrollableDistance - 20;
	}+++
});

afterUpdate(() => {
+++	if (autoscroll) {
		div.scrollTo(0, div.scrollHeight);
	}+++
});
```

Nota que a `beforeUpdate` executará primeiro antes do componente ser montado, então precisamos verificar a existência do `div` antes de ler as suas propriedades.
