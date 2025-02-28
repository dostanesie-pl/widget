# Dostaniesie.pl Widget

A customizable calculation widget for the Dostaniesie.pl platform that helps 8th-grade students calculate their high school admission points based on grades, exam results, and competitions.

## Overview

This widget allows users to:
- Enter certificate grades for subjects
- Input exam results
- Add contest achievements
- Calculate total admission points
- View eligibility for different high schools

## Setup Local Environment

### Prerequisites
- Node.js (latest LTS version)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd widget

# Install dependencies
pnpm install
```

The postinstall script will automatically fetch subject data.

## Development

```bash
# Start development server
pnpm dev

# Format code
pnpm fmt
```

Access the development server at http://localhost:5173.

## Building

```bash
# Build as embeddable library (UMD/IIFE)
pnpm build:lib

# Build as static site
pnpm build:static

# Preview static build
pnpm preview
```

## Integration on Websites

### Method 1: Script Tag

Add the following code to your HTML:

```html
<div id="dostanesie-widget-container"></div>
<script src="https://path-to-your-host/dostanesie-pl-widget.umd.js"></script>
<script>
  DostanesiePlWidget.mount({
    container: document.getElementById('dostanesie-widget-container'),
    // Optional configuration
  });
</script>
```

### Method 2: NPM Package

If you're using a module bundler:

```bash
npm install dostanesie-pl-widget
```

```javascript
import { mount } from 'dostanesie-pl-widget';

mount({
  container: document.getElementById('dostanesie-widget-container'),
  // Optional configuration
});
```

## Configuration Options

The widget accepts the following configuration options:

```javascript
{
  container: HTMLElement, // Required: DOM element where the widget will be mounted
  theme: 'light' | 'dark', // Optional: Widget theme
  defaultLanguage: 'pl', // Optional: Default language
  // Additional configuration options...
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Format your code (`pnpm fmt`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Please follow the existing code style and include appropriate tests if applicable.

## License

[Include license information here]

## Contact

[Include contact information here]