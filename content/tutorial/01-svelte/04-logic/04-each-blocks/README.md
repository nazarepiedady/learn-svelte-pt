---
title: Blocos de each
---

Quando construímos interfaces muitas vezes nos encontramos a trabalhar com listas de dados. Neste exercício, repetimos a marcação do `<button>` várias vezes — mudando a cor todas as vezes — mas ainda existe mais por adicionar.

No lugar de laboriosamente copiar, colar e editar, podemos desfazer-nos de tudo exceto o primeiro botão, e depois usar um bloco `each`:

```svelte
/// file: App.svelte
<div>
	+++{#each colors as color}+++
		<button
			aria-current={selected === 'red'}
			aria-label="red"
			style="background: red"
			on:click={() => selected = 'red'}
		></button>
	+++{/each}+++
</div>
```

> A expressão (`colors`, neste caso) pode ser qualquer vetor ou objeto parecido com um vetor (isto é, que tem uma propriedade `length`). Nós podemos iterar sobre iteráveis genéricos com `each [...iterable]`.

Nós precisamos usar a variável `color` no lugar do `"red"`:

```svelte
/// file: App.svelte
<div>
	{#each colors as color}
		<button
			aria-current={selected === +++color+++}
			aria-label=+++{color}+++
			style="background: +++{color}+++"
			on:click={() => selected = +++color+++}
		></button>
	{/each}
</div>
```

Nós podemos obter o _índice_ atual como um segundo argumento, desta maneira:

```svelte
/// file: App.svelte
<div>
	{#each colors as color, +++i}+++
		<button
			aria-current={selected === color}
			aria-label={color}
			style="background: {color}"
			on:click={() => selected = color}
		>+++{i + 1}+++</button>
	{/each}
</div>
```
