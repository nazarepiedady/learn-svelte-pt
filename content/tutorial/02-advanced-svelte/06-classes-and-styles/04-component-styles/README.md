---
title: Estilos do Componente
---

Frequentemente, precisamos influenciar os estilos dentro dum componente filho. Talvez queremos pintar estas caixas, de vermelho, verde e azul. 

Uma maneira de fazer isto é com o modificador de CSS `:global`, que permite-nos atingir indiscriminadamente os elementos dentro de outros componentes:

```svelte
/// file: App.svelte
<style>
	.boxes :global(.box:nth-child(1)) {
		background-color: red;
	}

	.boxes :global(.box:nth-child(2)) {
		background-color: green;
	}

	.boxes :global(.box:nth-child(3)) {
		background-color: blue;
	}
</style>
```

Mas existem muitas razões para _não_ fazer isto. Uma razão, é ser extremamente verboso. Outra razão, é frágil — quaisquer mudanças aos detalhes de implementação do `Box.svelte` poderia quebrar o seletor.

Acima de tudo, é tosco. Os componentes devem ser capazes de decidir por si mesmos quais estilos podem ser controlados a parir de 'fora', da mesma maneira que estes decidem quais variáveis são expostas como propriedades. `:global` deve ser usado como uma saída de emergência — um último recurso.

Dentro do `Box.svelte`, mudamos `background-color` para que seja determinado por uma [propriedade personalizada de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):

```svelte
/// file: Box.svelte
<style>
	.box {
		width: 5em;
		height: 5em;
		border-radius: 0.5em;
		margin: 0 0 1em 0;
		background-color: +++var(--color, #ddd)+++;
	}
</style>
```

Qualquer elemento pai (tal como `<div class="boxes">`) pode definir o valor da `--color`, mas também podemos defini-la sobre os componentes individuais:

```svelte
/// file: App.svelte
<div class="boxes">
	<Box +++--color="red"+++ />
	<Box +++--color="green"+++ />
	<Box +++--color="blue"+++ />
</div>
```

Os valores podem ser dinâmicos, tal como qualquer outro atributo.

Esta funcionalidade funciona embrulhando cada componente num `<div style="display: contents">`, onde necessário, e aplicando as propriedades personalizadas a este.
