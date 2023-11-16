---
title: Entradas de Caixa de Confirmação
---

As caixas de confirmação são usadas para alternar entre estados. No lugar de vincular à `input.value`, vinculamos à `input.checked`:

```svelte
/// file: App.svelte
<input type="checkbox" +++bind:+++checked={yes}>
```
