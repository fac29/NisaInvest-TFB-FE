# React/TypeScript Project Style Guide

## 1. File Structure and Naming

- Use ``PascalCase`` for component file names: `UserProfile.tsx`
- Use ``camelCase`` for non-component file names: `utils.ts`, `hooks.ts`
- Group related files in directories: `components/`, `hooks/`, `utils/`
- Use index files to export from directories: `components/index.ts`
- Variables:
	- Use ``camelCase`` for variables. 
	- Choose variable names that clearly describe the variable's purpose or content.
	- Choose names that can be pronounced, making discussions about the code easier.
	- Avoid single-letter names or numeric constants without context. Opt for names that can be easily searched in the codebase.
	- For functions or methods, start with verbs that clearly indicate the action.
	- If the variable's purpose isn't clear from its immediate context, add more information to the name.
	- Use positive names for boolean variables, and consider prefix like 'is', 'has', or 'should'.
```typescript
// Good
const userAge = 25;
const isActiveSubscription = true;
const userLastLoginDate = new Date();

// Avoid
const a = 25;
const active = true;
const date = new Date();
```

## 2. Component Structure

- Use functional components with hooks instead of class components
- Define prop types using interfaces
- Use destructuring for props

```typescript
interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
```

## 3. Typing

- Use TypeScript's built-in types where possible: `string`, `number`, `boolean`
- Create interfaces for complex shapes
- Use `type` for union types or simple aliases
- Use `enum` for a fixed set of constants

```typescript
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

type ID = string | number;

enum Status {
  Active,
  Inactive,
  Pending
}
```

## 4. Hooks

- Prefix custom hook names with `use`: `useDataFetcher`
- Use appropriate built-in hooks: `useState`, `useEffect`, `useCallback`, `useMemo`
- Type the state and setter function in `useState`

```typescript
const [count, setCount] = useState<number>(0);
```

## 5. Event Handlers

- Name handlers with the prefix `handle`: `handleClick`, `handleSubmit`
- Type event handlers properly

```typescript
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // Handler logic
};
```

6. Styling with Tailwind CSS

- Use Tailwind CSS classes for styling
- Group related classes for readability
- Use custom Tailwind classes for frequently used combinations
- Avoid inline styles unless absolutely necessary

```typescript
// Good
<div className="p-4 bg-white shadow rounded">
  <h1 className="text-2xl font-bold text-gray-800 mb-2">Title</h1>
  <p className="text-gray-600">Content</p>
</div>

// Avoid
<div style={{ padding: '1rem', backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
  {/* ... */}
</div>
```

## 7. Imports and Exports

- Use named exports for multiple exports from a file
- Use default export for the main component of a file
- Group imports: React, third-party, local

```typescript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './components';
import { useDataFetcher } from './hooks';
```

## 8. Comments and Documentation

- Use JSDoc comments for components and functions
- Keep comments concise and meaningful
- Use TODO comments for temporary code or future improvements

```typescript
/**
 * A component that displays user information.
 * @param {UserProps} props - The component props
 */
const UserInfo: React.FC<UserProps> = ({ name, age }) => {
  // Component logic
};
```

## 9. Testing

- Name test files with `.test.ts` or `.test.tsx` extension
- Use Jest and React Testing Library for tests
- Write descriptive test names

```typescript
describe('UserInfo', () => {
  it('should render the user name and age', () => {
    // Test logic
  });
});
```

## 10. Linting and Formatting

- Use ESLint with TypeScript support
```json
{
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'airbnb',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};
```
- Use Prettier for code formatting
```json
{
	trailingComma: 'es5',
	tabWidth: 4,
	singleQuote: true,
};

```
