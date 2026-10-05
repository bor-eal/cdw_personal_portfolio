import { define } from "../utils.ts";
import { Partial } from "fresh/runtime";

export default define.page(function App({ Component }) {
  return (
    <html data-theme='dark'>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class='min-h-full'>
	
	  <Component />
	
      </body>
    </html>
  );
});
