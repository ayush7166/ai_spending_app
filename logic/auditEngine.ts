import { AuditResult } from "@/types/audit";
import { pricing } from "@/data/pricing";

export function auditEngine(
  tool: string,
  subscriptionplans: string,
  spend,
  users: number
): AuditResult {

  const currentTool =
    tool.toLowerCase();
  
  const currentPlan =
    subscriptionplans.toLowerCase();

  const selectedTool =
    pricing[
      currentTool as keyof typeof pricing
    ];

  if (!selectedTool) {
    return {
      recommendation:
        "Tool not found",
      savings: 0,
      reason:
        "Entered AI tool does not exist in dataset.",
      optimizationScore: 0,
      suggestedAlternative:
        "None",
    };
  }

  const selectedPlan =
    selectedTool[
      currentPlan as keyof typeof selectedTool
    ];

  if (!selectedPlan) {
    return {
      recommendation:
        "Plan not found",
      savings: 0,
      reason:
        "Entered subscription plan does not exist.",
      optimizationScore: 0,
      suggestedAlternative:
        "None",
    };
  }

  if (users <= 0) {
    return {
      recommendation:
        "Invalid user count",
      savings: 0,
      reason:
        "Users must be greater than zero.",
      optimizationScore: 0,
      suggestedAlternative:
        "None",
    };
  }

  const currentPriority =
    selectedPlan.priority;

  const currentCost =
    selectedPlan.price * users;

  let bestTool =
    currentTool;

  let bestPlan =
    currentPlan;

  let bestCost =
    currentCost;

  for (const toolName in pricing) {

    const toolData =
      pricing[
        toolName as keyof typeof pricing
      ];

    for (const planName in toolData) {

      const comparePlan =
        toolData[
          planName as keyof typeof toolData
        ];

      if (
        toolName === currentTool &&
        planName === currentPlan
      ) {
        continue;
      }

      if (
        comparePlan.priority !==
        currentPriority
      ) {
        continue;
      }

      const compareCost =
        comparePlan.price * users;

      if (compareCost < bestCost) {

        bestCost =
          compareCost;

        bestTool =
          toolName;

        bestPlan =
          planName;
      }
    }
  }

  const savings =
    currentCost - bestCost;

  const optimizationScore =
    savings > 0
      ? Math.max(
          50,
          100 - Math.round(
            (savings / currentCost) * 100
          )
        )
      : 100;

  if (savings > 0) {

    return {
      recommendation:
        `Switch from ${tool} ${subscriptionplans} to ${bestTool} ${bestPlan}`,
      savings,
      reason:
        "A lower-cost plan with equivalent priority level was found across AI providers.",
      optimizationScore,
      suggestedAlternative:
        `${bestTool} ${bestPlan}`,
    };
  }

  return {
    recommendation:
      "Current plan already optimized",
    savings: 0,
    reason:
      "No cheaper equivalent-priority plan exists in the dataset.",
    optimizationScore,
    suggestedAlternative:
      `${tool} ${subscriptionplans}`,
  };
}