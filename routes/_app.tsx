import { define } from "../utils.ts";
import { Partial } from "fresh/runtime";

export default define.page(function App({ Component }) {
  return (
    <html data-theme='dark'>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/png" href="/favicon.png"/>
      </head>
      <body class="min-h-dvh">
	
	  <Component />
	
      </body>
    </html>
  );
});
