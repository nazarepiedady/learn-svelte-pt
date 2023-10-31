---
title: Declarações
---

A Svelte atualiza automaticamente o DOM quando estado do nosso componente mudar. Frequentemente, algumas partes do estado dum componente precisam ser computados a partir de _outras_ partes (tais como uma `fullname` derivada duma `firstname` e uma `lastname`), e computada novamente sempre que mudarem.

Para estas, temos as _declarações reativas_. Elas parecem-se com isto:

```js
/// file: App.svelte
let count = 0;
+++$: doubled = count * 2;+++
```

Se uma declaração reativa consistir inteiramente duma atribuição à uma variável não declarada, a Svelte injetará uma declaração `let` em nosso nome.

> Não precisamos de preocupar-nos se isto parece um pouco estranho. É JavaScript [válido](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) (se for pouco convencional), que a Svelte interpreta para querer dizer 'executar novamente este código sempre que qualquer um dos valores referenciados mudar'. Uma vez que estivermos habituados, não existe como voltar atrás.

Vamos usar `doubled` na nossa marcação:

```svelte
/// file: App.svelte
<button>...</button>

+++<p>{count} doubled is {doubled}</p>+++
```

É claro que, poderíamos apenas escrever `{count * 2}` na marcação — não precisamos de usar valores reativos. Os valores reativos tornam-se particularmente valiosos (sem trocadilhos intencionados) quando precisamos de referenciá-los várias vezes, ou quando temos valores que dependem de _outros_ valores reativos.

> Nota que as declarações e tomadas de posições reativas executarão depois dos outros código do programa e antes da marcação do componente ser interpretada.
