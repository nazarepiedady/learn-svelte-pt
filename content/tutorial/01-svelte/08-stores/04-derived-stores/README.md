---
title: Memórias Derivadas
---

Nós podemos criar uma memória cujo valor é baseado no valor duma ou mais _outras_ memórias com `derived`. Construindo o nosso exemplo anterior, podemos criar uma memória que deriva o momento que a página foi aberta:

```js
/// file: stores.js
export const elapsed = derived(
    time,
    ($time) => +++Math.round(($time - start) / 1000)+++
);
```

> É possível derivar uma memória a partir de várias memórias de entrada, e definir (`set`) explicitamente um valor ao invés de retorná-lo (o que é útil para derivar valores de maneira assíncrona). Consulte a [referência da API](https://svelte.dev/docs#run-time-svelte-store-derived) por mais informação.
