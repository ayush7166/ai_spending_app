// data/pricing.ts
//we compair on the bases of priority and priority is based on features that plan provide
export const pricing = {
  chatgpt: {
    free: {
      priority: 1,
      price: 0,
    },
    plus: {
      priority: 2,
      price: 20,
    },
    pro: {
      priority: 3,
      price: 200,
    },
    team: {
      priority: 2,
      price: 30,
    },
  },
  claude: {
    free: {
      priority: 1,
      price: 0,
    },
    pro: {
      priority: 2,
      price: 20,
    },
    team: {
      priority: 2,
      price: 30,
    },
  },
  gemini: {
    free: {
      priority: 1,
      price: 0,
    },
    advanced: {
      priority: 2,
      price: 20,
    },
  },
  copilot: {
    free: {
      priority: 1,
      price: 0,
    },
    individual: {
      priority: 2,
      price: 10,
    },
    business: {
      priority: 2,
      price: 19,
    },
  },
  perplexity: {
    free: {
      priority: 1,
      price: 0,
    },

    pro: {
      priority: 2,
      price: 20,
    },
  },

  grok: {

    free: {
      priority: 1,
      price: 0,
    },

    premiumPlus: {
      priority: 2,
      price: 16,
    },
  },
};