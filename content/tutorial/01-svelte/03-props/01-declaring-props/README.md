---
title: Declaração de Propriedades
---

Até aqui, lidávamos exclusivamente com o estado interno — isto quer dizer que, os valores apenas são acessíveis dentro num dado componente. 

Em qualquer aplicação real, precisaremos de passar dados dum componente para os seus filhos. Para fazer isto, precisamos declarar as _propriedades_, geralmente abreviadas para `props`. Na Svelte, fazemos isto com a palavra-chave `export`. Edite o componente `Nested.svelte`:

```svelte
/// file: Nested.svelte
<script>
	+++export+++ let answer;
</script>
```

> Tal como a `$:`, isto pode parecer um pouco estranho à primeira. Isto não é como `export` normalmente funciona nos módulos da JavaScript! Apenas por agora aceitemos como está — em breve tornar-se-á segunda natureza.
