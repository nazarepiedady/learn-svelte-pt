---
title: Dimensões
---

Todo elemento de nível de bloco tem os vínculos de `clientWidth`, `clientHeight`, `offsetWidth`, `offsetHeight`:

```svelte
/// file: App.svelte
<div +++bind:clientWidth={w} bind:clientHeight={h}+++>
	<span style="font-size: {size}px" contenteditable>{text}</span>
	<span class="size">{w} x {h}px</span>
</div>
```

Estes vínculos são apenas para leitura — mudar os valores de `w` e `h` não surtirá qualquer efeito sobre o elemento.

> Os elementos são medidos usando uma técnica semelhante à [esta](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/). Existe algum custo envolvido, então não é recomendado usar isto para grandes números de elementos.
>
> Os elementos dispostos em linha (`display: inline`) não podem ser medidos com esta abordagem; nem os elementos que não podem conter outros elementos (tais como `<canvas>`). Nestes casos precisaremos medir um elemento envolvente.
