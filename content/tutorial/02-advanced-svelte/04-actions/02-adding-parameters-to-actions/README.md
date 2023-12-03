---
title: Adicionando Parâmetros
---

Tal como as transições e animações, uma ação pode receber um argumento, com o qual a função de ação será chamada juntamente com o elemento a que pertence.

Neste exercício, queremos adicionar uma dica de ferramenta ao `<button>` usando a biblioteca [`Tippy.js`](https://atomiks.github.io/tippyjs/). A ação já está ligada com `use:tooltip`, mas se pairarmos ponteiro do rato sobre o botão (ou se o focarmos com o teclado) a dica de ferramenta não contém conteúdo.

Primeiro, a ação precisa aceitar algumas opções e passá-las à Tippy:

```js
/// file: App.svelte
function tooltip(node, +++options+++) {
	const tooltip = tippy(node, +++options+++);

	return {
		destroy() {
			tooltip.destroy();
		}
	};
}
```

Depois, precisamos passar algumas opções à ação:

```svelte
/// file: App.svelte
<button use:tooltip+++={{ content, theme: 'material' }}+++>
	Hover me
</button>
```

A dica de ferramenta agora funciona — quase. Se mudarmos o texto no `<input>`, a dica de ferramenta não refletirá o novo conteúdo. Nós podemos corrigir isto adicionando um método `update` ao objeto retornado:

```js
/// file: App.svelte
function tooltip(node, options) {
	const tooltip = tippy(node, options);

	return {
+++		update(options) {
			tooltip.setProps(options);
		},+++
		destroy() {
			tooltip.destroy();
		}
	};
}
```
