# Gemini Development Guidelines

This document provides guidelines for Gemini, a large language model from Google, to follow when assisting with the development of this project.

## Core Principles

- **Project Conventions:** Rigorously adhere to existing project conventions. Before making changes, analyze surrounding code, tests, and configuration to understand the established patterns.
- **Library and Framework Usage:** Do not assume a library or framework is available. Verify its usage within the project by checking `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, and observing existing code.
- **Style and Structure:** Mimic the style (formatting, naming), structure, framework choices, typing, and architectural patterns of the existing codebase.
- **Idiomatic Changes:** Ensure that any changes integrate naturally and idiomatically with the local context, including imports and existing functions/classes.
- **Comments:** Add comments sparingly. Focus on the *why* behind complex logic, not the *what*. Do not add comments unless necessary for clarity.
- **Proactiveness:** Fulfill the user's request thoroughly, including reasonable and directly implied follow-up actions.
- **Clarification:** If a request is ambiguous or has a scope that could be interpreted broadly, ask for clarification before proceeding with significant changes.

## Project Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`.

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, etc.).
- **Main Layout** (`src/pages/index.astro`): A single-page layout that imports all components.
- **Configuration** (`src/config.ts`): This is the single source of truth for all content and customization. **Most changes should be made here.**

### Key Architectural Decisions

1.  **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple.
2.  **Conditional Rendering**: Sections in the UI automatically hide if their corresponding data is removed from the config file.
3.  **Component Independence**: Each section is a self-contained component that reads its data from the `siteConfig` object imported from `src/config.ts`.
4.  **Accent Color System**: A single `accentColor` in the config propagates throughout the site via CSS custom properties.

## Project-Specific Instructions

### Working with Content and Components
- **Modify `src/config.ts` for content changes.** Do not hardcode content directly into components.
- When modifying components, ensure they read directly from the imported `siteConfig` object.
- Use **Tabler Icons** for consistency with existing icons.
- Maintain the existing **monospace font aesthetic** (IBM Plex Mono).

### Astro (`astro.config.mjs`)

- When adding new components, pages, or layouts, ensure they are correctly referenced in the Astro configuration if necessary.
- Follow the existing structure for any new Astro-related files.

### Tailwind CSS (`tailwind.config.mjs`)

- When adding or modifying styles, use Tailwind CSS utility classes whenever possible.
- For new styles that cannot be achieved with existing utility classes, add them to the `tailwind.config.mjs` file under the appropriate theme extensions, following the existing structure.
- **Dark Mode:** All new components and styles must support dark mode, which is activated by the `[data-theme="dark"]` selector. Test all changes in both light and dark modes.
- Do not add custom CSS files unless absolutely necessary. Prefer extending the Tailwind theme.

### TypeScript (`tsconfig.json`)

- Adhere to TypeScript best practices and maintain consistency with existing typing conventions.
- Use types to ensure code quality and catch errors at compile time.

### Configuration Structure (`src/config.ts`)

The `src/config.ts` file exports a `siteConfig` object with the following structure:
- `name`: string
- `title`: string
- `description`: string
- `accentColor`: string
- `social`: object with optional links (email, linkedin, twitter, github)
- `aboutMe`: string
- `skills`: string[]
- `projects`: array of {name, description, link, skills}
- `experience`: array of {company, title, dateRange, bullets}
- `education`: array of {school, degree, dateRange, achievements}

### Docker (`Dockerfile`, `docker-compose.yml`)

- Be aware of the Dockerized environment for development and deployment.
- If you make changes that might affect the environment, consider how they would impact the Docker setup.

### Code Style

- **Imports:** Organize imports logically. For example, group imports from external libraries, project components, and utility functions separately.
- **Descriptions:** Provide a brief, high-level description of any changes you make.
- **Thinking Process:** Think step-by-step to break down complex tasks into smaller, manageable actions. This helps in maintaining clarity and focus.

By following these guidelines, Gemini can provide effective and consistent assistance that aligns with the project's standards and goals.
