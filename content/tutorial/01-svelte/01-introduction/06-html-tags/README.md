---
title: Marcadores de HTML
---

Habitualmente, as sequências de caracteres são inseridas como texto simples, o que significa que caracteres como `<` e `>` não têm nenhum significado.

Mas algumas vezes precisamos desenhar HTML diretamente num componente. Por exemplo, as palavras que lês neste momento existem num ficheiro de Markdown que é incluído nesta página como uma bolha (ou *blob*) de HTML.

Na Svelte, podemos fazer isto com o marcador especial `{@html ...}`:

```svelte
/// file: App.svelte
<p>{+++@html+++ string}</p>
```

> **Aviso!**, a Svelte não realiza nenhuma higienização da expressão dentro do `{@html ...}` antes deste ser inserido no DOM. Isto não é um problema se o conteúdo é algo que confiamos como um artigo que nós mesmos escrevemos. No entanto, se for algum conteúdo duvidoso do utilizador, por exemplo um comentário sobre um artigo, então é critico que o escapemos manualmente, de outro modo arriscamos-nos a expor os nossos utilizadores aos ataques de <a href="https://owasp.org/www-community/attacks/xss/" target="_blank">programação entre aplicação</a> (ou XSS).
