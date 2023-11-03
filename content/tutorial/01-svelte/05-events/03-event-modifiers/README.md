---
title: Modificadores de Evento
---

Os manipuladores de evento do DOM podem ter _modificadores_ que alteram o seu comportamento. Por exemplo, um manipulador com um modificador `once` executará apenas uma única vez:

```svelte
/// file: App.svelte
<button on:click+++|once+++={() => alert('clicked')}>
	Click me
</button>
```

A lista completa de modificadores:

- `preventDefault` — chama `event.preventDefault()` antes de executar o manipulador. Por exemplo, é útil para manipular o formulário do lado do cliente.
- `stopPropagation` — chama `event.stopPropagation()`, impedindo o evento de alcançar o próximo elemento.
- `passive` — melhora o desempenho do deslocamento sobre os eventos de toque ou roda (a Svelte o adicionará automaticamente onde for seguro)
- `nonpassive` — define explicitamente `passive: false`
- `capture` — dispara o manipular durante a fase de [_captura_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture) ao invés da fase de [_transbordamento_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling)
- `once` — remove o manipulador depois de executar uma vez
- `self` — apenas aciona manipulador se `event.target` for o próprio elemento
- `trusted` — apenas aciona o manipulador se `event.isTrusted` for `true`, o que significa que o evento foi acionado por uma ação do utilizador ao invés de por causa de algum JavaScript chama `element.dispatchEvent(...)`

Nós podemos encadear os modificadores juntos, por exemplo `on:click|once|capture={...}`.
