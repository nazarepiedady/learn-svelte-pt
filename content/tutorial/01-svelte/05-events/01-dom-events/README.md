---
title: Eventos do DOM
---

Como já vimos brevemente, podemos ouvir qualquer evento do DOM sobre um elemento (tais como clique ou [movimento do ponteiro](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)) com a diretiva `on:`:

```svelte
/// file: App.svelte
<div +++on:pointermove={handleMove}+++>
	The pointer is at {m.x} x {m.y}
</div>
```
