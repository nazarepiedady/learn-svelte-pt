---
title: <svelte:element>
---

De maneira semelhante, nem sempre sabemos com antecedência qual tipo de elemento de DOM interpretar. `<svelte:element>` revela-se útil nesta situação. Tal como acontece com o [exercício anterior](svelte-component), podemos substituir uma longa sequência de blocos de `if` por um único elemento dinâmico:

```svelte
/// file: App.svelte
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

+++<svelte:element this={selected}>
	I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>+++
```

O valor da `this` pode ser qualquer sequência de caracteres, ou um valor falso — se for falso, nenhum elemento é interpretado.