// types/audit.ts

export type AuditResult = {
  recommendation: string;
  savings: number;
  reason: string;
  optimizationScore: number;
  suggestedAlternative: string;
};