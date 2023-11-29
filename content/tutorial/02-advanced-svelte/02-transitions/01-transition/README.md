---
title: A Diretiva de Transição
---

Nós podemos criar interfaces mais apelativas fazendo uma transição graciosa de elementos para dentro e para fora do DOM. A Svelte torna isto muito fácil com a diretiva `transition`.

Primeiro, importamos a função `fade` a partir do `svelte/transition`...:

```svelte
/// file: App.svelte
<script>
	+++import { fade } from 'svelte/transition';+++
	let visible = true;
</script>
```

...depois a adicionamos ao elemento `<p>`:

```svelte
/// file: App.svelte
<p +++transition:fade+++>
	Fades in and out
</p>
```
