const path = require("path");
const fs = require("fs");
const { h } = require("preact");
const { render } = require("preact-render-to-string");

function getHTML() {
  const dist = path.resolve(__dirname, "..", "dist");
  const index = path.resolve(dist, "index.html");
  const html = fs.readFileSync(index, "utf8");

  return html;
}

function prerender() {
  const html = getHTML();

  const appPath = path.join(__dirname, "..", "dist/App.js");

  const App = require(appPath).App.default;
  const root = render(h(App));

  const file = html.replace(
    /<div id="root">(.*)<\/div>/,
    `<div id="root">${root}</div>`
  );

  fs.writeFileSync("dist/index.html", file, "utf8");
}

prerender();
