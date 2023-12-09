---
title: Vínculos de Conteúdo Editável
---

Os elementos com um atributo `contenteditable` suportam os vínculos de `textContent` e `innerHTML`:

```svelte
/// file: App.svelte
<div +++bind:innerHTML={html}+++ contenteditable />
```
