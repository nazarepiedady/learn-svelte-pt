---
title: Ranhuras
---

Tal como os elementos podem ter filhos...

```html
/// no-file
<div>
	<p>I'm a child of the div</p>
</div>
```

...os componentes também podem. No entanto, antes dum componente puder aceitar filhos, este precisa saber onde colocá-los. Nós fazemos isto com o elemento `<slot>`. Colocamos este dentro do `Card.svelte`:

```svelte
/// file: Card.svelte
<div class="card ">
	+++<slot />+++
</div>
```

Nós podemos agora colocar as coisas no cartão:

```svelte
/// file: App.svelte
<Card>
	+++<span>Patrick BATEMAN</span>+++
	+++<span>Vice President</span>+++
</Card>
```
