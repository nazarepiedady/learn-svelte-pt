---
title: Vínculos de <svelte:window>
---

Nós também podemos vincular às certas propriedades do `window`, tais como `scrollY`:

```svelte
/// file: App.svelte
<svelte:window +++bind:scrollY={y}+++ />
```

A lista de propriedades que às quais podemos vincular é como se segue:

- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` — um pseudónimo a `window.navigator.onLine`

Todas exceto `scrollX` e `scrollY` são exclusivas para leitura.
