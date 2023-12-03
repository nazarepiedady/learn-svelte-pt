---
title: A Diretiva de Consumo
---

As ações são essencialmente funções do ciclo de vida do nível do elemento. São úteis para coisas como:

- criar interfaces com bibliotecas de terceiros
- imagens carregadas preguiçosamente
- dicas de ferramentas
- adicionar manipuladores de evento personalizados

Nesta aplicação, podemos rabiscar sobre o `<canvas>`, e mudar as cores e o tamanho do pincel através do menu. Mas se abrirmos o menu e percorrermos o ciclo de opções com a tecla Tab, em breve descobriremos que o foco não está _preso_ dentro do modal.

Nós podemos corrigir isto com uma ação. Importamos `trapFocus` a partir do `actions.js`...:

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	+++import { trapFocus } from './actions.js';+++

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
</script>
```

...depois a adicionamos ao menu com a diretiva `use:`:

```svelte
/// file: App.svelte
<div class="menu" +++use:trapFocus+++>
```

Vamos dar uma vista de olhos na função `trapFocus` no `actions.js`. Uma função de ação é chamada com um `node` — o `<div class="menu">` no nosso caso — quando o nó for montado ao DOM, e pode retornar um objeto de ação com um método `destroy`.

Primeiro, precisamos adicionar um ouvinte de evento que interceta o premir da tecla Tab:

```js
/// file: actions.js
focusable()[0]?.focus();

+++node.addEventListener('keydown', handleKeydown);+++
```

Segundo, precisamos fazer algum limpeza quando o nó for desmontado — removendo o ouvinte de evento, e devolvendo o foco para onde estava antes do elemento ser montado:

```js
/// file: actions.js
focusable()[0]?.focus();

node.addEventListener('keydown', handleKeydown);

+++return {
	destroy() {
		node.removeEventListener('keydown', handleKeydown);
		previous?.focus();
	}
};+++
```

Agora, quando abrirmos o menu, podemos percorrer o ciclo de opções com a tecla Tab.
