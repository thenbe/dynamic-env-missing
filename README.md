# setup
```bash
pnpm install
```

# dev mode: env object is populated correctly

```bash
cd packages/site
pnpm dev
# go to homepage
# correct env is logged to console
```

# preview/prod mode: env object is empty

```bash
cd packages/site
pnpm build && pnpm preview
# go to homepage
# empty object is logged to console
```