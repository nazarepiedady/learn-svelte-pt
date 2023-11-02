---
title: Blocos de if
---

A HTML não tem uma maneira de expressar _lógica_, como condicionais e laços de repetições. A Svelte tem.

Para interpretar condicionalmente alguma marcação, a envolvemos num bloco de `if`. Vamos adicionar algum texto que aparece quando `count` for maior do que `10`:

```svelte
/// file: App.svelte
<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

+++{#if count > 10}
	<p>{count} is greater than 10</p>
{/if}+++
```

Experimente — atualize o componente, e clique sobre o botão.
