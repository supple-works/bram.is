# Agents

## Repository overview

This project uses pnpm workspaces to manage multiple packages. The workspaces are configured as follows:

### Package map

| Package | Path           | Purpose                       |
| ------- | -------------- | ----------------------------- |
| `web`   | `packages/web` | The front-end web application |
| `cms`   | `packages/cms` | The content management system |

### Web

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Methodology**: Cube

### CMS

- **Framework**: Sanity CMS

## Directory-Specific Context

| Path                            | Active instructions                                                            |
| ------------------------------- | ------------------------------------------------------------------------------ |
| `packages/web/**/*.{astro,css}` | [docs/instructions/CSS.instructions.md](docs/instructions/CSS.instructions.md) |

## Development Tools

### ESLint

- **Configuration**: Antfu

### Prettier

- **Usage**: For code formatting
