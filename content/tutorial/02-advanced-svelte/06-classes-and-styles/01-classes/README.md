---
title: A Diretiva de Classe
---

Tal como acontece com qualquer outro atributo, podemos especificar classes com um atributo de JavaScript. Neste exemplo, poderíamos adicionar uma classe `flipped` ao cartão:

```svelte
/// file: App.svelte
<button
	class="card +++{flipped ? 'flipped' : ''}+++"
	on:click={() => flipped = !flipped}
>
```

Este funciona como esperado — se clicarmos sobre o cartão agora, este virar-se-á.

Nós podemos melhorá-lo. Adicionar ou remover uma classe baseado nalguma condição é um padrão tão comum no desenvolvimento de interface que a Svelte inclui uma diretiva especial para simplificá-lo:

```svelte
/// file: App.svelte
<button
	class="card"
	+++class:flipped={flipped}+++
	on:click={() => flipped = !flipped}
>
```

Esta diretiva significa 'adicionar a classe `flipped` sempre que `flipped` for verdadeiro'.