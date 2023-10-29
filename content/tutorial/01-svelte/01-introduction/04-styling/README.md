---
title: Estilização
---

Tal como na HTML, podemos adicionar um marcador `<style>` ao nosso componente. Vamos adicionar alguns estilos ao elemento `<p>`:

```svelte
/// file: App.svelte
<p>This is a paragraph.</p>

<style>
+++	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}+++
</style>
```

Com importância, estas regras estão _isoladas ao componente_. Nós não mudaremos acidentalmente o estilo dos elementos `<p>` noutro lado na nossa aplicação, conforme veremos na próxima etapa.
