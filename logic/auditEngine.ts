import { AuditResult } from "@/types/audit";

export function auditEngine(
  tool: string,
  spend: number,
  users: number
): AuditResult {
  if (tool === "chatgpt" && users <= 2 && spend >= 60) {
    return {
      recommendation: "Downgrade to ChatGPT Plus",
      savings: 20,
      reason: "Small teams rarely require Team plan features.",
    };
  }

  return {
    recommendation: "Current setup appears optimized",
    savings: 0,
    reason: "No significant overspending detected.",
  };
}