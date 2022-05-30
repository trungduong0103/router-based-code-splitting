import { a as reactDom, r as react } from './reactVendor-8f4c0d8d.js';
import { B as BrowserRouter, R as Routes, a as Route } from './reactRouterVendor-33bff4cb.js';

var client = {};

var m = reactDom.exports;
if (process.env.NODE_ENV === 'production') {
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  client.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  client.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

const LazyHome = React.lazy(()=>import('./Home-cb4b0dd0.js'));
const LazyAbout = React.lazy(()=>import('./About-556b44b5.js'));
function App() {
    return /*#__PURE__*/ React.createElement(BrowserRouter, null, /*#__PURE__*/ React.createElement(Routes, null, /*#__PURE__*/ React.createElement(Route, {
        path: "/about",
        element: /*#__PURE__*/ React.createElement(LazyAbout, null)
    }), /*#__PURE__*/ React.createElement(Route, {
        path: "/home",
        element: /*#__PURE__*/ React.createElement(LazyHome, null)
    })));
}

const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ react.exports.createElement(react.exports.StrictMode, null, /*#__PURE__*/ react.exports.createElement(App, null)));
