# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 start page application featuring a minimalist browser homepage with:
- Dynamic wallpaper loading from Bing API
- Search engine selection (Google, Bing, Baidu, Sogou) with keyboard shortcuts
- Real-time clock display
- Loading animations and transitions
- Responsive design with glass morphism effects

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint with auto-fix
npm run format   # Format code with Prettier
```

## Architecture

### Core Structure
- **Entry point**: `src/main.js` - Standard Vue 3 application bootstrap
- **Root component**: `src/App.vue` - Coordinates loading states and main components
- **State management**: `src/store/store.js` - Simple reactive store using Vue's `reactive()`
- **Configuration**: `src/config/site.config.js` - Search engines, icons, and site metadata

### Component Architecture
The application follows a component-based architecture with clear separation of concerns:

1. **WallpaperView.vue** - Handles background image loading and blur animations
2. **SearchView.vue** - Main search interface with engine selection
3. **LoadingView.vue** - Loading screen transition component
4. **FooterView.vue** - Site footer with configuration

### Key Implementation Details

#### Wallpaper Loading
- Fetches daily Bing wallpaper via proxy API (`https://bing.ee123.net/img/`)
- Implements smart loading animation: ensures minimum 1.6s display time
- Uses blur-to-sharp transition with cubic-bezier easing

#### Search Functionality
- Stores selected search engine in localStorage
- Keyboard shortcuts: Alt+1-4 for engine switching
- Custom search form that opens results in new tab
- Hover-activated engine selector with icon display

#### State Management
- Global `store.imgLoaded` state controls loading/main content transitions
- Simple reactive pattern without external state management libraries
- Component-level reactive refs for local state

### Styling Approach
- SCSS with scoped styles per component
- Glass morphism design system (`rgba()` backgrounds, blur effects)
- Responsive design with mobile-first approach
- Custom CSS animations and transitions
- Consistent spacing and color variables used throughout

## Development Notes

### File Structure
```
src/
├── components/     # Vue components (new View suffix naming convention)
├── config/         # Site configuration and static data
├── store/          # Global state management
├── assets/         # Static assets (icons, images)
└── main.js         # Application entry point
```

### Recent Migration
Components recently renamed from `ComponentName.vue` to `ComponentNameView.vue` (evidenced by git status). Old components (Footer.vue, Loading.vue, Search.vue, Wallpaper.vue) were deleted in favor of new View variants.

### Linters & Formatting
- ESLint with Vue 3 + Prettier integration
- Modern JavaScript/ES2022+ features supported
- Auto-fixing via `npm run lint`

### Proxy Configuration
- Uses Bing wallpaper proxy for CORS handling
- Local development URL pattern in Vite config: `@/` alias for `src/`

## Testing & Quality

No test framework currently configured. When adding tests, consider using Vitest for unit testing with Vue 3 Test Utils.