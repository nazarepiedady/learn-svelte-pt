---
title: Blocos de each com chave
---

Por padrão, quando modificamos o valor dum bloco de `each`, este adicionará e removerá itens no _final_ do bloco, e atualizará quaisquer valores que mudaram. Isto pode não ser o que queremos.

É mais fácil mostrar o porquê do que explicar. Clique sobre o botão 'Remove first thing' algumas vezes, e repara no que acontece: este não remove o primeiro componente `<Thing>`, porém o _último_ nó do DOM. Depois atualiza o valor da `name` nos nós restantes do DOM, mas não o emoji, o que é corrigido quando cada `<Thing>` for criado.

No lugar deste comportamento, gostaríamos de apenas remover o primeiro componente `<Thing>` e o seu nó do DOM, e deixar os outros inalterados.

Para fazer isto, especificamos um identificador único (ou "chave") para o bloco de `each`:

```svelte
/// file: App.svelte
{#each things as thing (+++thing.id+++)}
	<Thing name={thing.name}/>
{/each}
```

Neste exemplo, `(thing.id)` é a _chave_, que diz à Svelte como descobrir qual nó do DOM mudar quando o componente atualizar-se.

> Nós podemos usar qualquer objeto como chave, uma vez que a Svelte usa um `Map` internamente — em outras palavras poderíamos fazer `(thing)` ao invés de `(thing.id)`. No entanto, usar uma sequência de caracteres ou número é geralmente mais seguro, uma vez que significa que a identidade persiste sem a igualdade referencial, por exemplo quando atualizamos com dados frescos a partir dum servidor de API.
