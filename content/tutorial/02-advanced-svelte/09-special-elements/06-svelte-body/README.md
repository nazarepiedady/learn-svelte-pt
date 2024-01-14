---
title: <svelte:body>
---

Semelhante ao `<svelte:window>`, o elemento `<svelte:body>` permite-nos ouvir os eventos que disparam sobre `document.body`. Isto é útil para com os eventos `mouseenter` e `mouseleave`, os quais não disparam sobre a `window`.

Adicionamos estes manipuladores de `mouseenter` e `mouseleave` ao marcador `<svelte:body>`...

```svelte
/// file: App.svelte
<svelte:body
	+++on:mouseenter={() => hereKitty = true}+++
	+++on:mouseleave={() => hereKitty = false}+++
/>
```

...e pairamos sobre o `<body>`.