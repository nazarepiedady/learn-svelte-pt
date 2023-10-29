---
title: Componentes Encaixados
---

Seria inviável colocar a nossa aplicação inteira num único componente. Ao invés disto, podemos importar os componentes a partir de outros ficheiros e incluí-los na nossa marcação.

Adicione um marcador `<script>` ao topo do `App.svelte` que importa `Nested.svelte`...

```svelte
/// file: App.svelte
+++<script>
	import Nested from './Nested.svelte';
</script>+++
```

...e inclua um componente `<Nested />`:

```svelte
/// file: App.svelte
<p>This is a paragraph.</p>
+++<Nested />+++
```

Repara que mesmo que `Nested.svelte` tenha um elemento `<p>`, os estilos do `App.svelte` não vazam para dentro do componente encaixado.

> Os nomes do componente são sempre escritos com a primeira letra em maiúscula, para distingui-los dos elementos de HTML.
