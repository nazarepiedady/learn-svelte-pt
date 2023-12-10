---
title: Elementos de Media
---

Nós podemos vincular às propriedades dos elementos `<audio>` e `<video>`, tornando fácil (por exemplo) construir interface de reprodutor personalizada, como `AudioPlayer.svelte`.

Primeiro, adicionamos o elemento `<audio>` juntamente com os vínculos (usaremos a forma abreviada para `src`, `duration` e `paused`):

```svelte
/// file: AudioPlayer.svelte
<div class="player" class:paused>
+++	<audio
		{src}
		bind:currentTime={time}
		bind:duration
		bind:paused
	/>+++

	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
	/>
```

Depois, adicionamos um manipulador de evento ao `<button>` que alterna `paused`:

```svelte
/// file: AudioPlayer.svelte
<button
	class="play"
	aria-label={paused ? 'play' : 'pause'}
	+++on:click={() => paused = !paused}+++
/>
```

O nosso reprodutor de áudio agora tem funcionalidade básica. Vamos adicionar a habilidade de solicitar uma parte específica duma faixa arrastando o controlo deslizante. Dentro do manipulador `pointerdown` do controlo deslizante existe uma função `seek`, onde podemos atualizar o `time`:

```js
/// file: AudioPlayer.svelte
function seek(e) {
	const { left, width } = div.getBoundingClientRect();

	let p = (e.clientX - left) / width;
	if (p < 0) p = 0;
	if (p > 1) p = 1;

	+++time = p * duration;+++
}
```

Quando a faixa terminar, sê simpático — rebobine:

```svelte
/// file: AudioPlayer.svelte
<audio
	{src}
	bind:currentTime={time}
	bind:duration
	bind:paused
+++	on:ended={() => {
		time = 0;
	}}+++
/>
```

O conjunto completo de vínculos para `<audio>` e `<video>` é como se segue — sete vínculos de _apenas leitura_...:

- `duration` (apenas leitura) — a duração total do vídeo, em segundos
- `buffered` (apenas leitura) — um vetor de objetos `{start, end}`
- `seekable` (apenas leitura) — idem
- `played` (apenas leitura) — idem
- `seeking` (apenas leitura) — booleano
- `ended` (apenas leitura) — booleano
- `readyState` (apenas leitura) — número entre (e incluindo) 0 e 4

...e cinco vínculos _bidirecionais_:

- `currentTime` — o ponto atual no vídeo, em segundos
- `playbackRate` — quão rápido reproduzir o vídeo, onde `1` é 'normal'
- `paused` — este deveria ser auto-explicativo
- `volume` — um valor entre 0 e 1
- `muted` — um valor booleano onde `true` é abafado

Os vídeos têm adicionalmente vínculos de `videoWidth` e `videoHeight` de apenas leitura.
