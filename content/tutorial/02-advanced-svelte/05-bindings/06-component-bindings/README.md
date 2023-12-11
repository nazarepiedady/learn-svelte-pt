---
title: Vínculos do Componente
---

Tal como podemos vincular às propriedades dos elementos do DOM, podemos vincular às propriedades do componente. Por exemplo, podemos vincular à propriedade `value` deste componente `<Keypad>` como se fosse um elemento de formulário:

```svelte
/// file: App.svelte
<Keypad
	+++bind:value={pin}+++
	on:submit={handleSubmit}
/>
```

Agora, quando o utilizador interagir com o teclado, o valor do `pin` componente pai é atualizado imediatamente.

> Use os vínculos de componente moderadamente. Pode ser rastrear o fluxo de dados em torno da nossa aplicação se tivermos muitos destes, especialmente se não existir 'uma única fonte de verdade'.
