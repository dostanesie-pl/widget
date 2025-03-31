## wordpress plugin

### development

```bash
pnpm install
# build widget in wordpress mode
pnpm run build:wordpress

cd wordpress
pnpm install
# start wordpress locally, requires docker
pnpm run wp-env

# start webpack in watch mode, requires prebuilt widget
pnpm run wordpress:dev
```
