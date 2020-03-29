let Vue

class Router{
  constructor({routes}) {
    this.routeMap = routes.reduce((memo, current) => (memo[current.path] = current.component), {});
    this.route = {current: '/'}

    window.addEventListener('load', () => {
      location.hash ? '' : location.hash = '/';
    });
    window.addEventListener('hashchange', () => {
      this.route.current = location.hash.slice(1);
    });
  }
}

Router.install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if(this.$options && this.$options.router) {
        this._router = this.$options.router;
      }else {
        this._router = this.$parent && this.$parent._router;
      }
      Object.defineProperty(this, '$route', {
        value: {}
      })

      Object.defineProperty(this, '$router', {
        value: {}
      });
    },
  });

  Vue.component('router-link', {
    props: {
      to: String,
    },
    render() {
      return <a href={`#${this.to}`}>{ this.$slots.default }</a>
    }
  });

  Vue.component('router-view', {
    render(h) {
      return h(this._router.routeMap[this._router.route.current])
    },
  });
}