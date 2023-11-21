<script>
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<h1>Não encontrada</h1>
	<p><a href="/">Ir à /</a></p>
{:else}
	<p>
		A interpretação do lado do servidor falhou com o código de estado de HTTP
		<a
			target="_blank"
			href="https://httpstatusdogs.com/{$page.status}"
			>{$page.status}</a
		>
	</p>
{/if}

<style>
	h1 {
		font-weight: 200;
		font-size: 2rem;
		margin: 0 0 0.5em 0;
	}
</style>
