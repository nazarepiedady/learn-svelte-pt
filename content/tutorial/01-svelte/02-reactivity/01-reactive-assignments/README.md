---
title: Atribuições
---

No coração da Svelte está um poderoso sistema de _reatividade_ para manter o DOM em sincronia com o estado da nossa aplicação — por exemplo, em resposta à um evento.

Para demonstrá-lo, primeiro precisamos de prender um manipulador de evento (aprenderemos mais sobre estes [mais tarde](/tutorial/dom-events)):

```svelte
/// file: App.svelte
<button +++on:click={increment}+++>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
```

Dentro da função `increment`, tudo o que precisamos de fazer é mudar o valor da `count`:

```js
/// file: App.svelte
function increment() {
	+++count += 1;+++
}
```

A Svelte 'instrumentaliza' esta atribuição com algum código que diz ao DOM que precisará de ser atualizado.
