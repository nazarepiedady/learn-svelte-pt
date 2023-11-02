<script>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// o `name` é atualizado sempre que
	// o valor da propriedade mudar...
	export let name;

	// ..mas a variável "emoji" é fixada sobre a inicialização
	// do componente porque usa `const` ao invés de `$:`
	const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>