---
title: Adicionando Parâmetros
---

As funções de transição podem aceitar parâmetros. Substituímos a transição `fade` por `fly`...:

```svelte
/// file: App.svelte
<script>
	import { +++fly+++ } from 'svelte/transition';
	let visible = true;
</script>
```

...e a aplicamos ao `<p>` juntamente com algumas opções:

```svelte
/// file: App.svelte
<p transition:+++fly={{ y: 200, duration: 2000 }}+++>
	+++Flies+++ in and out
</p>
```

Nota que a transição é _reversível_ — se alternarmos a caixa de confirmação enquanto a transição estiver em curso, a transição é feita a partir do ponto atual, não do início ou do fim.
