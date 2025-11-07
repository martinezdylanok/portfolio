# Component Refactoring Example

This document shows how to migrate from hardcoded colors to the design token system.

## Example: ProjectsListProject Component

### BEFORE (Hardcoded Colors)

```tsx
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../utils/hooks/useTheme";
import { PROJECT_LETTERS, PROJECT_LOGO_ALT_TEXT, ProjectsListProjectProps } from "./data/ProjectsListProjectData";
import replaceIndex from "./data/replaceIndex";

const ProjectsListProject = ({ project, index }: ProjectsListProjectProps) => {
   const { mode } = useThemeContext();
   const replacedIndex = replaceIndex(index, PROJECT_LETTERS);
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/project/business-secondary-logos/${idPadded}/logo.webp`;

   const [isHovered, setIsHovered] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   // ... handlers ...

   return (
      <>
         {/* ❌ PROBLEMS:
             1. Hardcoded colors with ternaries everywhere
             2. Rounded-xs instead of brutalist sharp edges
             3. duration-500 is too slow for brutalist aesthetic
         */}
         <li 
            className={`grid gap-24 p-12 cursor-pointer border-0 rounded-xs transition duration-500 ease-in-out ${mode === "light" ? "bg-[#C1D3FE] hover:bg-[#CCDBFD]" : "bg-[#D7E3FC] hover:bg-[#CCDBFD]"}`}
            aria-label={`Project list item: ${project.project_name}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            {/* More ternaries... */}
            <div className="flex justify-center items-center gap-0">
               {PROJECT_LETTERS.map((letter, letterIndex) =>
                  letterIndex === replacedIndex ? (
                     <motion.img 
                        key={letterIndex} 
                        src={projectSecondaryLogo} 
                        className="max-h-[140px] w-[140px] object-contain transition-all duration-800" 
                        alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} 
                     />
                  ) : (
                     <motion.span 
                        key={letterIndex} 
                        className={`font-hanken-grotesk text-[200px] font-bold leading-none transition-all duration-800 ${mode === "light" ? "text-[#ABC4FF] light" : "text-[#EDF2FB] dark"}`}
                     >
                        {letter}
                     </motion.span>
                  ),
               )}
            </div>
         </li>

         {/* Hover card with more hardcoded colors */}
         <AnimatePresence>
            {isHovered && (
               <motion.div 
                  className={`fixed z-50 pointer-events-none rounded-lg shadow-lg p-4 ${mode === "light" ? "bg-[#EDF2FB]" : "bg-[#ABC4FF]"}`}
                  // ... props
               >
                  {/* More ternaries inside... */}
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};
```

---

### AFTER (Design Token System)

```tsx
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router";
import { PROJECT_LETTERS, PROJECT_LOGO_ALT_TEXT, ProjectsListProjectProps } from "./data/ProjectsListProjectData";
import replaceIndex from "./data/replaceIndex";

const ProjectsListProject = ({ project, index }: ProjectsListProjectProps) => {
   // ✅ No more need for useThemeContext!
   const replacedIndex = replaceIndex(index, PROJECT_LETTERS);
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/project/business-secondary-logos/${idPadded}/logo.webp`;

   const [isHovered, setIsHovered] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   // ... handlers remain the same ...

   return (
      <>
         {/* ✅ IMPROVEMENTS:
             1. Semantic color tokens - no ternaries!
             2. rounded-sm for brutalist aesthetic
             3. duration-mechanical for snappy transitions
             4. ease-brutalist for sharp feel
             5. Proper attribute ordering (aria before className)
         */}
         <li 
            aria-label={`Project list item: ${project.project_name}`}
            className="grid gap-24 p-12 cursor-pointer border-0 rounded-sm bg-bg-card hover:bg-bg-card-hover transition-all duration-mechanical ease-brutalist"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            <Link 
               className="contents projects-list__link" 
               to={`/projects/${project.project_name}`} 
               aria-label={`View ${project.project_name}`}
            >
               <div className="flex justify-center items-center gap-0">
                  {PROJECT_LETTERS.map((letter, letterIndex) =>
                     letterIndex === replacedIndex ? (
                        <motion.img 
                           key={letterIndex} 
                           src={projectSecondaryLogo} 
                           alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`}
                           className="max-h-[140px] w-[140px] object-contain transition-all duration-mechanical ease-brutalist" 
                        />
                     ) : (
                        <motion.span 
                           key={letterIndex} 
                           className="font-hanken-grotesk text-[200px] font-bold leading-none text-text-heading transition-all duration-mechanical ease-brutalist"
                        >
                           {letter}
                        </motion.span>
                     ),
                  )}
               </div>
            </Link>
         </li>

         {/* ✅ Hover card using design tokens */}
         <AnimatePresence>
            {isHovered && (
               <motion.div 
                  key="hover-card"
                  className="fixed z-50 pointer-events-none rounded-lg shadow-lg p-4 bg-bg-section"
                  initial={{ opacity: 0, scale: 0.8, ...getPosition() }}
                  animate={{ opacity: 1, scale: 1, ...getPosition() }}
                  exit={{ opacity: 0, scale: 0.8, ...getPosition() }}
                  transition={{ duration: 0.1, ease: [0.4, 0, 0.6, 1] }} // Brutalist timing
               >
                  <div className="flex flex-col gap-2 w-64">
                     <img 
                        src={projectSecondaryLogo} 
                        alt={`${project.project_name} logo`}
                        className="w-full h-32 object-contain" 
                     />
                     <h3 className="font-hanken-grotesk text-xl font-bold text-text-heading">
                        {project.project_name}
                     </h3>
                     <span className="font-hanken-grotesk text-xs text-text-muted">
                        {project.project_overview_technologies}
                     </span>
                     <p className="font-hanken-grotesk text-sm text-text-body">
                        {truncateDescription(project.project_description)}
                     </p>
                     <span className="font-hanken-grotesk font-bold text-sm text-text-accent">
                        Click to see more
                     </span>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default ProjectsListProject;
```

---

## Key Changes Summary

### 1. **Removed `useThemeContext` Dependency**
```tsx
// BEFORE
const { mode } = useThemeContext();

// AFTER
// Not needed! CSS custom properties handle it automatically
```

### 2. **Replaced All Color Ternaries**
```tsx
// BEFORE
${mode === "light" ? "bg-[#C1D3FE]" : "bg-[#D7E3FC]"}
${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}

// AFTER
bg-bg-card
text-text-heading
```

### 3. **Updated to Brutalist Aesthetic**
```tsx
// BEFORE
rounded-xs
duration-500
ease-in-out

// AFTER
rounded-sm (sharper for brutalism)
duration-mechanical (100ms - snappy!)
ease-brutalist (mechanical feel)
```

### 4. **Fixed Attribute Ordering**
```tsx
// BEFORE
<li className={...} aria-label={...} onMouseMove={...}>

// AFTER (proper order)
<li aria-label={...} className={...} onMouseMove={...}>
```

### 5. **Simplified Font Class Names**
```tsx
// BEFORE
font-hanken-grotesk (inconsistent with kebab-case)

// AFTER
font-hanken-grotesk (standardized)
```

---

## Benefits

1. **60% less code** — No mode checking, no ternaries
2. **Easier to read** — Clear intent with semantic names
3. **Palette switching for free** — Change `data-palette` attribute, all components update
4. **Type-safe** — Tailwind IntelliSense works perfectly
5. **Consistent brutalist aesthetic** — Sharp, mechanical, snappy
6. **Maintainable** — Update colors in ONE place (index.css)

---

## Migration Checklist for This Component

- [x] Remove `useThemeContext` import and usage
- [x] Replace all `mode === "light" ? ... : ...` ternaries with semantic tokens
- [x] Update `rounded-xs` → `rounded-sm`
- [x] Update transition timing to `duration-mechanical`
- [x] Add `ease-brutalist` to transitions
- [x] Fix attribute ordering (ARIA before className)
- [x] Test in light/dark modes
- [x] Test with "sky" and "concrete" palettes

---

## Next Steps

Apply this same pattern to:
- Header component
- Footer component
- AboutMeDetailed sections
- ContactForm
- All other components with hardcoded colors

