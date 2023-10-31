---
title: Tomadas de Posições
---

Nós não estamos limitados à declarar _valores_ reativos — também podemos executar de maneira reativa _tomadas de posições_ arbitrárias. Por exemplo, podemos registar o valor da `count` sempre que esta mudar:

```js
/// file: App.svelte
let count = 0;

+++$: console.log(`the count is ${count}`);+++
```

Nós podemos agrupar facilmente as tomadas de posições com um bloco:

```js
/// file: App.svelte
$: +++{+++
	console.log(`the count is ${count}`);
	console.log(`this will also be logged whenever count changes`);
+++}+++
```

Nós até podemos colocar o `$:` na frente de coisas como blocos de `if`:

```js
/// file: App.svelte
$: +++if (count >= 10)+++ {
	alert('count is dangerously high!');
	count = 0;
}
```
