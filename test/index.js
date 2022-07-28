import Route from '../lib/routing.js';
const target = document.querySelector('#app');
const routing = [
  {
    url: /^\/\/?$/,
    params: [],
    paramsMatching: [],
    component: async (param) => new(await import('./views/A.js')).default(param)
  },
  {
    url: /^\/b\/?$/,
    params: [],
    paramsMatching: [],
    component: async (param) => new(await import('./views/B.js')).default(param)
  },
  {
    url: /^\/c\/?$/,
    params: [],
    paramsMatching: [],
    component: async (param) => new(await import('./views/C.js')).default(param)
  },
  {
    url: /^\/shope\/?$/,
    params: [],
    paramsMatching: [],
    component: async (param) => new(await import('./views/Shope.js')).default(param)
  },
  {
    url: /^\/shop\/([^/]+)\/?$/,
    params: ['shopId'],
    paramsMatching: [],
    component: async (param) => new(await import('./views/Shope.js')).default(param)
  },
  {
    url: /^\/item\/([^/]+)\/([^/]+)\/?$/,
    params: ['shopId', 'itemId'],
    paramsMatching: [],
    component: async (param) => new(await import('./views/Item.js')).default(param)
  },
  {
    url: /^\/item\/([^/]+)\/([^/]+)\/?$/,
    params: ['shopId', 'itemId'],
    paramsMatching: [
      // (shopId) => /^\d+$/.test(shopId),
      // (itemId) => /^\d+$/.test(itemId),
    ],
    component: async (param) => new(await import('./views/Anyrout.js')).default(param)
  },
];

const rout = new Route(routing, target);
rout.createRouting();
