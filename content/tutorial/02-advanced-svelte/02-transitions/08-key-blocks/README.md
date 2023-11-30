---
title: Blocos Chaves
---

Os blocos chaves destroem e recriam os seus conteúdos quando o valor duma expressão muda. Isto é útil se quisermos um elemento reproduza a sua transição sempre que um valor mudar ao invés de apenas quando o elemento entrar ou sair do DOM.

Eis, por exemplo, que gostaríamos de reproduzir a transição `typewriter` a partir do `transition.js` sempre que a mensagem de carregamento, isto é, `i` mudar. Envolvemos o elemento `<p>` num bloco chave:

```svelte
/// file: App.svelte
+++{#key i}+++
	<p in:typewriter={{ speed: 10 }}>
		{messages[i] || ''}
	</p>
+++{/key}+++
```