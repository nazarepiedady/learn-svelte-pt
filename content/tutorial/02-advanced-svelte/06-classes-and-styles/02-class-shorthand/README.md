---
title: Diretiva de Classe Abreviada
---

Frequentemente, o nome da classe será o mesmo que o nome do valor do qual esta depende:

```svelte
/// no-file
<button
	class="card"
	class:flipped={flipped}
	on:click={() => flipped = !flipped}
>
```

Nestes casos, podemos usar uma forma abreviada:

```svelte
/// file: App.svelte
<button
	class="card"
	+++class:flipped+++
	on:click={() => flipped = !flipped}
>
```
