---
title: Intercalações
---

Agora que cobrimos os fundamentos, é hora de aprender algumas técnicas avançadas, começando com _movimento_.

Definir valores e assistir o DOM atualizar-se automaticamente é fantástico. Sabes o que é mais fantástico? Intercalar estes valores. A Svelte inclui ferramentas para ajudar-nos a construir interfaces astutas que usam animação para comunicar mudanças.

Vamos começar mudando a memória `progress` para uma memória `tweened`:

```svelte
/// file: App.svelte
<script>
	import { +++tweened+++ } from 'svelte/+++motion+++';

	const progress = +++tweened+++(0);
</script>
```

O ato de clicar sobre os botões faz a barra de progresso animar para o seu novo valor. Mesmo assim, é um pouco robótica e satisfatória. Nós precisamos adicionar uma função atenuante:

```svelte
/// file: App.svelte
<script>
	import { tweened } from 'svelte/motion';
	+++import { cubicOut } from 'svelte/easing';+++

	const progress = tweened(0, +++{
		duration: 400,
		easing: cubicOut
	}+++);
</script>
```

> O módulo `svelte/easing` contém as [equações atenuantes de Penner](https://web.archive.org/web/20190805215728/http://robertpenner.com/easing/), ou podemos fornecer a nossa própria função `p => t` onde `p` e `t` são ambos valores entre 0 e 1.

O conjunto completo de opções disponíveis para `tweened`:

- `delay` — milissegundos antes da intercalação começar
- `duration` — ou a duração da intercalação em milissegundos, ou uma função `(from, to) => milliseconds` permitindo-nos (por exemplo) especificar as intercalações mais longas para mudanças maiores no valor
- `easing` — uma função `p => t`
- `interpolate` — uma função `(from, to) => t => value` personalizada para interpolar entre valores arbitrários. Por padrão, a Svelte interpolará entre números, datas, e vetores e objetos formados de maneira idêntica (desde contenham apenas números e datas ou outros vetores e objetos válidos). Se quisermos interpolar (por exemplo) sequências de caracteres de cor ou matrizes de transformação, fornecemos um interpolador personalizado

Nós também podemos passar estas opções à `progress.set` e `progress.update` como segundo argumento, no caso que sobreporão os padrões. Os métodos `set` e `update`, ambos retornam uma promessa que resolve quando a intercalação terminar.
