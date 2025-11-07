# Component Audit Specification v1.0

**Purpose**: This document defines the complete set of criteria for auditing and refactoring components in the portfolio project. Use this as the single source of truth when evaluating component compliance.

---

## Table of Contents
1. [Audit Checklist](#audit-checklist)
2. [Tailwind Utility Class Ordering Convention](#tailwind-utility-class-ordering-convention)
3. [TypeScript Conventions](#typescript-conventions)
4. [Ideal Component Example](#ideal-component-example)
5. [Automated Audit Patterns](#automated-audit-patterns)

---

## Audit Checklist

Use this checklist for every component audit. Mark items as:
- ✅ Compliant
- ❌ Violation (needs refactoring)
- ⚠️ Warning (edge case or needs discussion)
- N/A (rule doesn't apply to this component)

```
COMPONENT AUDIT CHECKLIST
================================

Component: _______________________
Path: ____________________________
Type: [ ] SHARED [ ] FEATURE [ ] APP
Audited By: ______________________
Date: ____________________________

─────────────────────────────────
AUTOMATED CHECKS (can be scripted)
─────────────────────────────────
[ ] Folder name: kebab-case (R14)
[ ] Component file: PascalCase.tsx (R15)
[ ] Utility files: camelCase or kebab-case (R16)
[ ] Constants: SCREAMING_SNAKE_CASE (R17)
[ ] Import violations: check dependency flow (Structure II)
[ ] No unused imports
[ ] Test file location: __tests__ folder if tests exist

─────────────────────────────────
CSS/STYLING (Manual Review)
─────────────────────────────────
[ ] Component className uses BEM: block, block__element, block--modifier (R1-R4)
[ ] Tailwind utilities follow ordering convention (see section 2)
[ ] Class names are purpose-driven, not visual (R5)
    Example: ✅ "error-message" ❌ "red-text"
[ ] No IDs used for styling (R6)
[ ] Custom CSS (if any) uses BEM methodology

─────────────────────────────────
HTML/ACCESSIBILITY (Manual Review)
─────────────────────────────────
[ ] IDs are unique and use camelCase (R7-R8)
[ ] Form labels use `for` attribute matching input ID (R9)
[ ] Semantic HTML elements used (button, nav, header, etc.) (R13)
[ ] ARIA: Prefer aria-labelledby over aria-label (R10)
[ ] ARIA: aria-label used only when visible text unavailable (R11)
[ ] ARIA: aria-describedby used for additional descriptions (R12)
[ ] No redundant ARIA on semantic elements

─────────────────────────────────
TYPESCRIPT (Manual Review)
─────────────────────────────────
[ ] Interface/Type names: PascalCase
[ ] Props interface defined and exported (ComponentNameProps)
[ ] No `any` types (use `unknown` if truly needed)
[ ] Return types explicitly defined for functions
[ ] Proper type imports (type-only imports use `import type`)
[ ] Generic types use descriptive names (not just T, U)
[ ] Enums (if used) are PascalCase

─────────────────────────────────
ARCHITECTURE (Manual Review)
─────────────────────────────────
[ ] Correctly categorized (SHARED/FEATURE/APP)?
[ ] Imports respect dependency rules:
    - SHARED: imports only external packages (no internal)
    - FEATURE: imports SHARED only (no other FEATURES)
    - APP: imports SHARED + FEATURES
[ ] Co-located files in component folder (R18):
    - Tests in __tests__/
    - Sub-components in components/
    - Data in data/
    - CSS in same folder (if not using Tailwind exclusively)
[ ] If SHARED: Truly reusable across features? No business logic?
[ ] If FEATURE: Encapsulated, single-purpose business logic?
[ ] Component has single responsibility

─────────────────────────────────
TESTING (Manual Review)
─────────────────────────────────
[ ] Tests exist for component (if applicable)
[ ] Tests located in __tests__/ folder
[ ] Test file naming: ComponentName.test.tsx or ComponentName.spec.tsx
[ ] Tests are co-located with component (R18)

─────────────────────────────────
NOTES / REFACTOR DECISIONS
─────────────────────────────────


─────────────────────────────────
VIOLATIONS SUMMARY
─────────────────────────────────
Critical (must fix): ___
Warnings (should fix): ___
Compliant: ___

Action Required: [ ] Refactor [ ] Minor fixes [ ] Compliant
Priority: [ ] High [ ] Medium [ ] Low
```

---

## Tailwind Utility Class Ordering Convention

**Rule**: When using Tailwind utilities alongside BEM class names, follow this order:

1. **BEM class first** (the semantic identifier)
2. **Tailwind utilities** in this order:

### Official Tailwind CSS Class Ordering

Use the **Prettier Plugin for Tailwind CSS** ordering convention:

```
className="block-name__element--modifier [Tailwind utilities in order below]"
```

**Tailwind Order Categories** (as defined by prettier-plugin-tailwindcss):

1. **Layout**
   - `container`, `box-*`, `display-*`, `float-*`, `clear-*`, `object-*`, `overflow-*`, `overscroll-*`, `position-*`, `inset-*`, `visible`, `invisible`, `isolation-*`, `z-*`

2. **Flexbox & Grid**
   - `flex-*`, `grid-*`, `gap-*`, `justify-*`, `content-*`, `items-*`, `self-*`, `place-*`, `order-*`

3. **Spacing**
   - `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`, `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`, `space-*`

4. **Sizing**
   - `w-*`, `min-w-*`, `max-w-*`, `h-*`, `min-h-*`, `max-h-*`

5. **Typography**
   - `font-*`, `text-*`, `leading-*`, `tracking-*`, `line-clamp-*`, `list-*`, `whitespace-*`, `break-*`

6. **Backgrounds**
   - `bg-*`, `from-*`, `via-*`, `to-*`, `bg-gradient-*`

7. **Borders**
   - `border-*`, `divide-*`, `outline-*`, `ring-*`

8. **Effects**
   - `shadow-*`, `opacity-*`, `mix-blend-*`, `backdrop-*`

9. **Filters**
   - `blur-*`, `brightness-*`, `contrast-*`, `grayscale-*`, etc.

10. **Transitions & Animation**
    - `transition-*`, `duration-*`, `ease-*`, `delay-*`, `animate-*`

11. **Transforms**
    - `transform-*`, `scale-*`, `rotate-*`, `translate-*`, `skew-*`

12. **Interactivity**
    - `cursor-*`, `select-*`, `resize-*`, `scroll-*`, `pointer-events-*`

13. **SVG**
    - `fill-*`, `stroke-*`

14. **Accessibility**
    - `sr-only`, `not-sr-only`

**Practical Example**:

```tsx
// ✅ GOOD: BEM class first, Tailwind utilities in logical order
<button className="btn btn--primary flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors">
  Submit
</button>

// ❌ BAD: Random order, no BEM
<button className="bg-blue-600 gap-2 px-4 rounded-md flex text-sm hover:bg-blue-700 shadow-sm py-2 items-center font-semibold transition-colors">
  Submit
</button>
```

**Recommendation**: Install and configure `prettier-plugin-tailwindcss` to automate this:

```bash
npm install -D prettier-plugin-tailwindcss
```

Add to `.prettierrc`:
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## TypeScript Conventions

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| **Interfaces** | PascalCase with `I` prefix (optional) or descriptive name | `interface UserProps {}` or `interface IUser {}` |
| **Types** | PascalCase | `type ButtonVariant = 'primary' \| 'secondary';` |
| **Type Parameters** | Single uppercase or descriptive PascalCase | `<T>`, `<TData>`, `<ItemType>` |
| **Enums** | PascalCase (name and members) | `enum UserRole { Admin, User }` |
| **Props Interface** | ComponentName + `Props` | `interface ButtonProps {}` |

### Type Safety Rules

1. **No `any` types** — Use `unknown` if type is truly unknown, then narrow with type guards
2. **Explicit return types** — Always define return types for exported functions
3. **Type-only imports** — Use `import type` for type imports:
   ```typescript
   import type { FC, ReactNode } from 'react';
   ```
4. **Props must have interface** — Every component must define and export its props interface:
   ```typescript
   export interface ButtonProps {
     variant?: 'primary' | 'secondary';
     onClick?: () => void;
     children: ReactNode;
   }
   
   export const Button: FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
     // ...
   };
   ```
5. **Avoid type assertions** — Use type guards instead of `as` when possible
6. **Prefer `unknown` over `any`** — Forces type narrowing
7. **Use const assertions** — For literal types: `const colors = ['red', 'blue'] as const;`

---

## Ideal Component Example

Below is a reference implementation showing all conventions in practice:

### File Structure
```
/src/features/user-profile/
├── __tests__/
│   ├── UserProfile.test.tsx
│   └── fixtures.ts
├── components/
│   ├── ProfileAvatar.tsx
│   └── ProfileStats.tsx
├── data/
│   └── constants.ts
└── UserProfile.tsx
```

### UserProfile.tsx (Main Component)

```tsx
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { ProfileAvatar } from './components/ProfileAvatar';
import { ProfileStats } from './components/ProfileStats';
import { MAX_BIO_LENGTH } from './data/constants';

/**
 * Props interface for the UserProfile component.
 * Exported for reusability and testing.
 */
export interface UserProfileProps {
  /**
   * Unique identifier for the user
   */
  userId: string;
  
  /**
   * Display name of the user
   */
  name: string;
  
  /**
   * Optional biography text
   */
  bio?: string;
  
  /**
   * Avatar image URL
   */
  avatarUrl?: string;
  
  /**
   * Callback fired when profile is updated
   */
  onUpdate?: (userId: string) => void;
}

/**
 * UserProfile component displays user information and stats.
 * 
 * @category Features
 * @component FEATURE (imports from SHARED only)
 */
export const UserProfile: FC<UserProfileProps> = ({
  userId,
  name,
  bio,
  avatarUrl,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    // Side effects here
  }, [userId]);

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleSave = (): void => {
    setIsEditing(false);
    onUpdate?.(userId);
  };

  return (
    <section 
      className="user-profile flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md"
      aria-labelledby="userProfileHeading"
    >
      <h2 
        id="userProfileHeading" 
        className="user-profile__heading text-2xl font-bold text-gray-900"
      >
        {name}
      </h2>

      <ProfileAvatar 
        className="user-profile__avatar"
        src={avatarUrl} 
        alt={`${name}'s profile picture`}
      />

      {bio && (
        <p 
          className="user-profile__bio text-base text-gray-700 leading-relaxed"
          aria-describedby="bioLengthInfo"
        >
          {bio}
        </p>
      )}
      
      <span 
        id="bioLengthInfo" 
        className="sr-only"
      >
        Maximum biography length is {MAX_BIO_LENGTH} characters
      </span>

      <div className="user-profile__actions flex gap-2 mt-4">
        <button
          className="btn btn--primary flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          onClick={isEditing ? handleSave : handleEdit}
          aria-label={isEditing ? 'Save profile changes' : 'Edit profile'}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <ProfileStats userId={userId} />
    </section>
  );
};
```

### Key Features of This Ideal Component:

1. ✅ **BEM class names**: `user-profile`, `user-profile__heading`, `user-profile__avatar`
2. ✅ **Tailwind utilities ordered**: Layout → Spacing → Typography → Backgrounds → Borders → Effects → Transitions
3. ✅ **TypeScript**: Explicit interfaces, return types, no `any`
4. ✅ **Accessibility**: `aria-labelledby`, `aria-describedby`, semantic HTML
5. ✅ **Architecture**: FEATURE component importing SHARED components
6. ✅ **Co-location**: Sub-components in `components/`, constants in `data/`
7. ✅ **IDs in camelCase**: `userProfileHeading`, `bioLengthInfo`
8. ✅ **Export conventions**: Named exports for components and interfaces

---

## Automated Audit Patterns

These regex patterns can be used with `grep` or custom scripts to find violations.

### File Naming Violations

```bash
# Find folders not in kebab-case (has uppercase or underscore)
find src -type d -name '*[A-Z_]*'

# Find component files not in PascalCase (lowercase .tsx files)
find src -type f -name '*.tsx' -name '*[a-z]*.tsx' ! -name '*.test.tsx' ! -name '*.spec.tsx'

# Find utility files with uppercase (should be camelCase or kebab-case)
find src/utils -type f -name '*[A-Z]*.ts' ! -name '*.tsx'
```

### Import Dependency Violations

```bash
# SHARED components importing from FEATURES (VIOLATION)
grep -r "from.*features" src/components/

# SHARED utils importing from FEATURES (VIOLATION)
grep -r "from.*features" src/utils/

# FEATURES importing from other FEATURES (VIOLATION)
grep -r "from.*features" src/features/ | grep -v "from './\|from '../"
```

### CSS/BEM Violations

```bash
# Find className attributes without BEM pattern (basic check)
grep -rn 'className="[^"]*"' src/ | grep -v '__\|--'

# Find IDs used in CSS (should not exist - R6)
grep -rn '#[a-zA-Z]' src/**/*.css

# Find potential visual class names (should be purpose-driven - R5)
grep -rn 'className=".*\(red\|blue\|green\|big\|small\|left\|right\)-[^"]*"' src/
```

### TypeScript Violations

```bash
# Find `any` types
grep -rn ': any' src/

# Find missing return types (functions without : Type)
grep -rn 'export const.*= (' src/ | grep -v ': .*='

# Find non-type imports of types
grep -rn "import {.*Props.*} from" src/ | grep -v "import type"
```

### Accessibility Violations

```bash
# Find buttons without aria-label or text content
grep -rn '<button' src/ | grep -v 'aria-label\|aria-labelledby\|>'

# Find images without alt attributes
grep -rn '<img' src/ | grep -v 'alt='

# Find form inputs without labels
grep -rn '<input' src/ | grep -v 'aria-label\|aria-labelledby'
```

---

## Audit Workflow

1. **Clone this checklist** for each component being audited
2. **Run automated checks** first (use patterns above)
3. **Manually review** code for compliance
4. **Document violations** in the "Notes" section
5. **Prioritize fixes**: Critical > Warnings > Nice-to-have
6. **Refactor systematically** — one violation type at a time per component
7. **Verify with tests** after refactoring
8. **Mark component as audited** in tracking document

---

## Version History

- **v1.0** (2024-11-04): Initial specification created
  - Comprehensive checklist
  - Tailwind ordering convention
  - TypeScript rules
  - Ideal component example
  - Automated audit patterns

---

**Document Owner**: Dylan
**Last Updated**: 2024-11-04
**Status**: Active

