---
title: Blocos de else
---

Tal como na JavaScript, um bloco de `if` pode ter um bloco de `else`:

```svelte
/// file: App.svelte
{#if count > 10}
	<p>{count} is greater than 10</p>
+++{:else}
	<p>{count} is between 0 and 10</p>+++
{/if}
```

> Um carácter `#` sempre indica um marcador de _abertura de bloco_. Um carácter `/` sempre indica um marcador de _fechamento de bloco_. Um carácter `:`, como em `{:else}`, indica um marcador de _continuação de bloco_. Não temos nada a recear — já aprendemos quase toda sintaxe que a Svelte adiciona ao HTML.
