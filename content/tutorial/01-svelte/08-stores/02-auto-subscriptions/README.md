---
title: Subscrições Automáticas
---

A aplicação no exemplo anterior funciona, mas existe um erro de programação sutil — a memória está subscrita à, mas a subscrição nunca é desfeita. Se o componente fosse instanciado e destruído várias vezes, isto resultaria num _vazamento da memória_.

Começamos por declarar `unsubscribe` no `App.svelte`:

```js
/// file: App.svelte
+++const unsubscribe =+++ count.subscribe((value) => {
	count_value = value;
});
```

> A chamada dum método `subscribe` retorna uma função `unsubscribe`.

Nós agora declaramos `unsubscribe`, mas esta ainda precisa ser chamada, por exemplo, através do gatilho do ciclo de vida `onDestroy`:

```svelte
/// file: App.svelte
<script>
	+++import { onDestroy } from 'svelte';+++
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});

	+++onDestroy(unsubscribe);+++
</script>

<h1>The count is {count_value}</h1>
```

No entanto, começa a ficar um pouco complicado, especialmente se o nosso componente subscrever-se à várias memórias. Ao invés disto, a Svelte tem um truque na manga — podemos referenciar um valor da memória prefixando o nome da memória com `$`:

```svelte
/// file: App.svelte
<script>
	---import { onDestroy } from 'svelte';---
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	---let count_value;---

	---const unsubscribe = count.subscribe(value => {
		count_value = value;
	});---

	---onDestroy(unsubscribe);---
</script>

<h1>The count is {+++$count+++}</h1>
```

> A subscrição automática apenas funciona com as variáveis da memória que são declaradas (ou importadas) no âmbito de aplicação de alto nível dum componente.

Nós não estamos limitados a usar `$count` dentro da marcação — também podemos usá-la em qualquer parte do `<script>`, tal como nos manipuladores de evento ou declarações reativas.

> Qualquer nome começando com `$` é suposto referenciar um valor da memória. É efetivamente um carácter reservado — a Svelte nos impedirá de declarar as nossas próprias variáveis com um prefixo `$`.
