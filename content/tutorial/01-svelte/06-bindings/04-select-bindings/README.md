---
title: Vínculos de Seleção
---

Nós também podemos usar `bind:value` com os elementos `<select>`:

```svelte
/// file: App.svelte
<select
    +++bind:+++value={selected}
    on:change={() => answer = ''}
>
```

Nota que os valores de `<option>` são objetos ao invés de sequências de caracteres. A Svelte não se importa.

> Uma vez que não definimos um valor inicial de `selected`, o vínculo a definirá para o valor padrão (o primeiro na lista) automaticamente. Mesmo assim devemos ter cuidado — até o vínculo ser inicializado, `selected` permanece indefinido, então não podemos referenciar cegamente por exemplo, `selected.id` no modelo de marcação.
