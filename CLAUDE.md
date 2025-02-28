# Dostanesie Widget Development Guide

## Build Commands
- `pnpm dev` - Start development server
- `pnpm build:lib` - Build widget as library
- `pnpm build:static` - Build static version
- `pnpm preview` - Build and preview static version
- `pnpm fmt` - Format code with Prettier

## Code Style Guidelines
- **Components**: Use PascalCase for React components, functional components with hooks
- **Imports**: Organize with prettier-plugin-organize-imports; use @/ path alias
- **Types**: Define interfaces for props, extend base component props when needed
- **Formatting**: 2-space indentation, use TypeScript strict mode
- **Structure**: Feature components in features/, UI components in components/ui/
- **Naming**: Descriptive names, PascalCase for components, camelCase for functions/variables
- **Error handling**: Use TypeScript for type safety, optional chaining for nullable values

## Technology Stack
- React 19 with TypeScript
- Vite for building and bundling
- Chakra UI for components
- react-hook-form for form handling