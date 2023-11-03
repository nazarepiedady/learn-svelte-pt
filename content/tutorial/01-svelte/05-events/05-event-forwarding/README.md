---
title: Expedição do Evento
---

Ao contrário dos eventos do DOM, os eventos do componente não _transbordam_. Se quisermos ouvir um evento sobre algum componente profundamente encaixado, os componentes intermediários devem _expedir_ o evento.

Neste caso, temos o mesmo `App.svelte` e `Inner.svelte` como no [capítulo anterior](/tutorial/component-events), mas agora existe um componente `Outer.svelte` que contém `<Inner/>`.

Uma maneira que _poderíamos_ resolver o problema é adicionar `createEventDispatcher` ao `Outer.svelte`, ouvindo o evento `message`, e criando um manipulador para este:

```svelte
/// file: Outer.svelte
<script>
	import Inner from './Inner.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Inner on:message={forward}/>
```

Porém é muito código à escrever, então a Svelte oferece-nos uma abreviação equivalente — um diretiva de evento `on:message` sem um valor significa 'expedir todos os eventos de `message`':

```svelte
/// file: Outer.svelte
<script>
	import Inner from './Inner.svelte';
</script>

<Inner +++on:message+++/>
```
