---
title: Partilhando Código
---

Em todos os exemplos que vimos, o bloco `<script>` contém o código que executa-se quando a instância de cada componente for inicializada. Para a vasta maioria dos componentes, é tudo que alguma vez precisaremos.

Muito ocasionalmente, precisaremos executar algum código fora da instância dum componente individual. Por exemplo: retornando ao nosso reprodutor de áudio personalizado dum [exercício anterior](media-elements), podemos reproduzir todas as quatro faixas simultaneamente. Seria melhor se ao reproduzirmos uma parássemos todas as outras.

Nós podemos fazer isto declarando um bloco `<script context="module">`. O código contido dentro deste executar-se-á uma vez, quando o módulo avaliar-se primeiro, ao invés de quando um componente for instanciado. Colocamos isto no princípio do `AudioPlayer.svelte` (nota que isto é um marcador de programa _separado_):

```svelte
/// file: AudioPlayer.svelte
+++<script context="module">
	let current;
</script>+++
```

É possível agora para os componentes 'falarem' uns aos outros sem nenhuma gestão de estado:

```svelte
/// file: AudioPlayer.svelte
<audio
	src={src}
	bind:currentTime={time}
	bind:duration
	bind:paused
+++	on:play={(e) => {
		const audio = e.currentTarget;

		if (audio !== current) {
			current?.pause();
			current = audio;
		}
	}}+++
	on:ended={() => {
		time = 0;
	}}
/>
```
