# Neo-Brutalist Hard-Edge Geometric Design System Documentation

## Table of Contents

1. [Visual Design Guide](#visual-design-guide)
2. [Component Architecture Guide](#component-architecture-guide)
3. [AI-Assisted Development Guide](#ai-assisted-development-guide)
4. [Implementation Roadmap](#implementation-roadmap)

---

## Visual Design Guide

### Color Palette

The Neo-Brutalist design system uses a bold, high-contrast color palette with specific usage guidelines:

```css
:root {
  /* Primary Colors */
  --primary-blue: #0066FF;     /* Primary brand color - deeper blue */
  --secondary-blue: #00D4FF;   /* Secondary blue */
  --accent-yellow: #FFD700;    /* Accent elements and energy particles */
  --neutral-black: #000000;    /* Critical structural color - borders & outlines */
  
  /* Supporting Colors */
  --bg-white: #FFFFFF;
  --bg-light: #F9F9F9;
  --text-dark: #1A1A1A;
  --text-gray: #666666;
  
  /* Border Styles */
  --border-thin: 2px solid var(--neutral-black);
  --border-thick: 4px solid var(--neutral-black);
  
  /* Offset Measurements */
  --offset-sm: 2px;
  --offset-md: 4px;
  --offset-lg: 8px;
  --offset-xl: 16px;
}
```

**Critical Usage Rules:**

- **Black (#000000)**: Primary structural element for borders, outlines, and geometric shapes
- **Primary Blue (#0066FF)**: Primary UI elements, buttons, and interactive components
- **Secondary Blue (#00D4FF)**: Secondary UI elements and accents
- **Accent Yellow (#FFD700)**: Energy particles, active states, and small accents

### Typography System

Font pairing centers clarity and punch:

```css
:root {
  /* Font stacks (tokens) */
  --font-body: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial, sans-serif;
  --font-display: "Epilogue", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial, sans-serif;

  /* Type Scale (1.25 ratio) */
  --text-xs: 0.8rem;     /* 12.8px */
  --text-sm: 1rem;       /* 16px */
  --text-md: 1.25rem;    /* 20px */
  --text-lg: 1.563rem;   /* 25px */
  --text-xl: 1.953rem;   /* 31.25px */
  --text-2xl: 2.441rem;  /* 39px */
  --text-3xl: 3.052rem;  /* 48.8px */
  --text-4xl: 3.815rem;  /* 61px */
}

/* Application */
body { font: 16px/1.65 var(--font-body); }
.display-title { font-family: var(--font-display); }
.btn { font-family: var(--font-display); }
```

Usage:

- Epilogue for hero headlines, punchy statements, and CTAs.
- Plus Jakarta Sans for body text, smaller headings, nav, and UI.

### Grid System & Energy Particles

The distinctive Tron-style energy grid features differential opacity and a larger grid size:

```css
.energy-grid {
  background-image: 
    linear-gradient(90deg, 
      rgba(0, 102, 255, 0.12) 1px, transparent 2px),
    linear-gradient(0deg, 
      rgba(0, 102, 255, 0.08) 1px, transparent 2px);
  background-size: 48px 48px;
}

/* Animated energy particles */
.particle {
  width: 3px;
  height: 3px;
  background: var(--accent-yellow);
  box-shadow: 0 0 6px var(--accent-yellow);
  animation: particleMove 4s linear infinite;
}

.particle::after {
  /* Comet trail effect */
  content: '';
  width: 20px;
  height: 1px;
  background: linear-gradient(to right, 
    var(--accent-yellow), transparent);
}
```

### Geometric Design Elements

#### Shape Library

- **Triangles**: Dynamic directional elements
- **Hexagons**: Structural grid components  
- **Parallelograms**: Motion and speed indicators

#### Layering Pattern

```css
.neo-brutalist-layer {
  position: relative;
}

.neo-brutalist-layer::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 100%;
  height: 100%;
  border: 2px solid #000000;
  background: rgba(0, 102, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.neo-brutalist-layer:hover::before {
  top: 8px;
  left: 8px;
  background: rgba(0, 102, 255, 0.4);
}
```

#### Neo-Brutalist Shapes

```css
/* Trapezoid (for buttons) */
.clip-trapezoid {
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
}

/* Parallelogram (for cards) */
.clip-parallelogram {
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
}

/* Trapezoid Reverse (wide-top) */
.clip-trapezoid-reverse {
  clip-path: polygon(0, 0, 100% 0, calc(100% - 8px) 100%, 8px 100%);
}

/* Offset Element */
.offset-element {
  position: relative;
}

.offset-element::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  width: 100%;
  height: 100%;
  background: rgba(0, 102, 255, 0.2);
  border: 2px solid #000000;
  z-index: -1;
}
```

#### Geometric Shapes Specifications

```typescript
// Generate path strings for SVG shapes
export const generateShapePath = (type: string, angle: number = 8) => {
  switch(type) {
    case 'parallelogram':
      return `M ${angle},0 L 100,0 L ${100-angle},100 L 0,100 Z`;
    case 'parallelogram-reverse':
      return `M 0,0 L ${100-angle},0 L 100,100 L ${angle},100 Z`;
    case 'trapezoid':
      // Symmetric trapezoid with matching angles on both sides
      return `M ${angle},0 L ${100-angle},0 L ${100-angle},100 L ${angle},100 Z`;
    case 'trapezoid-reverse':
      // Wide top to small bottom trapezoid
      return `M 0,0 L 100,0 L ${100-angle},100 L ${angle},100 Z`;
    case 'square':
      return "M 0,0 L 100,0 L 100,100 L 0,100 Z";
    case 'diamond':
      return "M 50,0 L 100,50 L 50,100 L 0,50 Z";
    case 'hexagon':
      return "M 25,0 L 75,0 L 100,50 L 75,100 L 25,100 L 0,50 Z";
    default:
      return "M 0,0 L 100,0 L 100,100 L 0,100 Z";
  }
};
```

#### Content Movement Integration

```typescript
// Synchronize content movement with container
const getSafeContentStyle = () => {
  // Apply hover transform if needed
  const hoverTransform = hoverEffect && isHovered ? 'translate(-4px, -4px)' : 'none';

  // Special handling for diamond shape to center content properly
  if (type === 'diamond') {
    return {
      padding: '32px',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      maxWidth: '70%',
      margin: '0 auto',
      transform: hoverTransform,
      transition: 'transform 0.3s ease'
    };
  } 
  // Standard content styling with synchronized transform
  else {
    return {
      padding: '24px',
      transform: hoverTransform,
      transition: 'transform 0.3s ease'
    };
  }
};
```

---

## Component Architecture Guide

### Component Hierarchy

```
App (Server Component)
├── Layout
│   ├── NavBar (Client)
│   └── EnergyGrid (Client)
├── HomePage
│   ├── GeometricHero (Client)
│   ├── StatsCounter (Client)
│   ├── ServiceCard[] (Client)
│   ├── ProjectShowcase (Hybrid)
│   ├── SkillsMatrix (Client)
│   └── ContactForm (Client)
└── Footer (Server)
```

### Core Component Examples

#### GeometricButton

```typescript
interface GeometricButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GeometricButton: React.FC<GeometricButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  asChild,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const Comp = asChild ? Slot : 'button';
  
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 border-2 border-black transform cursor-pointer";
  
  const variants = {
    primary: "bg-[var(--primary-blue)] text-white border-black hover:bg-blue-600",
    secondary: "bg-[var(--accent-yellow)] text-black border-black hover:bg-yellow-500",
    outline: "bg-transparent text-[var(--primary-blue)] border-[var(--primary-blue)] hover:bg-blue-50",
    ghost: "bg-transparent text-gray-900 border-black hover:bg-gray-50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const trapezoidClip = "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)";

  return (
    <div className="relative inline-block">
      {/* Background geometric layer */}
      <div 
        className={`absolute inset-0 border-2 border-black transition-all duration-300 ${
          variant === 'primary' ? 'bg-blue-200' : 
          variant === 'secondary' ? 'bg-yellow-200' : 
          variant === 'outline' ? 'bg-blue-100' : 'bg-gray-200'
        } ${
          isHovered ? 'transform translate-x-8 translate-y-8 opacity-100' : 'transform translate-x-4 translate-y-4 opacity-70'
        }`}
        style={{ clipPath: trapezoidClip }}
      />
      
      <Comp 
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
          isHovered ? 'transform -translate-x-1 -translate-y-1' : ''
        } relative z-10`}
        style={{ clipPath: trapezoidClip }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        {...props}
      >
        {children}
      </Comp>
    </div>
  );
};
```

#### GeometricCard

```typescript
interface GeometricCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'yellow';
  offset?: boolean;
  interactive?: boolean;
}

export const GeometricCard: React.FC<GeometricCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  offset = false,
  hover = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = "relative border-2 border-black bg-white transition-all duration-300";
  
  const variants = {
    default: "hover:border-gray-400",
    filled: "border-[var(--primary-blue)] bg-blue-50 hover:border-blue-600",
    accent: "border-[var(--accent-yellow)] bg-yellow-50 hover:border-yellow-600"
  };

  const parallelogramClip = "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)";

  return (
    <div className="relative">
      {/* Offset background shapes */}
      {offset && (
        <div 
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered ? 'transform translate-x-12 translate-y-12 opacity-100' : 'transform translate-x-8 translate-y-8 opacity-60'
          } ${
            variant === 'filled' ? 'bg-blue-200 border-blue-300' : 
            variant === 'accent' ? 'bg-yellow-200 border-yellow-300' : 'bg-gray-200 border-gray-300'
          } border-2`}
          style={{ clipPath: parallelogramClip }}
        />
      )}
      
      <div 
        className={`${baseClasses} ${variants[variant]} ${className} ${
          hover && isHovered ? 'transform -translate-x-1 -translate-y-1' : ''
        } relative z-10`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
```

```

### Additional Geometric Components

#### EnergyGrid
```typescript
interface EnergyGridProps {
  className?: string;
  animated?: boolean;
  particles?: number;
}

export const EnergyGrid: React.FC<EnergyGridProps> = ({
  className = '',
  animated = true,
  particles = 12
}) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Tron-style Grid Background */}
      <div className="absolute inset-0 bg-white bg-grid-pattern opacity-10" />
      
      {/* Animated Energy Particles */}
      {animated && (
        <div className="absolute inset-0">
          {Array.from({ length: particles }).map((_, index) => (
            <div 
              key={index}
              className="absolute w-1 h-1 bg-[var(--accent-yellow)] rounded-full shadow-glow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 7}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
```

#### StatsCounter

```typescript
interface StatsCounterProps {
  value: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  label,
  icon,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={counterRef} 
      className="text-center"
    >
      <div className="w-12 h-12 mx-auto border border-black bg-white flex items-center justify-center mb-2">
        {icon}
      </div>
      <div 
        className={`text-2xl font-bold transition-all duration-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}
      >
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};
```

### Styling Architecture

Uses CSS custom properties with Tailwind classes for the Neo-Brutalist approach:

```css
/* Neo-Brutalist button styles */
.neo-brutalist-button {
  /* Base styling */
  @apply relative border-2 border-black font-semibold transition-all duration-300;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
}

/* Offset background layer */
.neo-brutalist-button-bg {
  @apply absolute inset-0 border-2 border-black transition-all duration-300;
  transform: translate(var(--offset-lg), var(--offset-lg));
  opacity: 0.7;
}

/* Hover state for Neo-Brutalist button */
.neo-brutalist-button:hover {
  @apply transform -translate-y-1 -translate-x-1;
}

.neo-brutalist-button-bg:hover {
  transform: translate(var(--offset-xl), var(--offset-xl));
  opacity: 1;
}
```

---

## AI-Assisted Development Guide

### File Structure

```
jhd-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind v4 + design tokens
│   │   ├── layout.tsx
│   │   ├── page.tsx             # Homepage implementation
│   │   └── test/page.tsx        # Component testing page
│   ├── components/
│   │   ├── ui/                  # Base components + Icon wrapper
│   │   │   ├── icon.tsx         # FontAwesome Icon wrapper component
│   │   │   └── index.ts
│   │   ├── geometric/           # Core geometric design system
│   │   │   ├── geometric-button.tsx
│   │   │   ├── geometric-card.tsx
│   │   │   ├── energy-grid.tsx
│   │   │   ├── geometric-divider.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── index.ts
│   │   ├── layout/             # Layout components
│   │   │   ├── navigation.tsx
│   │   │   ├── footer.tsx
│   │   │   └── index.ts
│   │   └── composite/          # Complex components
│   │       ├── feature-card.tsx
│   │       ├── stats-counter.tsx
│   │       ├── stats-showcase.tsx
│   │       ├── timeline.tsx
│   │       └── index.ts
│   └── lib/
│       ├── font-awesome.ts     # FontAwesome Pro configuration & icon library
│       └── utils.ts            # cn() utility for class merging
```

### AI Tool Instructions

When creating components, use this prompt template:

```
Create a geometric component for Neo-Brutalist design system:
- Component: [Name]
- Geometric style: Angular, clean lines, heavy black borders
- Colors: Primary Blue (#0066FF), Accent Yellow (#FFD700), black borders only
- Animation: Transform/opacity only for performance
- Accessibility: WCAG 2.1 AA
- Next.js 15.3.3 + React 19 compatible
```

### Component Template

```typescript
interface [ComponentName]Props {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  offset?: boolean;
  hover?: boolean;
  children?: React.ReactNode;
}

export const [ComponentName]: React.FC<[ComponentName]Props> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  offset = false,
  hover = false,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = cn(
    "relative border-2 border-black transition-all duration-300",
    className,
    hover && isHovered && "transform -translate-x-1 -translate-y-1"
  );
  
  const variants = {
    primary: "bg-[var(--primary-blue)] text-white",
    secondary: "bg-white text-[var(--text-dark)]",
    accent: "bg-[var(--accent-yellow)] text-[var(--text-dark)]"
  };
  
  const sizes = {
    sm: "p-2",
    md: "p-4",
    lg: "p-6"
  };
  
  return (
    <div className="relative">
      {offset && (
        <div 
          className={`absolute inset-0 transition-all duration-300 border-2 border-black
            ${isHovered ? 'transform translate-x-8 translate-y-8 opacity-100' : 
              'transform translate-x-4 translate-y-4 opacity-70'}`}
        />
      )}
      
      <div 
        className={cn(baseClasses, variants[variant], sizes[size])}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
```

### Design Tokens (Complete)

```css
:root {
  /* Neo-Brutalist Color Palette */
  --primary-blue: #0066FF;     /* Primary brand color - deeper blue */
  --secondary-blue: #00D4FF;   /* Secondary blue */
  --accent-yellow: #FFD700;    /* Accent elements and energy particles */
  --neutral-black: #000000;    /* Critical structural color - borders & outlines */
  --bg-white: #FFFFFF;
  --bg-light: #F9F9F9;
  --text-dark: #1A1A1A;
  --text-gray: #666666;
  
  /* Spacing (8px base) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;
  
  /* Border Styles */
  --border-thin: 2px solid var(--neutral-black);
  --border-thick: 4px solid var(--neutral-black);
  
  /* Offset Measurements */
  --offset-sm: 2px;
  --offset-md: 4px;
  --offset-lg: 8px;
  --offset-xl: 16px;
  
  /* Animation */
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Grid System */
  --grid-size: 48px;
  --grid-vertical-opacity: 0.12;
  --grid-horizontal-opacity: 0.08;
}
```

---

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2)

- [ ] Set up Next.js 13+ with TypeScript
- [ ] Configure design tokens in CSS
- [ ] Implement base grid system
- [ ] Create typography components

### Phase 2: Core Components (Weeks 3-5)

- [ ] Week 3: Button, Input, Card
- [ ] Week 4: Navigation, Grid layouts
- [ ] Week 5: Form components, Modals

### Phase 3: Interactive Features (Weeks 6-8)

- [ ] Particle effect system
- [ ] Geometric animations
- [ ] Hover state transformations
- [ ] Performance optimization

### Migration from Glassmorphism

**Step 1**: Audit current components

```typescript
const migrationMap = {
  'GlassButton': {
    newComponent: 'GeometricButton',
    changes: ['Remove backdrop-filter', 'Add clip-path'],
  }
};
```

**Step 2**: Create compatibility wrappers

```typescript
export const LegacyGlassButton = (props) => {
  console.warn('Use GeometricButton instead');
  return <GeometricButton {...convertProps(props)} />;
};
```

**Step 3**: Component-by-component migration

- Week 1: Buttons and inputs
- Week 2: Cards and containers
- Week 3: Complex layouts
- Week 4: Testing and refinement

### Performance Guidelines

**Next.js Optimizations:**

```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};
```

**Animation Best Practices:**

- Use `transform` and `opacity` only
- Implement `will-change` strategically
- Lazy load particle effects
- Use CSS containment

### Accessibility Checklist

- [ ] Color contrast 4.5:1 minimum
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Reduced motion preferences
- [ ] Focus indicators visible

### Testing Strategy

- Unit tests for each component
- Visual regression with Chromatic
- Performance monitoring
- Accessibility audits with axe-core

---

## Quick Reference

### Key Design Principles

1. **Neo-Brutalist** heavy black borders and geometric shapes
2. **Hard-edge design** with angular forms and sharp transitions
3. **Exaggerated offsets** for layered elements (8-16px)
4. **Asymmetrical compositions** breaking traditional grids
5. **Grid particles** with comet trails on 48px grid
6. **Raw, honest aesthetic** celebrating digital construction

### Component Checklist

- [ ] TypeScript interfaces defined
- [ ] Design tokens applied
- [ ] Animations performant
- [ ] Accessibility tested
- [ ] Documentation complete
- [ ] Storybook story created

This comprehensive documentation provides everything needed to implement and maintain the Mirror's Edge-inspired geometric design system, ensuring consistency, performance, and accessibility across all components.
