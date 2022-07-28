import load from '../views/load.js';
const NotFound = async (param) => new (await import  ('../views/Notfound.js')).default(param)
const mapVal = new Map();

class Route {
  constructor(routes, target) {
    this.routes = routes;
    this.target = target;
    this.currentComponent = null;
    this.currentComponentInstance = null;
    this.params = {};
  }

  async createRouting() {
    this.matchRoute(window.location.pathname);

    this.target.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLocation = e.originalTarget.href;
      if (!targetLocation) return;
      const targetPathname = new URL(targetLocation).pathname;
      history.pushState({}, undefined, targetPathname);
      this.matchRoute(targetPathname);
    });

    window.addEventListener('popstate', () => {
      this.matchRoute(window.location.pathname);
    });
  };

  async matchRoute(pathname) {

    let matchedRouteParams;
    let matchedRoute;

    for (const route of this.routes) {
      const match = pathname.match(route.url);
      if (match) {
        matchedRoute = route;
        if (route.params) {
          for (let i = 0; i < route.params.length; i++) {
            this.params[route.params[i]] = match[i + 1];
          }
          matchedRouteParams = this.params;
          break;
        }
      }
    }

    const matchedComponenPromis = matchedRoute ? matchedRoute.component : NotFound;

    this.showLoad();
    mapVal.set('matchedComponent', matchedComponenPromis);
    this.hideLoad();
    const component = await matchedComponenPromis(matchedRouteParams);
    const matchedComponent = this.target.innerHTML = await component.getHtml();

    if (this.currentComponent === matchedComponent) {
      const mc = mapVal.get('matchedComponent');
      const comp = await mc(matchedRouteParams);
      const matchComp = this.target.innerHTML = await comp.getHtml();
      this.currentComponentInstance = matchComp;
    } else {
      if (this.currentComponentInstance) this.currentComponentInstance = null;
      this.currentComponentInstance = matchedComponent;
    }
    this.currentComponent = matchedComponent;

  }

  async showLoad() {
    this.target.innerHTML =  await new load().getHtml();
  }

  hideLoad() {
    this.target.innerHTML = null;
  }
}

export default Route;
