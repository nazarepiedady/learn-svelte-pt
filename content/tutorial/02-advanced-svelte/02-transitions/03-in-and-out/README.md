---
title: Entrar e Sair
---

No lugar da diretiva `transition`, um elemento pode ter uma diretiva `in` ou `out`, ou ambas em conjunto. Importamos `fade` junto com `fly`...:

```js
/// file: App.svelte
import { +++fade+++, fly } from 'svelte/transition';
```

...e depois substituímos a diretiva `transition` por diretivas `in` e `out` separadas:

```svelte
/// file: App.svelte
<p +++in+++:fly={{ y: 200, duration: 2000 }} +++out:fade+++>
	Flies in, +++fades out+++
</p>
```

Neste caso, as transições _não_ invertidas.
