---
title: Verificando o Conteúdo da Ranhura
---

Em alguns casos, podemos querer controlar as partes do nosso componente baseado no fato de ter sido passado conteúdo ranhurado. Por exemplo, se removermos o `<header>` do `App.svelte`...

```svelte
/// file: App.svelte
---<header slot="header" class="row">
	<span class="color" />
	<span class="name">name</span>
	<span class="hex">hex</span>
	<span class="rgb">rgb</span>
	<span class="hsl">hsl</span>
</header>---

<div class="row">
	<span class="color" style="background-color: {row.hex}" />
	<span class="name">{row.name}</span>
	<span class="hex">{row.hex}</span>
	<span class="rgb">{row.rgb}</span>
	<span class="hsl">{row.hsl}</span>
</div>
```

...ficamos com uma borda dupla feita porque `FilterableList.svelte` ainda está interpretando o `<div class="header">`.

Nós podemos corrigir isto usando a variável `$$slots` especial no `FilterableList.svelte`:

```svelte
/// file: FilterableList.svelte
+++{#if $$slots.header}+++
	<div class="header">
		<slot name="header"/>
	</div>
+++{/if}+++
```
