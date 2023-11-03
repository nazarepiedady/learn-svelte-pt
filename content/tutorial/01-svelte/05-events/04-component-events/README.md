---
title: Eventos do Componente
---

Os componentes também podem despachar eventos. Para o fazer, estes devem criar um despachador de evento. Atualizamos o `Inner.svelte`:

```svelte
/// file: Inner.svelte
<script>
	+++import { createEventDispatcher } from 'svelte';+++

	+++const dispatch = createEventDispatcher();+++

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```

> `createEventDispatcher` deve ser chamada quando o componente for instanciado primeiro — não podemos fazê-lo depois dentro de, por exemplo, uma função de resposta `setTimeout`. Isto liga `dispatch` à instância do componente.

Depois, adicionamos um manipulador `on:message` no `App.svelte`:

```svelte
/// file: App.svelte
<Inner +++on:message={handleMessage}+++ />
```

> Nós também podemos tentar mudar o nome do evento para outra coisa. Por exemplo, mudar `dispatch('message', {...})` para `dispatch('greet', {...})` no `Inner.svelte` e mudar o nome do atributo de `on:message` para `on:greet` no `App.svelte`.
