---
title: Entradas de Área de Texto
---

O elemento `<textarea>` comporta-se de maneira semelhante à entrada de texto na Svelte — usamos `bind:value`:

```svelte
/// file: App.svelte
<textarea +++bind:value=+++{value}></textarea>
```

Em casos como estes, onde os nomes correspondem-se, também podemos usar a forma abreviada:

```svelte
/// file: App.svelte
<textarea +++bind:value+++></textarea>
```

Isto aplica-se à todos os vínculos, não apenas aos de áreas de texto.
