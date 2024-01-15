---
title: <svelte:options>
---

O elemento `<svelte:options>` permite-nos especificar opções do compilador.

Nós usaremos a opção `immutable` como exemplo. Nesta aplicação, o componente `<Todo>` pisca sempre que este receber novo dado. Clicar sobre um dos itens alterna o seu estado `done` criando um vetor de `todos` atualizado. Isto faz os _outros_ itens `<Todo>` piscarem, mesmo se não terminarem fazendo quaisquer mudanças ao DOM.

Nós podemos otimizar isto dizendo ao componente `<Todo>` esperar dados _imutáveis_. Isto significa que prometemos nunca _alterar_ a propriedade `todo`, mas ao invés disto criaremos novos objetos de afazeres sempre que as coisas mudarem.

Adicionamos isto no princípio do `Todo.svelte`:

```svelte
/// file: Todo.svelte
<svelte:options immutable={true} />
```

> Nós podemos encurtar isto a `<svelte:options immutable/>` se preferirmos.

Agora, quando alternamos os afazeres clicando sobre os mesmos, apenas o componente atualizado pisca.

As opções que podem ser definidos estão listados abaixo:

- `immutable={true}` — nunca usamos dados mutáveis, então o compilador pode fazer verificações de igualdade referencial simples para determinar se os valores tiverem mudado
- `immutable={false}` — o padrão. A Svelte será mais conservadora sobre se ou não os objetos mutáveis mudaram.
- `accessors={true}` — adiciona recuperadores e definidores para as propriedades do componente
- `accessors={false}` — o padrão
- `namespace="..."` — o espaço de nome onde este componente será usado, mais comummente `"svg"`
- `customElement="..."` — o nome a usar quando compilamos este componente como um elemento personalizado

Consultar a [referência da API](https://svelte-docs-pt.vercel.app/docs) por mais informação sobre estas opções.
