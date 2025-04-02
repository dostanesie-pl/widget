# Calculator widget dostanesie.pl

## Config

Options should be passed as `data-*` attributes to `<div id="dostanesie-pl-widget"></div>` element.

### Example

```html

<div
        id="dostanesie-pl-widget"
        data-debug="true"
></div>

```

### Available options

All options with default values can be found in [IWidgetConfig.ts](src/features/config/types/IWidgetConfig.ts).

| Name               | Type    | Optional | Default value                                                                                             | Description                                                                                           |
|--------------------|---------|----------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| rspo               | string  | yes      |                                                                                                           | School RSPO number                                                                                    |
| disable-animations | boolean | yes      | `false`                                                                                                   | Disables all animations, can be useful when parent page supports different accessibility settings     |
| show-branding      | boolean | yes      | `true` when not using WordPress. On WordPress pages it's set to `false` to comply with plugins guideline. | When set to `false`, hides logo of dostanesie.pl and removes button with link to dostanesie.pl portal |
| debug              | boolean | yes      | `false`                                                                                                   | Enables verbose logging in console                                                                    |

## WordPress plugin

### Special cases when using as WordPress plugin

1. `show-branding` is set to `false` by default to comply
   with [WordPress plugin guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/#10-plugins-may-not-embed-external-links-or-credits-on-the-public-site-without-explicitly-asking-the-users-permission).
2. Plugin is not loaded from cdn.dostanesie.pl. Instead, it is provided with plugin zip file.
3. `debug` option is always set in `<div>` attribute, value can be changed by switching `debug` in page editor or via
   `WP_DEBUG` php var

### development

```bash
pnpm install
# build widget in wordpress mode
pnpm run dev:wordpress

cd wordpress
pnpm install
# start wordpress locally, requires docker
pnpm run wp-env

# start webpack in watch mode, requires prebuilt widget
pnpm run wordpress:dev
```
