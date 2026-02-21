# Contributing to StreetLight

Thank you for your interest in contributing to StreetLight! 🚦

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Features

We welcome feature suggestions! Please:
- Check if the feature has already been suggested
- Describe the feature and its use case
- Explain how it benefits Pakistani citizens
- Provide mockups or examples if possible

### Pull Requests

1. **Fork the repository**
2. **Create a branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary
   - Test your changes thoroughly
4. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of changes"
   ```
   Use conventional commits:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for improvements
   - `Docs:` for documentation
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**
   - Describe your changes
   - Link related issues
   - Add screenshots if UI changes

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules (`npm run lint`)
- Use meaningful variable names
- Keep components small and focused
- Write self-documenting code

### Component Structure

```typescript
// Good component structure
'use client'; // If using client-side features

import React from 'react';

interface ComponentProps {
  title: string;
  onAction?: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
};

export default Component;
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use theme colors from `tailwind.config.js`
- Keep animations subtle and performant

### Accessibility

- Use semantic HTML
- Add proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain good color contrast

### Testing (Future)

Once tests are set up:
- Write tests for new features
- Ensure existing tests pass
- Aim for good coverage

## Project Priorities

1. **User Experience** - Simple, intuitive interface
2. **Performance** - Fast loading, responsive
3. **Accessibility** - Usable by everyone
4. **Localization** - Support for Urdu and English
5. **Security** - Protect user data

## Questions?

Feel free to:
- Open a discussion on GitHub
- Ask in pull request comments
- Contact the team

---

🇵🇰 Thank you for helping make Pakistan's cities better!

