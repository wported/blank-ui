# Contributing to Blank UI

Thank you for your interest in contributing to Blank UI! This document provides guidelines and instructions for contributing.

## 📑 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a welcoming and inclusive community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/blank-ui.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## How to Contribute

### Types of Contributions

- **Bug Fixes**: Fix reported bugs or issues you discover
- **New Features**: Add new components or enhance existing ones
- **Documentation**: Improve documentation, README, or code comments
- **Performance Improvements**: Optimize code for better performance
- **Testing**: Add or improve tests
- **Translations**: Help translate documentation into other languages

## Development Setup

```bash
# Install dependencies
npm install

# Run demo in development mode
npm run demo:dev

# Build the library
npm run build

# Run tests (if available)
npm test
```

## Pull Request Guidelines

### Before Submitting

1. Ensure your code follows the coding standards
2. Test your changes thoroughly
3. Update documentation if needed
4. Rebase your branch on the latest main branch
5. Squash unnecessary commits

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests pass (if applicable)
- [ ] Documentation is updated
- [ ] Commit messages are clear and descriptive
- [ ] Changes are tested in the demo application

### PR Process

1. Create a pull request from your fork
2. Fill out the PR template with all relevant information
3. Wait for review from maintainers
4. Address any feedback or requested changes
5. Once approved, your PR will be merged

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types for all functions and components
- Avoid using `any` type unless absolutely necessary
- Use interfaces for component props

### Vue Components

```vue
<template>
  <div class="bl-component">
    <!-- Component content -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium'
})

const emit = defineEmits<{
  click: [value: string]
}>()
</script>

<style scoped>
.bl-component {
  /* Styles */
}
</style>
```

### CSS/SCSS

- Use CSS variables for theming
- Follow BEM naming convention
- Keep styles scoped to components
- Support both light and dark themes

### File Naming

- Components: PascalCase (e.g., `BlButton.vue`)
- Utilities: camelCase (e.g., `useTheme.ts`)
- Styles: kebab-case (e.g., `button-styles.css`)

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```
feat(button): add loading state
fix(input): resolve validation error display
docs(readme): update installation instructions
refactor(theme): improve color variable structure
```

## Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Vue version, etc.)
- **Code example** that demonstrates the issue

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Vue Version: [e.g. 3.5.0]
- Blank UI Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

## Feature Requests

We welcome feature requests! Before submitting, please:

1. Check if the feature already exists or is planned
2. Provide a clear use case
3. Explain how it would benefit the project

### Feature Request Template

```markdown
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

## Questions?

If you have questions, feel free to:
- Open a discussion on GitHub
- Check existing issues and discussions
- Read the documentation

---

Thank you for contributing to Blank UI! 🎉
