---
title: Atualização de Vetores e Objetos
---

Uma vez que a reatividade da Svelte é acionada por atribuições, usar métodos de vetor tais como `push` e `splice` não causará automaticamente atualizações. Por exemplo, o clique sobre o botão 'Add a number' atualmente não faz nada, apesar de estarmos a chamar `numbers.push(...)` dentro da função `addNumber`.

Uma maneira de corrigir isto é adicionar uma atribuição que de outro modo seria redundante:

```js
/// file: App.svelte
function addNumber() {
	numbers.push(numbers.length + 1);
	+++numbers = numbers;+++
}
```

Porém existe uma solução mais idiomática:

```js
/// file: App.svelte
function addNumber() {
	numbers = +++[...numbers, numbers.length + 1];+++
}
```

Nós podemos usar padrões semelhantes para substituir `pop`, `shift`, `unshift` e `splice`.

As atribuições às _propriedades_ dos vetores e objetos — por exemplo, `obj.foo += 1` ou `array[i] = x` — funcionam em si mesmas da mesma maneira que as atribuições aos valores:

```js
/// file: App.svelte
function addNumber() {
	numbers[numbers.length] = numbers.length + 1;
}
```

Uma simples regra de ouro: o nome da variável atualizada deve aparecer à esquerda da atribuição. Por exemplo isto...

```js
/// no-file
const foo = obj.foo;
foo.bar = 'baz';
```

...não acionará a reatividade sobre a `obj.foo.bar`, a menos que a sigamos de perto com `obj = obj`.
