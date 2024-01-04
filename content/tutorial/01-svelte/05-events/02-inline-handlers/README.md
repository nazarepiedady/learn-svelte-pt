---
title: Manipuladores Em Linha
---

Nós também podemos declarar manipuladores de evento em linha:

```svelte
/// file: App.svelte
<script>
	let m = { x: 0, y: 0 };

	---function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}---
</script>

<div
	on:pointermove={+++(e) => {
		m = { x: e.clientX, y: e.clientY };
	}+++}
>
	The pointer is at {m.x} x {m.y}
</div>
```

> Em algumas abstrações podemos ver recomendações para evitar manipuladores de evento em linha por motivos de desempenho, especialmente dentro dos laços de repetições. Este conselho não aplica-se à Svelte — o compilador sempre fará a coisa certa, seja qual for a forma que escolhermos.
