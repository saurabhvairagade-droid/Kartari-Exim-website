# Lenis Smooth Scrolling Implementation

## Overview
Lenis has been integrated into the Kartari Exim website to provide smooth, fluid scrolling across all pages and components.

## Installation
Lenis has been installed via npm:
```bash
npm install lenis
```

## Implementation Details

### 1. **LenisProvider Hook** (`src/hooks/useLenis.tsx`)
- Wraps the entire application with `ReactLenis` component
- Exports `useLenisScroll` for use in components if needed
- Automatically applies smooth scrolling to all pages

### 2. **Global Application Setup** (`src/App.tsx`)
- The `LenisProvider` wraps the entire `Router` and all page content
- This ensures smooth scrolling is applied globally to:
  - ✓ Homepage (Hero, About, Products, Why Choose Us, Contact sections)
  - ✓ All product pages (Spices, Vegetables, Fruits, Basmati Rice, etc.)
  - ✓ Blog pages
  - ✓ Dehydrated Onion Flakes page
  - ✓ All other dynamic pages

### 3. **Key Features**
- 🎯 Smooth scrolling on all pages automatically
- 📱 Works on both desktop and mobile devices
- ⚡ Optimized performance
- 🔄 Integrates seamlessly with Framer Motion fade-in animations
- 🎨 Maintains luxury aesthetic of your brand

## Usage

### For Component Developers
If you need to access Lenis scroll functionality in a component:

```tsx
import { useLenisScroll } from '../hooks';

export function MyComponent() {
  const lenis = useLenisScroll();
  
  // You can now use lenis for scroll events if needed
  // Example: lenis?.scrollTo(target)
  
  return <div>{/* Component content */}</div>;
}
```

## How It Works
1. When the app loads, `LenisProvider` wraps all content with `ReactLenis`
2. Lenis intercepts scroll events and smooths them
3. All fade-in animations work perfectly with smooth scrolling
4. The smooth scrolling persists across all page routes

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Performance Notes
- Lenis is lightweight (~5KB gzipped)
- No additional configuration needed for basic smooth scrolling
- Works alongside existing animations without conflicts
- Already optimized for production

## Testing
To test smooth scrolling:
1. Navigate to the homepage or any product page
2. Scroll with your mouse/trackpad
3. Notice the smooth, fluid scrolling experience
4. Try navigation between pages - smooth scrolling persists

## Configuration Options (Optional)
If you need to customize Lenis behavior in the future, you can modify `useLenis.tsx`:

```tsx
// Example: Add custom options
<ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
  {children}
</ReactLenis>
```

Common options:
- `lerp`: Linear interpolation (lower = smoother but slower)
- `duration`: Scroll duration in seconds
- `wheelMultiplier`: Mouse wheel scroll speed
