---
title: Vínculos de Memória
---

Se uma memória for gravável — isto é, tiver um método `set` — podemos vinculá-la ao seu valor, tal como podemos vinculá-la ao estado do componente local.

Neste exemplo estamos exportando uma memória gravável `name` e uma memória derivada `greeting` a partir do `stores.js`. Atualizamos o elemento `<input>` no `App.svelte`:

```svelte
/// file: App.svelte
<input +++bind:+++value={$name}>
```

Agora a mudança do valor da entrada atualizará `name` e todos os seus dependentes.

Nós também podemos atribuir diretamente aos valores da memória dentro dum componente. Adicionamos um manipulador de evento `on:click` à `name`:

```svelte
/// file: App.svelte
<button +++on:click={() => $name += '!'}+++>
	Add exclamation mark!
</button>
```

A atribuição `$name += '!'` é equivalente à `name.set($name + '!')`.
