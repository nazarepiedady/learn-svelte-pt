---
title: Alternativas de Ranhura
---

Um componente pode especificar _alternativas_ para quaisquer ranhuras que são deixadas vazias, colocando o conteúdo dentro do elemento `<slot>`:

```svelte
/// file: Card.svelte
<div class="card">
	<header>
		<slot name="telephone">
			+++<i>(telephone)</i>+++
		</slot>
		
		<slot name="company">
			+++<i>(company name)</i>+++
		</slot>
	</header>

	<slot>
		+++<i>(name)</i>+++
	</slot>
		
	<footer>
		<slot name="address">
			+++<i>(address)</i>+++
		</slot>
	</footer>
</div>
```