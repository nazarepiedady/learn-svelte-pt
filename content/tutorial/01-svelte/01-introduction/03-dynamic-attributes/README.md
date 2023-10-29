---
title: Atributos Dinâmicos
---

Tal como podemos usar chavetas para controlar o texto, podemos usá-las para controlar os atributos do elemento.

Nossa imagem não tem um `src` — vamos adicionar um:

```svelte
/// file: App.svelte
<img +++src={src}+++ />
```

Está melhor. Mas se pairarmos o ponteiro do rato sobre o `<img>` no editor, a Svelte dá-nos um aviso:

> A11y: O elemento `<img>` deveria ter um atributo `alt`.

Quando construímos aplicações da Web, é importante certificar-se de que são _acessíveis_ à uma base de utilizadores tão vasta quanto possível, incluindo pessoas com (por exemplo) deficiências visuais ou de movimento, pessoas sem máquinas poderosas ou boas conexões de internet. A acessibilidade (abreviada a11y) nme sempre é fácil de acertar, mas a Svelte ajudá-nos, avisando-nos se escrevermos marcação inacessível.

Neste caso, falta-nos o atributo `alt` que descreve a imagem para pessoas usando leitores de ecrã (ou tela), ou pessoas com conexões de internet lentas ou com falhas que não podem descarregar a imagem. Vamos adicionar um:

```svelte
/// file: App.svelte
<img src={src} +++alt="A man dances."+++ />
```

Nós podemos usar as chavetas _dentro dos_ atributos. Tente mudá-lo para `"{name} dances."` — lembre de declarar uma variável `name` no bloco `<script>`.

## Atributos Abreviados

Não é incomum ter um atributo onde o nome e valor são os mesmos, como `src={src}`. A Svelte dá-nos uma abreviatura conveniente para estes casos:

```svelte
/// file: App.svelte
<img +++{src}+++ alt="{name} dances." />
```
