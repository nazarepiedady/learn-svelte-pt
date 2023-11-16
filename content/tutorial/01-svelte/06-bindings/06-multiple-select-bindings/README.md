---
title: Várias Seleções
---

Um elemento `<select>` pode ter um atributo `multiple`, neste caso povoará um vetor ao invés de selecionar um único valor.

Substituímos as caixas de confirmação por um um `<select multiple>`:

```svelte
/// file: App.svelte
<h2>Flavours</h2>

+++<select multiple bind:value={flavours}>+++
	{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
+++		<option>{flavour}</option>+++
	{/each}
+++</select>+++
```

Nota que somos capazes de omitir o atributo `value` sobre o `<option>`, uma vez que o valor é idêntico ao conteúdo do elemento.

> Pressionamos e seguramos a tecla `control` (ou a tecla `command` no MacOS) para selecionar várias opções.
