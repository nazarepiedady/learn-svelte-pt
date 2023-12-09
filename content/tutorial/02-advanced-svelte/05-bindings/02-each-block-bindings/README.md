---
title: Vínculos de Bloco Each
---

Nós podemos vincular às propriedades dentro dum bloco `each`:

```svelte
/// file: App.svelte
{#each todos as todo}
	<li class:done={todo.done}>
		<input
			type="checkbox"
			+++bind:+++checked={todo.done}
		/>

		<input
			type="text"
			placeholder="What needs to be done?"
			+++bind:+++value={todo.text}
		/>
	</li>
{/each}
```

> Nota que interagir com estes elementos de `<input>` mudará o vetor. Se preferimos trabalhar com dados imutáveis, devemos evitar estes vínculos e ao invés destes usar manipuladores de evento.
