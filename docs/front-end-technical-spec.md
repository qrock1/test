# Front-End Technical Specification: Crypto Arbitrage & Automation Platform

## Introduction
This document defines the front-end requirements for a cryptocurrency arbitrage and automation platform. It specifies the site structure, core UI components, visual design system, and responsive behavior for a bilingual (EN/RU) web application.

## Platform Features
- **Exchange Rate Comparison:** Aggregate real-time prices from major exchanges for side-by-side comparison.
- **Token & Account Management:** Unified portfolio view across linked exchange accounts.
- **Automated P2P Trading:** Bot configuration for automated rate adjustments and P2P offer management.
- **NFT-Gated Telegram Portals:** Token/NFT-verified access to Telegram communities.
- **Role-Aware UI:** Tailored experiences for guests, traders, and admins.
- **Modern UI/UX:** Dark, professional, trustworthy interface inspired by crypto platforms.

## Site Structure
### Public Pages
- **Homepage:** Feature overview, pricing teaser, CTA to signup.
- **Login / Signup:** Authentication flows with language switcher.
- **Help Center:** FAQs, guides, support contact.

### Authenticated Pages
- **User Dashboard:** Portfolio, activity, automation summary.
- **Exchange Comparison:** Real-time cross-exchange pricing table.
- **Automation Settings:** Bot creation, monitoring, and management.
- **NFT/Telegram Portal Manager:** Wallet connect, portal creation, management.
- **Profile / Settings:** Personal info, security, preferences, integrations.

### Admin Pages
- **Admin Dashboard:** System stats, alerts, and management links.
- **User Management:** User list, role edits, bans, details.
- **Content & System Settings:** Help content and platform configuration.

## Design & Theme Guidelines
### Color & Theme
- Dark base background (#0D0D0D) with high-contrast text.
- Single vibrant accent color for primary actions.
- Subtle elevation via shadows and slight panel contrast.

### Typography
- Sans-serif font (Inter/Roboto) supporting Latin + Cyrillic.
- Clear hierarchy: bold headings, readable body text.

### Layout & Spacing
- 12-column desktop grid; single-column mobile.
- Generous spacing and clean section separation.

### Components
- **Buttons:** Primary (accent), Secondary (outline/neutral).
- **Cards:** Slightly raised, dark panels with rounded corners.
- **Tables:** Zebra rows, sticky headers, responsive scroll.
- **Modals:** Centered dialogs with dimmed overlay.
- **Forms:** Dark inputs with accent focus states.
- **Tooltips:** Compact, high-contrast info overlays.

## Responsiveness
- **Mobile:** Single column, collapsible navigation, scrollable tables.
- **Tablet:** Two-column layouts where possible.
- **Desktop:** Persistent sidebar + data-dense layouts.
- **Tables/Charts:** Responsive scaling and card fallback on small screens.

## Internationalization
- Locale routing (e.g., `/en/...`, `/ru/...`).
- Translation files for all UI text.
- Locale-based date/number formatting.
- Language switcher in header and settings.

## Navigation
- **Top Header:** Logo, language switch, user menu.
- **Sidebar:** Main nav for authenticated users, collapsible on small screens.
- **Footer:** Public pages include legal/support links.

## Page-Level UI Highlights
### Homepage
- Hero, feature highlights, exchange rate teaser, CTA.

### Exchange Comparison
- Asset selector, live comparison table, arbitrage indicator, chart.

### User Dashboard
- Summary cards, automation status, recent activity, quick actions.

### Automation Settings
- Bot list with toggle actions and create/edit wizard.

### NFT/Telegram Portals
- Wallet connect, portal list, creation form, status indicators.

### Admin Dashboard
- System metrics, recent activity logs, quick admin actions.

## Technology Stack (Proposed)
- **Framework:** Next.js (React).
- **Styling:** Tailwind CSS.
- **State/Data:** React Context, Zustand/Redux, React Query.
- **Charts:** Recharts or Chart.js.
- **i18n:** next-i18next or react-i18next.

## Accessibility & Quality
- Keyboard navigable menus and modals.
- Clear focus states and ARIA labels.
- High-contrast text and readable font sizes.
- Validation messages and loading states.

## Conclusion
This spec provides a blueprint for a responsive, bilingual, and role-aware crypto trading UI that emphasizes clarity, trust, and modern dark-themed aesthetics.
