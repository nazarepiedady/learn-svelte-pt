<script>
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<h1>Não encontrada</h1>
	<p><a href="/">Seguir a /</a></p>
{:else}
	<p>
		Interpretação do lado do servidor falhada com o código de estado de HTTP
		<a
			target="_blank"
			href="https://http.dog/{$page.status}"
			>{$page.status}</a
		>
	</p>

	<pre>{$page.error?.stack || ''}</pre>
{/if}

<style>
	h1 {
		font-weight: 200;
		font-size: 2rem;
		margin: 0 0 0.5em 0;
	}

	pre {
		font-family: Menlo, Monaco, monospace;
		font-size: 13px;
		background: hsl(0, 100%, 95%);
		padding: 1rem;
		overflow-x: auto;
		border-radius: 5px;
		color: hsl(0, 100%, 30%);
	}
</style>
