---
title: Entradas de Texto
---

Como regra geral, o fluxo de dados na Svelte é de _cima para baixo_ — um componente pai pode definir propriedades sobre um componente filho, e um componente pode definir atributos sobre um elemento, mas não de maneira inversa.

Algumas vezes é útil quebrar esta regra. Consideremos o caso do elemento `<input>` neste componente — _poderíamos_ adicionar um manipulador de evento de `on:input` que define o valor de `name` para `event.target.value`, mas é um pouco... mais complicado. Pode ficar ainda mais complicado com os outros elementos de formulário, como veremos.

Ao invés disto, podemos usar a diretiva `bind:value`:

```svelte
/// file: App.svelte
<input +++bind:+++value={name}>
```

Isto significa que não apenas as mudanças ao valor da `name` atualizarão o valor da entrada, mas as mudanças ao valor da entrada atualizarão a `name`.