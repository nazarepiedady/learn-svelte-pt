---
title: Memórias Legíveis
---

Nem todas as memórias devem ser graváveis por quem quer que tiver uma referência às mesmas. Por exemplo, podemos ter uma memória representando a posição do rato ou a localização geográfica do utilizador, e não faz sentido ser capaz de definir estes valores a partir do 'lado de fora'. Para estes casos, temos as memórias _legíveis_.

Abrimos o `stores.js`. O primeiro argumento para `readable` é um valor inicial, o qual pode ser `null` ou `undefined` se ainda não tivermos um. O segundo argumento é uma função `start` que recebe uma função de resposta `set` e retorna uma função `stop`. A função `start` é chamada quando a memória recebe o seu primeiro subscritor; `stop` é chamada quando o último subscritor desfazer a subscrição:

```js
/// file: stores.js
export const time = readable(+++new Date()+++, function start(set) {
+++	const interval = setInterval(() => {
		set(new Date());
	}, 1000);+++

	return function stop() {
		+++clearInterval(interval);+++
	};
});
```
