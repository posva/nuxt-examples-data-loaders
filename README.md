<p align="center">
  <a href="https://nuxt.com"><img src="https://nuxt.com/assets/design-kit/icon-green.svg" alt="Nuxt" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://router.vuejs.org"><img src="https://router.vuejs.org/logo.svg" alt="Vue Router" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://pinia-colada.esm.dev"><img src="https://pinia-colada.esm.dev/logo.svg" alt="Pinia Colada" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://pinia.vuejs.org"><img src="https://pinia.vuejs.org/logo.svg" alt="Pinia" height="48"></a>
</p>

<h1 align="center">Nuxt + Data Loaders</h1>

<p align="center">
  Data fetching in <a href="https://nuxt.com">Nuxt</a> with
  <a href="https://router.vuejs.org/data-loaders/">Vue Router data loaders</a> —
  in two flavors: <code>defineBasicLoader</code> and
  <code>defineColadaLoader</code> (powered by
  <a href="https://pinia-colada.esm.dev">Pinia Colada</a> +
  <a href="https://pinia.vuejs.org">Pinia</a>).
</p>

## Run

```sh
pnpm install
pnpm dev
```

The same three examples (a static call, a product by route param, and a quote rendered by a
child component) are implemented under `/colada` and `/basic`.

## Why data loaders over `useFetch` / `useAsyncData`

- **Ready before render.** Loaders run in a navigation guard, so data is available on first
  paint — no loading flash, no `await` in `setup`.
- **Navigation-aware.** Navigation waits for the data (or opt out with `lazy`), and a thrown
  error can abort the navigation just like a route guard.
- **Route-driven.** The fetch input comes from the route (`to.params` / `to.query`); navigate
  to refetch. Tracked params mean it only refetches when the data actually depends on them.
- **Shareable & deduplicated.** Call the same loader composable in any component — requests are
  deduplicated and the data is shared, no prop drilling.
- **Cancellation built in.** Each loader gets an `AbortSignal` that aborts the request when the
  navigation changes.
- **One consistent API**, independent of the underlying fetching strategy.

### With [Pinia Colada](https://pinia-colada.esm.dev)

- Caching with `staleTime`, automatic deduplication, and cache invalidation through
  `useMutation()`.
- SSR that hydrates **without** triggering an extra fetch (via `@pinia/colada-nuxt`).

## Docs

- [Nuxt](https://nuxt.com) · [Data fetching](https://nuxt.com/docs/getting-started/data-fetching)
- [Vue Router data loaders](https://router.vuejs.org/data-loaders/)
- [Pinia Colada](https://pinia-colada.esm.dev) · [Nuxt module](https://pinia-colada.esm.dev/nuxt.html)
- [Pinia](https://pinia.vuejs.org)
