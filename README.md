# learn.svelte.dev (Português)

Um tutorial interativo completo sobre como construir aplicações com a Svelte.

## Configuração

Este repositório usa a [`pnpm`](https://pnpm.io/).

## Desenvolvendo a Aplicação

Primeiro, executamos `node scripts/create-common-bundle`. Este pacote contém tudo o que é necessário para executar uma aplicação de SvelteKit (Vite, esbuild, SvelteKit, compilador da Svelte, etc) que pode ser posteriormente descompactado num servidor para criar e executar uma instância duma aplicação de SvelteKit (que alimenta a janela de saída do tutorial). Depois, executamos `dev`:

```bash
node scripts/create-common-bundle
pnpm dev
```

Para construirmos para produção e executarmos localmente:

```bash
pnpm build
pnpm preview
```

## Criando Novos Tutoriais

Os tutoriais estão dentro de `content`. Cada tutorial consiste num `README.md`, uqe é o texto à esquerda, e as pastas `app-a` e `app-b`, que representam o estado inicial e o estado resolvido. Os ficheiros que se mantêm inalterados podem ser omitidos da `app-b`. Os ficheiros são marcados como eliminados em `app-b` se começarem com `__delete`. As pastas são marcadas como eliminadas na `app-b` se contiverem um ficheiro nomeado `__delete`.

## Atualizando as Dependências do Tutorial

Atualizamos a dependência (por exemplo, Svelte) tanto na raiz quanto no `package.json` da `content/common`. Na raiz fazemos `pnpm i` (para atualizar o `pnpm-lock.yaml`), na `content/common` fazemos `npm i` (para atualizar o `package-lock.json`).