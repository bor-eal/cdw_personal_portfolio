// Code started using the deno supplied info, then altered by myself, need to use routes/_error.tsx Tehn scrutenize the error in here

export default function ErrorPage(ctx) {
  const error = ctx.error; // Contains the thrown Error or HTTPError
	console.log(error)  

//if (error instanceof HttpError) {
    //const status = error.status; // HTTP status code
		//}
    // Render a 404 not found page
    if (error.status === 404) {
      return (
				<div class="flex">
					<h1 class="border-e">404</h1>
					<p>Page not found - Let me know if you think it should: <a href="/contact">contact me</a></p>
				</div>				
		);
    }
 

  return <h1>Oh no...</h1>;
} 
