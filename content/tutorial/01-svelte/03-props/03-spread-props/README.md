---
title: Propagar Propriedades
---

Neste exercício, esquecemos de especificar a propriedade `version` esperada pelo `PackageInfo.svelte`, o que significa que este exibe 'version undefined'.

Nós _poderíamos_ corrigir isto adicionando a propriedade `version`...

```svelte
/// file: App.svelte
<PackageInfo
    name={pkg.name}
	speed={pkg.speed}
    +++version={pkg.version}+++
	website={pkg.website}
/>
```

...mas uma vez que as propriedades de `pkg` correspondem às propriedades esperadas do componente, podemos 'propagá-las' para o componente:

```svelte
/// file: App.svelte
<PackageInfo +++{...pkg}+++ />
```

> Inversamente, se precisarmos de referenciar todas as propriedades que foram passadas à um componente, incluindo aquelas que não foram declaras com `export`, podemos fazer isto acessando `$$props` diretamente. Geralmente não é recomendado, uma vez que é difícil para Svelte otimizar, porém é útil em casos raros.
