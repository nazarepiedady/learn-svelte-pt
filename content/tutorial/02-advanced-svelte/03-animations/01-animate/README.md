---
title: A Diretiva de Animação
---

No [capítulo anterior](/tutorial/deferred-transitions), usamos transições retardadas para criar a ilusão de movimento a medida que os elementos se movem de uma lista de afazer à outra.

Para completar a ilusão, também precisamos aplicar movimento aos elementos que _não são_ transitando. Para isto, usamos a diretiva `animate`.

Primeiro, importamos a função `flip` — `flip` significa ['First (Primeiro), Last (Último), Invert (Inverter), Play (Reproduzir)'](https://aerotwist.com/blog/flip-your-animations/) — a partir do `svelte/animate` no `TodoList.svelte`:

```svelte
/// file: TodoList.svelte
<script>
	+++import { flip } from 'svelte/animate';+++
	import { send, receive } from './transition.js';

	export let store;
	export let done;
</script>
```

Depois o adicionamos aos elementos `<li>`:

```svelte
/// file: TodoList.svelte
<li
	class:done
	in:receive={{ key: todo.id }}
	out:send={{ key: todo.id }}
	+++animate:flip+++
>
```

O movimento é um pouco lento neste caso, então podemos adicionar um parâmetro `duration`:

```svelte
/// file: TodoList.svelte
<li
	class:done
	in:receive={{ key: todo.id }}
	out:send={{ key: todo.id }}
	animate:flip+++={{ duration: 200 }}+++
>
```

> `duration` também pode ser uma função `d => milliseconds`, onde `d` é o número de pixeis que o elemento tem de viajar

Nota que todas as transições e animações estão sendo aplicadas com a CSS, ao invés de serem com a JavaScript, o que significa que não bloquearão (ou serão bloqueadas pela) a linha principal.
