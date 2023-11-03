---
title: Expedição de Evento do DOM
---

A expedição de evento também funciona para os eventos do DOM.

Nós queremos ser notificados a respeito dos cliques sobre o nosso `<BigRedButton>` — para fazer isto, apenas precisamos expedir os eventos de `click` sobre o elemento `<button>` no `BigRedButton.svelte`:

```svelte
/// file: BigRedButton.svelte
<button +++on:click+++>
	Push
</button>
```
