---
title: Exportações
---

Qualquer coisa exportada partir dum bloco de programa `context="module"` torna-se uma exportação a partir do próprio módulo. Vamos exportar uma função `stopAll`:

```svelte
/// file: AudioPlayer.svelte
<script context="module">
	let current;

+++	export function stopAll() {
		current?.pause();
	}+++
</script>
```

Nós podemos agora importar `stopAll` no `App.svelte`...

```svelte
/// file: App.svelte
<script>
	import AudioPlayer, +++{ stopAll }+++ from './AudioPlayer.svelte';
</script>
```

...e usá-la num manipulador de evento:

```svelte
/// file: App.svelte
<div class="centered">
	{#each tracks as track}
		<AudioPlayer {...track} />
	{/each}

+++	<button on:click={stopAll}>
		stop all
	</button>+++
</div>
```

> Nós não podemos ter uma exportação padrão, porque o componente _é_ a exportação padrão.
