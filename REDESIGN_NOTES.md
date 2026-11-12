# FEEDO PAY — visual redesign pass

This archive is based on the uploaded FEEDO PAY project.

## What changed
- Added a global light visual system in `src/index.css`.
- Shifted the app toward a clean, Apple-inspired interface: white surfaces, soft neutral canvas, restrained green accent, lighter borders, subtle shadows, calmer typography, and more consistent radii.
- Restyled the sticky navigation, dashboard panels, buttons, form controls, status surfaces, toast surfaces, and responsive spacing.
- Updated the initial loading screen to match the light theme.

## What was intentionally preserved
- React component structure and navigation.
- Existing roles and dashboards.
- API calls, server code, PayPal integration, data models, and business logic.
- Existing responsive Tailwind layout rules.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Important next pass
This is a visual foundation pass, not a full content/UX rewrite. The dashboards still contain the original dense copy and feature surface. After checking this build, the best next step is to simplify each role view individually (Customer, Chef, Manager, Supplier) and move secondary technical details into progressive disclosure rather than showing everything at once.
