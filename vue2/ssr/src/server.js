import express from "express";
import { createRenderer } from "vue-server-renderer";
import Vue from "vue";
import App from "../src/client/index";

const app = express();

app.get("/", (req, res) => {
  const clientBundleScript = `<script src="http://localhost:8080/main.js"></script>`;
  const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/main.css">`;

  const renderer = createRenderer();

  renderer.renderToString(App).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="data:," />
            <title>Vue 2 SSR</title>
            ${clientBundleStyle} 
        </head>
        <body>
            <div id="root">${html}</div>
            ${clientBundleScript} 
        </body>
    </html>
`);
  });
});

app.listen(3000, () => {
  console.log(`App listening on http://localhost:3000`);
});
