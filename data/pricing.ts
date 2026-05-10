export const pricing = {
  chatgpt: {
    free: {
      price: 0,
      billing: "monthly",
      models: ["GPT-5 mini"],
      features: [
        "Limited GPT access",
        "Basic image generation",
        "Web browsing",
      ],
    },

    plus: {
      price: 20,
      billing: "monthly",
      models: ["GPT-5", "GPT-5 mini"],
      features: [
        "Higher usage limits",
        "Faster responses",
        "Advanced image generation",
        "File uploads",
        "Deep research tools",
        "Custom GPTs",
      ],
    },

    pro: {
      price: 200,
      billing: "monthly",
      models: ["GPT-5 Pro", "GPT-5"],
      features: [
        "Highest limits",
        "Priority access",
        "Advanced reasoning",
        "Long context window",
        "Premium tools",
      ],
    },

    team: {
      price: 30,
      billing: "monthly_per_user",
      annualPrice: 25,
      models: ["GPT-5"],
      features: [
        "Workspace collaboration",
        "Admin console",
        "Shared GPTs",
        "Business security",
      ],
    },
  },

  claude: {
    free: {
      price: 0,
      billing: "monthly",
      models: ["Claude Sonnet"],
      features: [
        "Limited usage",
        "Basic chat access",
      ],
    },

    pro: {
      price: 20,
      billing: "monthly",
      models: ["Claude Opus", "Claude Sonnet"],
      features: [
        "Higher usage limits",
        "Priority access",
        "Long conversations",
        "Projects feature",
      ],
    },

    team: {
      price: 30,
      billing: "monthly_per_user",
      models: ["Claude Opus"],
      features: [
        "Team collaboration",
        "Central billing",
        "Admin tools",
      ],
    },
  },

  gemini: {
    free: {
      price: 0,
      billing: "monthly",
      models: ["Gemini Flash"],
      features: [
        "Basic AI chat",
        "Google integration",
      ],
    },

    advanced: {
      price: 20,
      billing: "monthly",
      models: ["Gemini Pro"],
      features: [
        "Advanced reasoning",
        "Large context window",
        "Google Workspace integration",
        "NotebookLM Plus",
      ],
    },
  },

  copilot: {
    free: {
      price: 0,
      billing: "monthly",
      models: ["GPT-4o limited"],
      features: [
        "Basic coding help",
        "VS Code integration",
      ],
    },

    individual: {
      price: 10,
      billing: "monthly",
      models: ["GPT-4o"],
      features: [
        "Code autocomplete",
        "Chat in IDE",
        "Pull request summaries",
      ],
    },

    business: {
      price: 19,
      billing: "monthly_per_user",
      models: ["GPT-4o"],
      features: [
        "Organization policies",
        "Enterprise security",
        "Admin management",
      ],
    },
  },

  perplexity: {
    free: {
      price: 0,
      billing: "monthly",
      models: ["Basic online models"],
      features: [
        "Web search",
        "Limited pro searches",
      ],
    },

    pro: {
      price: 20,
      billing: "monthly",
      models: ["GPT-5", "Claude", "Gemini"],
      features: [
        "Pro searches",
        "Multiple LLM access",
        "File upload",
        "Research mode",
      ],
    },
  },

  grok: {
    free: {
      price: 0,
      billing: "monthly",
      models: ["Grok limited"],
      features: [
        "Limited usage",
      ],
    },

    premiumPlus: {
      price: 16,
      billing: "monthly",
      models: ["Grok"],
      features: [
        "Higher limits",
        "X platform integration",
        "Image generation",
      ],
    },
  },
};