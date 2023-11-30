---
title: Transições Retardadas
---

Uma funcionalidade especialmente poderosa do motor de transição da Svelte é a habilidade de _retardar_ as transições, para que possam ser coordenadas entre vários elementos.

Consideremos este par de listas de afazeres, nos quais a alternância dum afazer envia-o à lista oposta. No mundo real, os objetos não comportam-se desta maneira — ao invés de desaparecerem e reaparecerem noutro lugar, passaram por uma série de posições intermediárias. O uso de movimento pode ajudar muito os utilizadores a compreenderem o que está acontecendo na nossa aplicação.

Nós podemos alcançar este efeito usando a função `crossfade`, como vimos no `transition.js`, que cria um par de transições chamadas `send` e `receive`. Quando um elemento é 'enviado', procura por um elemento correspondente sendo 'recebido' e gera uma transição que transforma o elemento na posição do seu equivalente e o desvanece. Quando um elemento é 'recebido', o inverso acontece. Se não existir equivalente, a transição `fallback` é usada.

Abrimos `TodoList.svelte`. Primeiro, importamos as transições `send` e `receive` a partir do `transition.js`:

```svelte
/// file: TodoList.svelte
<script>
	+++import { send, receive } from './transition.js';+++

	export let store;
	export let done;
</script>
```

Depois, as adicionamos ao elemento `<li>`, usando a propriedade `todo.id` como uma chave para corresponder os elementos:

```svelte
/// file: TodoList.svelte
<li
	class:done
	+++in:receive={{ key: todo.id }}+++
	+++out:send={{ key: todo.id }}+++
>
```

Agora, quando alternamos os itens, estes movem-se suavemente às suas novas localizações. Os itens não transitórios continuam a saltar de maneira estranha — podemos corrigir isto no próximo capítulo.
