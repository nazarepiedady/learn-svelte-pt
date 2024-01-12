---
title: <svelte:self>
---

A Svelte fornece uma variedade de elementos embutidos. O primeiro, `<svelte:self>`, permite um componente conter-se a si mesmo de maneira recursiva.

É útil para coisas como esta visão da árvore da pasta, onde as pastas podem conter _outras_ pastas. No `Folder.svelte` queremos ser capazes de fazer isto...

```svelte
/// file: Folder.svelte
{#if file.files}
	<Folder {...file}/>
{:else}
	<File {...file}/>
{/if}
```

....mas é impossível, porque um módulo não pode importa-se a si mesmo. No lugar disto, usamos `<svelte:self>`:

```svelte
/// file: Folder.svelte
{#if file.files}
	+++<svelte:self {...file}/>+++
{:else}
	<File {...file}/>
{/if}
```
