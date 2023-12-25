---
title: Ranhuras Nomeadas
---

O exemplo anterior continha uma _ranhura padrão_, que interpreta os filhos diretos dum componente. Algumas vezes precisaremos de mais controlo sobre a colocação. Nestes casos, podemos usar _ranhuras nomeadas_.

Dentro do `App.svelte`, estamos interpretando um componente `<Card>` que contém `<span slot="telephone">` e outros para `company` e `address`. Adicionaremos as ranhuras nomeadas correspondentes no `Card.svelte`:

```svelte
/// file: Card.svelte
<div class="card">
+++	<header>
		<slot name="telephone" />
		<slot name="company" />
	</header>+++

	<slot />
		
+++	<footer>
		<slot name="address" />
	</footer>+++
</div>
```

Nós precisamos adicionar alguns estilos ao elemento `<small>` no `App.svelte` para que ocupe a sua própria linha. Os conteúdos dos estilos hereditários de `<Card>` a partir do `Card.svelte`, tais como `font-family` (a inscrição é algo chamado de ['Silian Rail'](https://www.youtube.com/watch?v=aZVkW9p-cCU)), mas as regras normais de delimitação do âmbito aplicam-se — nós precisamos adicionar os estilos ao `App.svelte` porque é onde o elemento está:

```svelte
/// file: App.svelte
<style>
	main {
		display: grid;
		place-items: center;
		height: 100%;
		background: url(./wood.svg);
	}

+++	small {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}+++
</style>
```

Alternativamente, poderíamos usar o modificador `:global` dentro do `Card.svelte` para atingir todos elementos `small` dentro do `.card`:

```svelte
/// file: Card.svelte
<style>
	/* ... */ 

	+++.card :global(small) {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}+++
</style>
```