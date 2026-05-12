# Pricing Dataset

This dataset stores AI subscription plans, pricing information, and priority levels used by the audit engine.

The audit system uses this dataset to compare plans across multiple AI providers and recommend lower-cost alternatives with equivalent priority levels.

like:

## Dataset Structure

Each AI provider contains multiple subscription plans.

Example:

```ts
chatgpt: {
  plus: {
    priority: 2,
    price: 20
  }
}
```

priority :	Feature capability level
price :   	Monthly price per user

## why priority

Plans are compared only with plans having the same priority level.

This prevents unfair comparisons between low-tier and premium-tier plans.

## Supported Providers

 ChatGPT
 Claude
 Gemini
 Copilot
 Perplexity
 Grok