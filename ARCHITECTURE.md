# System Architecture

The AI Spend Audit Engine is a client-side web application built using Next.js and TypeScript.

The application follows a modular architecture where UI, business logic, dataset management, and type definitions are separated into independent layers.


## Application Flow

User Input
    ↓
AuditForm Component
    ↓
Audit Engine Logic
    ↓
Pricing Dataset Comparison
    ↓
Optimization Result
    ↓
ResultsCard Component



## Folder Structure

```text
app/
 |-- page.tsx
 |-- layout.tsx
 |-- globals.css

components/
 |-- AuditForm.tsx
 |-- ResultsCard.tsx

logic/
  |--auditEngine.ts

data/
 |-- pricing.ts

types/
 |-- audit.ts
```