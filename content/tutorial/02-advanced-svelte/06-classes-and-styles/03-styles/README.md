---
title: A Diretiva de Estilo
---

Tal como acontece com a `class`, podemos literalmente escrever atributos `style` em linha, porque a Svelte de fato apenas HTML com partes refinadas:

```svelte
/// file: App.svelte
<button
	class="card"
	+++style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod"+++
	on:click={() => flipped = !flipped}
>
```

Quando temos muitos estilos, as coisas podem começar a sair da ordem. Nós podemos arrumar as coisas usando a diretiva `style:`:

```svelte
/// file: App.svelte
<button
	class="card"
+++	style:transform={flipped ? 'rotateY(0)' : ''}
	style:--bg-1="palegoldenrod"
	style:--bg-2="black"
	style:--bg-3="goldenrod"+++
	on:click={() => flipped = !flipped}
>
```