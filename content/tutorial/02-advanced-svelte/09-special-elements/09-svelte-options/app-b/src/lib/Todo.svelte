<svelte:options immutable />

<script>
	import { afterUpdate } from 'svelte';
	import flash from './flash.js';

	export let todo;

	let element;

	afterUpdate(() => {
		flash(element);
	});
</script>

<!-- o texto piscará vermelho sempre
		 que o objeto `todo` mudar -->
<li bind:this={element}>
	<label>
		<input type="checkbox" checked={todo.done} on:change />
		{todo.text}
	</label>
</li>