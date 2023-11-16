---
title: Entradas Numéricas
---

No DOM, tudo é uma sequência de caracteres. O que é inútil quando lidamos com entradas numéricas — `type="number"` e `type="range"` — já que isto significa que temos de lembrar de coagir `input.value` antes de usá-lo.

Com a `bind:value`, a Svelte cuida disto por nós:

```svelte
/// file: App.svelte
<label>
	<input type="number" +++bind:+++value={a} min="0" max="10" />
	<input type="range" +++bind:+++value={a} min="0" max="10" />
</label>

<label>
	<input type="number" +++bind:+++value={b} min="0" max="10" />
	<input type="range" +++bind:+++value={b} min="0" max="10" />
</label>
```
