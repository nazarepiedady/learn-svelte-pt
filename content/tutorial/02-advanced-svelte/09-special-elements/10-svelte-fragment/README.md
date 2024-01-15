---
title: <svelte:fragment>
---

O elemento `<svelte:fragment>` permite-nos colocar conteúdo numa ranhura nomeada sem embrulhar o mesmo num elemento de DOM contentor.

Neste exercício, estamos fazendo um jogo Tic-Tac-Toe. Para formar um grade, os elementos `<button>` no `App.svelte` deveriam ser descendentes diretos do elemento `<div class="board">` no `Board.svelte`.

No momento, está horrivelmente quebrada, porque são filhos do `<div slot="game">`. Vamos corrigir isto:

```svelte
/// file: App.svelte
<+++svelte:fragment+++ slot="game">
	{#each squares as square, i}
		<button
			class="square"
			class:winning={winningLine?.includes(i)}
			disabled={square}
			on:click={() => {
				squares[i] = next;
				next = next === 'x' ? 'o' : 'x';
			}}
		>
			{square}
		</button>
	{/each}
</+++svelte:fragment+++>
```