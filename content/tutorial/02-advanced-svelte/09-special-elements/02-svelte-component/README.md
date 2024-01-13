---
title: <svelte:component>
---

Um componente pode mudar o seu tipo completamente com o `<svelte:component>`. Neste exercício, queremos mostrar `RedThing.svelte` se a `color` for `red`, `GreenThing.svelte` se for `green`, e assim por diante.

Nós _poderíamos_ fazer isto com uma sequência de blocos de `if`...

```svelte
/// file: App.svelte
{#if selected.color === 'red'}
	<RedThing/>
{:else if selected.color === 'green'}
	<GreenThing/>
{:else if selected.color === 'blue'}
	<BlueThing/>
{/if}
```

...mas é um pouco complexo. Ao invés disto, podemos criar um único componente dinâmico:

```svelte
/// file: App.svelte
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

+++<svelte:component this={selected.component}/>+++
```

O valor da `this` pode ser qualquer construtor de componente, ou um valor falso — se for falso, nenhum componente é interpretado.
