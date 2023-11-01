---
title: Valores Predefinidos
---

Nós podemos facilmente especificar valores predefinidos para as propriedades no `Nested.svelte`:

```svelte
/// file: Nested.svelte
<script>
	export let answer +++= 'a mystery'+++;
</script>
```

Se agora adicionarmos um segundo componente _sem_ uma propriedade `answer`, recuará ao padrão (ou, valor predefinido):

```svelte
/// file: App.svelte
<Nested answer={42}/>
+++<Nested />+++
```
