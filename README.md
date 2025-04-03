# Calculator widget dostanesie.pl

## Usage

1. Add `<script>` to `<head>` section of your page

```html
<head>
  <!-- all other scripts that you already use -->

  <script
    src="https://cdn.dostanesie.pl/dostanesie-pl-widget.js"
    type="text/javascript"
  ></script>
</head>
```

2. Add `<div>` to `<body>` section of your page

```html
<body>
  <!-- rest of your site content -->

  <div id="dostanesie-pl-widget"></div>
</body>
```

## Config

Options should be passed as `data-*` attributes to `<div id="dostanesie-pl-widget"></div>` element.

### Example

```html
<div id="dostanesie-pl-widget" data-debug="true"></div>
```

### Available options

All options with default values can be found in [IWidgetConfig.ts](src/features/config/types/IWidgetConfig.ts).

| Name               | Type    | Optional | Default value                                                                                             | Description                                                                                           |
| ------------------ | ------- | -------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| disable-animations | boolean | yes      | `false`                                                                                                   | Disables all animations, can be useful when parent page supports different accessibility settings     |
| show-branding      | boolean | yes      | `true` when not using WordPress. On WordPress pages it's set to `false` to comply with plugins guideline. | When set to `false`, hides logo of dostanesie.pl and removes button with link to dostanesie.pl portal |
| debug              | boolean | yes      | `false`                                                                                                   | Enables verbose logging in console                                                                    |

## WordPress plugin

### Naming

- **widget** is react application responsible for rendering calculator and its logic stored in [src](./src/) folder
- **plugin** is a block based WordPress plugin written in JavaScript and PHP stored in [wordpress](wordpress-plugin/calculator-dostanesie-pl/) folder

### Special cases when using as WordPress plugin

1. `show-branding` is set to `false` by default to comply
   with [WordPress plugin guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/#10-plugins-may-not-embed-external-links-or-credits-on-the-public-site-without-explicitly-asking-the-users-permission).
2. Plugin is not loaded from cdn.dostanesie.pl. Instead, it is provided with plugin zip file.
3. `debug` option is always set in `<div>` attribute, value can be changed by switching `debug` in page editor or via
   `WP_DEBUG` php [variable](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/).
4. `<div>` is generated dynamically by WordPress plugin to allow using multiple widgets on the same page.
5. Widget is built using dedicated [vite mode](vite.config.ts) and [entrypoint](src/entrypoints/wordpress.tsx).

### WordPress plugin development

```bash
cd wordpress-plugin/calculator-dostanesie-pl

pnpm install
# build widget in wordpress-plugin mode
pnpm run widget:dev:wordpress

cd wordpress-plugin
pnpm install
# start wordpress-plugin locally, requires docker
pnpm run wordpress-plugin:wp-env

# start webpack in watch mode, requires prebuilt widget
pnpm run wordpress-plugin:dev
```

### WordPress plugin i18n

Make sure you have [wp-cli](https://wp-cli.org/) installed.

```bash
cd wordpress-plugin/calculator-dostanesie-pl

# gather all strings from source code
pnpm run wordpress-plugin:generate-pot

# copy pot file to actual translation file
cp languages/dstpl-pl_PL.pot languages/dstpl-pl_PL.po

# generate json used by frontend part
pnpm run wordpress-plugin:generate-json

# generate json
pnpm run wordpress-plugin:generate-mo
```
