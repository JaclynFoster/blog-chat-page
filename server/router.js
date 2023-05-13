const routes = {
  '/login' : login,
  '/blog' : blog,
  '/chat' : chat,
  // '/': home,
  };
  const rootDiv = document.querySelector('#root-div');
rootDiv.innerHTML = routes[window.location.pathname];

const routePath = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }