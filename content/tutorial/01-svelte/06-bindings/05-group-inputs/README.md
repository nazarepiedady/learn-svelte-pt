---
title: Entradas de Grupo
---

Se tivermos várias entradas de `type="radio"` ou `type="checkbox"` relacionadas ao mesmo valor, podemos usar `bind:group` juntamente com o atributo `value`. As entradas de rádio no mesmo grupo são mutuamente exclusivas; as entradas de caixa de confirmação no mesmo grupo formam um vetor de valores selecionados.

Adicionamos `bind:group={scoops}` às entradas de rádio...:

```svelte
/// file: App.svelte
<input
	type="radio"
	name="scoops"
	value={number}
	+++bind:group={scoops}+++
/>
```

...e `bind:group={flavours}` às entradas de caixa de confirmação:

```svelte
/// file: App.svelte
<input
	type="checkbox"
	name="flavours"
	value={flavour}
	+++bind:group={flavours}+++
/>
```
