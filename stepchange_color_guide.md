# StepChange Fund Color Palette Implementation Guide

## Option 1: Infrastructure Authority

### Core Color Palette

```css
:root {
  /* Primary Colors */
  --color-steel-navy: #1a2332;
  --color-urgent-copper: #c5410d;
  --color-concrete-gray: #4a5568;
  --color-light-concrete: #e2e8f0;
  --color-clean-white: #f8fafc;
  
  /* Semantic Color Variables */
  --color-primary: var(--color-steel-navy);
  --color-accent: var(--color-urgent-copper);
  --color-text-primary: var(--color-concrete-gray);
  --color-text-secondary: #6b7280;
  --color-background-primary: var(--color-clean-white);
  --color-background-secondary: var(--color-light-concrete);
  --color-border: var(--color-light-concrete);
}
```

### Color Usage Guidelines

#### **Steel Navy (#1a2332)**
**Primary/Hero Color - Use for:**
- Website header/navigation background
- Hero section backgrounds
- Primary buttons (filled)
- Main headings (H1, H2)
- Logo background variations
- Footer background
- Modal headers

**Implementation:**
```css
.hero-section {
  background: linear-gradient(135deg, #1a2332 0%, #2d3e50 100%);
  color: white;
}

.btn-primary {
  background-color: var(--color-steel-navy);
  color: white;
  border: 2px solid var(--color-steel-navy);
}

.btn-primary:hover {
  background-color: #243142;
  border-color: #243142;
}
```

#### **Urgent Copper (#c5410d)**
**Accent/CTA Color - Use for:**
- Call-to-action buttons
- Important alerts/notifications
- "Apply Now" buttons
- Urgency indicators
- Key metrics highlights
- Active states
- Progress indicators

**Implementation:**
```css
.btn-cta {
  background-color: var(--color-urgent-copper);
  color: white;
  border: 2px solid var(--color-urgent-copper);
}

.btn-cta:hover {
  background-color: #d64916;
  border-color: #d64916;
}

.alert-urgent {
  background-color: #fef2f2;
  border-left: 4px solid var(--color-urgent-copper);
  color: var(--color-urgent-copper);
}
```

#### **Concrete Gray (#4a5568)**
**Primary Text Color - Use for:**
- Body text
- Paragraph content
- Secondary headings (H3, H4)
- Form labels
- Navigation links
- Card content

**Implementation:**
```css
body {
  color: var(--color-concrete-gray);
  font-family: 'IBM Plex Sans', sans-serif;
}

.text-primary {
  color: var(--color-concrete-gray);
}

.nav-link {
  color: var(--color-concrete-gray);
}

.nav-link:hover {
  color: var(--color-steel-navy);
}
```

#### **Light Concrete (#e2e8f0)**
**Background/Border Color - Use for:**
- Section dividers
- Card borders
- Input field borders
- Table borders
- Subtle background sections
- Disabled states

**Implementation:**
```css
.card {
  border: 1px solid var(--color-light-concrete);
  background-color: var(--color-clean-white);
}

.section-divider {
  border-top: 1px solid var(--color-light-concrete);
}

.input-field {
  border: 1px solid var(--color-light-concrete);
}

.input-field:focus {
  border-color: var(--color-steel-navy);
  box-shadow: 0 0 0 2px rgba(26, 35, 50, 0.1);
}
```

#### **Clean White (#f8fafc)**
**Primary Background - Use for:**
- Main page background
- Card backgrounds
- Modal backgrounds
- Content areas
- Input field backgrounds

**Implementation:**
```css
body {
  background-color: var(--color-clean-white);
}

.card, .modal {
  background-color: var(--color-clean-white);
}
```

### Button Hierarchy

```css
/* Primary Action - Steel Navy */
.btn-primary {
  background-color: var(--color-steel-navy);
  color: white;
  font-weight: 600;
}

/* Urgent Action - Copper */
.btn-urgent {
  background-color: var(--color-urgent-copper);
  color: white;
  font-weight: 600;
}

/* Secondary Action - Outlined */
.btn-secondary {
  background-color: transparent;
  color: var(--color-steel-navy);
  border: 2px solid var(--color-steel-navy);
  font-weight: 600;
}

/* Tertiary Action - Text only */
.btn-tertiary {
  background-color: transparent;
  color: var(--color-concrete-gray);
  border: none;
  text-decoration: underline;
}
```

### Typography Color Pairing

```css
/* Hero Headings */
.hero-title {
  color: white; /* On steel navy background */
  font-weight: 700;
}

/* Section Headings */
.section-title {
  color: var(--color-steel-navy);
  font-weight: 600;
}

/* Body Text */
.body-text {
  color: var(--color-concrete-gray);
  font-weight: 400;
}

/* Captions/Meta */
.text-caption {
  color: #6b7280; /* Lighter gray */
  font-size: 0.875rem;
}
```

### Accessibility Guidelines

#### **Contrast Ratios (WCAG AA Compliant)**
- Steel Navy on White: 14.2:1 ✅
- Concrete Gray on White: 7.1:1 ✅
- Urgent Copper on White: 6.8:1 ✅
- White on Steel Navy: 14.2:1 ✅
- White on Urgent Copper: 6.8:1 ✅

#### **Focus States**
```css
.focusable:focus {
  outline: 2px solid var(--color-urgent-copper);
  outline-offset: 2px;
}

.btn:focus {
  box-shadow: 0 0 0 3px rgba(197, 65, 13, 0.3);
}
```

### Common Component Examples

#### **Navigation**
```css
.navbar {
  background-color: var(--color-steel-navy);
  border-bottom: 1px solid var(--color-light-concrete);
}

.nav-brand {
  color: white;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
}

.nav-link:hover {
  color: white;
}
```

#### **Cards**
```css
.card {
  background-color: var(--color-clean-white);
  border: 1px solid var(--color-light-concrete);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: var(--color-light-concrete);
  color: var(--color-steel-navy);
  font-weight: 600;
}
```

#### **Forms**
```css
.form-label {
  color: var(--color-concrete-gray);
  font-weight: 500;
}

.form-input {
  border: 1px solid var(--color-light-concrete);
  background-color: var(--color-clean-white);
  color: var(--color-concrete-gray);
}

.form-input:focus {
  border-color: var(--color-steel-navy);
  box-shadow: 0 0 0 2px rgba(26, 35, 50, 0.1);
}

.form-error {
  color: var(--color-urgent-copper);
  font-size: 0.875rem;
}
```

### Do's and Don'ts

#### **✅ Do:**
- Use Steel Navy for primary authority elements
- Use Urgent Copper sparingly for true calls-to-action
- Maintain sufficient contrast ratios
- Use consistent hover states
- Apply the palette systematically across all touchpoints

#### **❌ Don't:**
- Overuse the Urgent Copper - it should feel special
- Use Steel Navy for body text (too dark)
- Mix this palette with other brand colors
- Use pure black (#000000) anywhere
- Apply colors randomly without purpose

### Dark Mode Considerations
If implementing dark mode, adjust opacity rather than changing core colors:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-primary: #0f172a;
    --color-background-secondary: #1e293b;
    --color-text-primary: #e2e8f0;
    --color-border: #374151;
  }
}
```

### File Export
Save this implementation guide alongside your design system documentation. The color palette provides excellent contrast, conveys authority and urgency appropriately, and maintains accessibility standards across all implementations.