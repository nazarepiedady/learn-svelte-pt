---
title: <svelte:document>
---

O elemento `<svelte:document>` permite-nos ouvir os eventos que disparam sobre o `document`. Isto é útil para com os eventos como `selectionchange`, os quais não disparam sobre a `window`.

Adicionamos o manipulador de `selectionchange` ao marcador `<svelte:document>`:

```svelte
/// file: App.svelte
<svelte:document +++on:selectionchange={handleSelectionChange}+++ />
```

> Nós devemos evitar os manipuladores de `mouseenter` e `mouseleave` sobre este elemento, uma vez que estes eventos não são disparados sobre `document` em todos os navegadores. Nós usamos `<svelte:body>`.
