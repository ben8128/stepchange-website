# Stepchange Website - Claude Development Notes

## Project Overview
- **Project**: Stepchange VC website (stepchange.vc)
- **Template**: Based on climatepapa.com codebase structure
- **Tech Stack**: Next.js 15, React 19, Tailwind CSS v4, TypeScript
- **Deployment**: Vercel
- **Live URL**: https://stepchange-website-p3widigrx-climate-papa.vercel.app

## Recent Major Updates (September 2024)

### ✅ Latest Updates
1. **History section implementation** - Interactive historical narratives with timelines
2. **Enhanced interactive components** - Podcast players, scrollable timelines, sources sections
3. **Lucide React integration** - Modern icon library for enhanced UI components
4. **Navigation updates** - Added History link to main navigation

### ✅ Previous Completed Tasks  
1. **Remove test colors from software page** - Cleaned up development artifacts
2. **Update main site to include Anay** - Added Anay prominently throughout site
3. **Prepare codebase for Vercel deployment** - Fixed TypeScript/ESLint errors, deployed successfully
4. **Create images directory and add placeholder for Ben/Anay photos** - Added real team photos
5. **Create timeline component based on PDF slide 12** - Interactive career progression component
6. **Extract and add portfolio content from PDF** - 14 detailed portfolio companies
7. **Update team page with Anay's detailed bio** - Enhanced both founder bios

### Key Features Implemented

#### Team Page (`/team`)
- **Real team photos**: `/public/images/team/ben.jpg` and `/public/images/team/anay.jpeg`
- **Enhanced founder bios**: Detailed professional backgrounds with metrics
- **Interactive timeline component**: Visual career progression for both founders
- **Professional sections**: Investment focus, key investments, personal details

#### Portfolio Page (`/portfolio`) 
- **14 portfolio companies** across 4 sectors:
  - Grid & Infrastructure: Bayou Energy, itselectric, Rhizome
  - Clean Energy: Eli, Nevoya, Audette  
  - Industrial: CapeZero, WattBot
  - Intelligence: FutureProof, LGND, Skyward, Shovels, Abode, Ezra Climate
- **Company details**: Stage, year, metrics, detailed descriptions
- **Portfolio stats**: Overview section with key fund metrics
- **Professional UI**: Enhanced cards with gradients and hover effects

#### Software Guide (`/software`)
- **Complete climate papa guide integration**: Interactive navigation
- **Scroll tracking**: Active section highlighting and progress bars
- **Mobile navigation**: Custom dropdown (React 19 compatible)  
- **Sidebar navigation**: Desktop table of contents with progress indicators

#### History Section (`/history`)
- **Interactive timelines**: Complex scrollable timeline components
- **Narrative content**: Rich historical content with multimedia integration
- **Podcast integration**: Audio player components with controls
- **Sources sections**: Comprehensive reference and citation systems
- **Multi-page structure**: Coal and data centers historical narratives

### Technical Architecture

#### Key Components
- `src/app/components/markdown.tsx` - Custom markdown renderer with heading IDs
- `src/app/components/timeline.tsx` - Career progression timeline component  
- `src/app/components/photo.tsx` - Click-to-zoom image component
- `src/app/software/section_link.tsx` - Interactive navigation with progress tracking
- `src/app/software/share_button.tsx` - Native sharing API integration
- `src/app/history/coal/components/` - Complex history components:
  - `interactive-timeline.tsx` - Multi-step timeline with animations
  - `scrollable-timeline.tsx` - Scroll-driven timeline progression
  - `narrative-content.tsx` - Rich content sections with multimedia
  - `podcast-player.tsx` - Audio player with full controls
  - `sources-section.tsx` - Citation and reference management

#### CSS Configuration
- **Tailwind CSS v4**: Uses `@import "tailwindcss";` (critical difference from v3)
- **Global styles**: `src/app/globals.css` with comprehensive markdown styling
- **Grid layout**: 5-column system for software guide (`xl:grid grid-cols-5`)

#### Content Management
- **Markdown-driven**: All content in markdown files loaded via raw-loader
- **Turbopack rules**: Configured in `next.config.ts` for markdown processing
- **Image handling**: Next.js Image component with proper path normalization

### Known Technical Details

#### Build Configuration
- **ESLint rules**: Custom configuration for React 19 compatibility
- **TypeScript**: Strict mode with proper React.ReactNode typing
- **Performance**: useCallback hooks for scroll event handlers

#### Image Assets
- **Team photos**: High-quality JPEGs in `/public/images/team/`
- **Content images**: Extensive image library in `/public/images/` from climatepapa
- **Placeholder SVGs**: Available but replaced with real photos

#### Deployment
- **Vercel integration**: Automatic deployments from git commits
- **Build process**: Next.js static generation with full TypeScript checking
- **Performance**: Optimized with proper image loading and code splitting

## Development Commands

```bash
# Development
npm run dev        # Start development server
npm run build      # Build for production  
npm run lint       # Run ESLint

# Deployment
npx vercel --prod  # Deploy to production
git add . && git commit -m "message" # Commit changes
```

## Content Sources
- **Team information**: Based on Stepchange Fund PDF (38 pages)
- **Portfolio data**: Extracted from PDF pages 10, 22-33
- **Timeline data**: Based on PDF slide 12 career progressions
- **Software guide**: Complete integration from climatepapa content

## Architecture Notes

### Tailwind CSS v4 Critical Setup
```css
/* globals.css - MUST use @import syntax for v4 */
@import "tailwindcss";
@import 'tippy.js/dist/tippy.css';
@import 'react-photo-view/dist/react-photo-view.css';
```

### React 19 Compatibility
- **Tippy.js replaced**: Custom dropdown due to ref issues
- **ReactMarkdown**: Proper children prop handling with recursive text extraction
- **useCallback**: Required for performance optimization in scroll handlers

### Next.js 15 Configuration
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.md': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
};
```

## File Structure
```
src/
├── app/
│   ├── components/
│   │   ├── markdown.tsx      # Custom markdown renderer
│   │   ├── timeline.tsx      # Career timeline component
│   │   └── photo.tsx         # Image viewer component
│   ├── history/
│   │   ├── page.tsx          # History overview page
│   │   ├── coal/
│   │   │   ├── page.tsx      # Coal history narrative
│   │   │   ├── globals.css   # History-specific styles
│   │   │   ├── lib/utils.ts  # Utility functions
│   │   │   └── components/   # Complex interactive components
│   │   └── data-centers/page.tsx # Data center history
│   ├── software/
│   │   ├── page.tsx          # Software guide with navigation
│   │   ├── layout.tsx        # 5-column grid layout
│   │   ├── section_link.tsx  # Interactive nav with progress
│   │   └── share_button.tsx  # Native sharing
│   ├── team/page.tsx         # Enhanced team page
│   ├── portfolio/page.tsx    # Comprehensive portfolio
│   ├── invest/page.tsx       # Investment form
│   └── globals.css           # Tailwind v4 configuration
public/
├── images/
│   ├── team/
│   │   ├── ben.jpg          # Ben's professional photo
│   │   └── anay.jpeg        # Anay's professional photo
│   └── [extensive image library from climatepapa]
```

## Future Enhancements
- Custom domain setup (stepchange.vc)
- Portfolio company logos integration
- Blog/news section implementation  
- Advanced filtering for portfolio page
- SEO optimization and meta tags
- Analytics integration

## Git History
- `e347d8d` - Major content and feature updates based on PDF integration
- `b329257` - Fix build errors and prepare for Vercel deployment  
- `1df02d7` - Initial website setup with Next.js, Tailwind CSS, and content pages

## Contact Integration
- Investment form: `/invest` - Ready for backend integration
- Team contact: Professional bios with LinkedIn/social links ready
- Email integration: Needs backend service for form processing

---
*Last updated: September 2024*
*All major features implemented and deployed to production*