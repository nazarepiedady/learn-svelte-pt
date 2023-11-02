---
title: Blocos de await
---

A maioria das aplicações da Web precisam lidar com dados assíncronos nalgum momento. A Svelte torna fácil _esperar_ o valor das [promessas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) diretamente na nossa marcação:

```svelte
/// file: App.svelte
+++{#await promise}+++
	<p>...waiting</p>
+++{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}+++
```

> Apenas a `promise` mais recente é considerada, querendo dizer que não precisamos preocupar-nos com a condição de corrida.

Se sabemos que a nossa promessa não pode ser rejeitada, podemos omitir o bloco de `catch`. Nós também podemos omitir o primeiro bloco se não quisermos mostrar nada até a promessa ser resolvida:

```svelte
/// no-file
{#await promise then number}
	<p>The number is {number}</p>
{/await}
```
