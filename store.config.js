module.exports = {
  seo: {
    title: 'Fashion Starter',
    description: 'ACCT - Fashion Starter',
    titleTemplate: '%s | Fashion Starter',
    author: 'ACCT',
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'fashionstarter',
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default session
  session: {
    currency: {
      code: 'BRL',
      symbol: 'R$',
    },
    locale: 'pt-BR',
    channel: '{"salesChannel":"2","regionId":""}',
    country: 'BRA',
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: 'https://fashion-starter.acct.global',
  secureSubdomain: 'https://secure.acct.global',
  checkoutUrl: 'https://secure.acct.global/checkout',
  loginUrl: 'https://secure.acct.global/api/io/login',
  accountUrl: 'https://secure.acct.global/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
