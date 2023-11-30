---
title: Transições Globais
---

Normalmente, as transições atuarão sobre os elementos quando o seu bloco imediato que contém for adicionado ou destruído. Neste exemplo, a alternância da visibilidade da lista inteira não aplica as transições aos elementos individuais da lista.

No lugar disto, gostaríamos que as transições não atuassem apenas quando os itens individuais forem adicionados e removidos com o controlo deslizante mas também quando alternarmos a caixa de confirmação.

Nós podemos alcançar isto com uma transição _global_, que atua quando _qualquer_ bloco que contém as transições for adicionado ou removido:

```svelte
/// file: App.svelte
<div transition:slide+++|global+++>
	{item}
</div>
```

> Na Svelte 3, as transições eram globais por padrão e tínhamos de usar o modificador `|local` para torná-las locais.
