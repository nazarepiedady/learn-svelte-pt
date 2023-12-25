---
title: Propriedades da Ranhura
---

O componente pode passar dados _de volta_ ao seu conteúdo ranhurado através das _propriedades da ranhura_. Nesta aplicação, temos uma lista de cores de CSS nomeadas. Digitar no `<input>` filtrará a lista.

Neste momento, cada linha está exibindo `AliceBlue`, e por muito bonita que seja a cor, não é o que queremos.

Abrimos `FilterableList.svelte`. A `<slot>` está sendo interpretado para cada item filtrado na lista. Passamos o dado à ranhura:

```svelte
/// file: FilterableList.svelte
<div class="content">
	{#each data.filter(matches) as item}
		<slot +++{item}+++ />
	{/each}
</div>
```

(Tal como noutros contextos, `{item}` é abreviação para `item={item}`.)

Depois, noutro lado, expomos os dados ao conteúdo ranhurado com a diretiva `let:`:

```svelte
/// file: App.svelte
<FilterableList
	data={colors}
	field="name"
	+++let:item={row}+++
>
	<div class="row">
		<span class="color" style="background-color: {row.hex}" />
		<span class="name">{row.name}</span>
		<span class="hex">{row.hex}</span>
		<span class="rgb">{row.rgb}</span>
		<span class="hsl">{row.hsl}</span>
	</div>
</FilterableList>
```

Finalmente, livramos-nos da variável marcadora de posição, que já não precisamos:

```svelte
/// file: App.svelte
<script>
	import FilterableList from './FilterableList.svelte';
	import { colors } from './colors.js';

	---let row = colors[0];---
</script>
```

> As ranhuras nomeadas também podem ter propriedades; usamos a diretiva `let` sobre um elemento com um atributo `slot="..."`, ao invés do próprio componente.
