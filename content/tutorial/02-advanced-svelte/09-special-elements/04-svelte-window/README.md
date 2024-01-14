---
title: <svelte:window>
---

Tal como podemos adicionar ouvintes de evento a qualquer elemento do DOM, podemos adicionar ouvintes de evento ao objeto `window` com `<svelte:window>`.

Já temos uma função `handleKeydown` declarada — agora tudo que precisamos fazer é adicionar um ouvinte de `keydown`:

```svelte
/// file: App.svelte
<svelte:window +++on:keydown={handleKeydown}+++ />
```

> Tal como acontece com os elementos do DOM, podemos adicionar [modificadores de evento](/tutorial/event-modifiers) como `preventDefault`.
