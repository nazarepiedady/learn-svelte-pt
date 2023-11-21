---
title: Memórias Graváveis
---

Nem todo estado da aplicação pertence ao interior da hierarquia de componente da nossa aplicação. Algumas vezes, teremos valores que precisam ser acessados por vários componentes independentes, ou por um módulo normal de JavaScript.

Na Svelte, fazemos isto com as _memórias_. Uma memória é simplesmente um objeto com um método `subscribe` que permite as partes interessadas serem notificadas sempre que o valor da memória mudar. No `App.svelte`, `count` é uma memória, e definimos `count_value` na função de resposta da `count.subscribe`.

Abrimos `stores.js` para ver a definição de `count`. É uma memória _gravável_, o que significa que tem os métodos `set` e `update` além do `subscribe`.

Agora, no `Incrementer.svelte`, ligamos o botão `+`:

```js
/// file: Incrementer.svelte
function increment() {
	+++count.update((n) => n + 1);+++
}
```

Agora, o ato de clicar sobre o botão `+` deve atualizar a contagem. Fazemos o inverso para o `Decrementer.svelte`.

Finalmente, no `Resetter.svelte`, implementamos `reset`:

```js
/// file: Resetter.svelte
function reset() {
	+++count.set(0);+++
}
```
