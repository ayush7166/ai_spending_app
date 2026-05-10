// logic/auditEngine.ts

import { AuditResult } from "@/types/audit";
import { pricing } from "@/data/pricing";

export function auditEngine(
  tool: string,
  subscriptionplans: string,
  spend: number,
  users: number
): AuditResult {

  const normalizedTool =
    tool.toLowerCase();

  const normalizedPlan =
    subscriptionplans.toLowerCase();

  /*
    CHATGPT TEAM → PLUS
  */

  if (
    normalizedTool === "chatgpt" &&
    normalizedPlan === "team" &&
    users <= 3
  ) {

    const currentCost =
      users * pricing.chatgpt.team.price;

    const optimizedCost =
      users * pricing.chatgpt.plus.price;

    const savings =
      currentCost - optimizedCost;

    return {
      recommendation:
        "Downgrade current plan",

      savings,

      reason:
        "Small teams rarely require collaboration and admin tools included in Team plans.",

      optimizationScore: 82,

      suggestedAlternative:
        "ChatGPT Plus",
    };
  }

  /*
    COPILOT BUSINESS → INDIVIDUAL
  */

  if (
    normalizedTool === "copilot" &&
    normalizedPlan === "business" &&
    users <= 2
  ) {

    const currentCost =
      users * pricing.copilot.business.price;

    const optimizedCost =
      users * pricing.copilot.individual.price;

    const savings =
      currentCost - optimizedCost;

    return {
      recommendation:
        "Switch to Copilot Individual",

      savings,

      reason:
        "Business management tools are unnecessary for very small teams.",

      optimizationScore: 80,

      suggestedAlternative:
        "Copilot Individual",
    };
  }

  /*
    CHATGPT PRO → CLAUDE PRO
  */

  if (
    normalizedTool === "chatgpt" &&
    normalizedPlan === "pro"
  ) {

    const currentCost =
      pricing.chatgpt.pro.price;

    const optimizedCost =
      pricing.claude.pro.price;

    const savings =
      currentCost - optimizedCost;

    return {
      recommendation:
        "Consider switching to Claude Pro",

      savings,

      reason:
        "Claude Pro provides comparable advanced reasoning capabilities at significantly lower cost.",

      optimizationScore: 75,

      suggestedAlternative:
        "Claude Pro",
    };
  }

  /*
    GEMINI ADVANCED → PERPLEXITY PRO
  */

  if (
    normalizedTool === "gemini" &&
    normalizedPlan === "advanced"
  ) {

    const currentCost =
      pricing.gemini.advanced.price;

    const optimizedCost =
      pricing.perplexity.pro.price;

    const savings =
      currentCost - optimizedCost;

    return {
      recommendation:
        "Consider switching to Perplexity Pro",

      savings,

      reason:
        "Perplexity offers strong research-focused workflows and multi-model access.",

      optimizationScore: 74,

      suggestedAlternative:
        "Perplexity Pro",
    };
  }

  /*
    DEFAULT
  */

  return {
    recommendation:
      "Current setup appears optimized",

    savings: 0,

    reason:
      "No significant overspending detected.",

    optimizationScore: 100,

    suggestedAlternative:
      "Current Plan",
  };
}