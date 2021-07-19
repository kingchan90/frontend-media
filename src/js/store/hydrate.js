import Route from 'route-parser';

const controllers = [];
const pre = [];
const preSync = [];

export async function init(request, store) {
  for (let i = 0; i < preSync.length; i++) {
    const f = preSync[i];
    await f(request, store);
  }
  await Promise.all(pre.map(f => {
    console.log('f', f);
    return f(request, store);
  }));
}

export default async function hydrate(request, store) {
  console.log(controllers)
  await Promise.all(controllers.map(f => {
    return f(request, store);
  }));
}

export function route(path, cb, options = {}) {

  controllers.push((request, store) => {
    if (path === '*') {
      return cb({ request, route: { path, params: {} }, store });
    }
    const r = new Route(path);
    const params = r.match(request.path);
    if (params !== false) {
      return cb({ request, route: { path, params }, store });
    }
    return null;
  });
}

export function preRoute(cb) {
  pre.push((request, store) => {
    return cb({ request, store });
  });
}

export function preRouteSync(cb) {
  preSync.push((request, store) => {
    return cb({ request, store });
  });
}
