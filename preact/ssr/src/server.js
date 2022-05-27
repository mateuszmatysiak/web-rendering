import { h } from "preact";
import render from "preact-render-to-string";
import express from "express";
import App from "../src/client/App";

const app = express();

app.get("/", (req, res) => {
  const app = render(<App />);

  const clientBundleScript = `<script src="http://localhost:8080/main.js"></script>`;
  const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/main.css">`;

  res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" href="data:," />
                <title>Preact SSR</title>
                ${clientBundleStyle} 
            </head>
            <body>
                <div id="root">${app}</div>
                ${clientBundleScript} 
            </body>
        </html>
    `);
});

app.listen(3000, () => {
  console.log(`App listening on http://localhost:3000`);
});
