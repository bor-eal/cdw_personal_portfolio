// Code started using the deno supplied info, then altered by myself, need to use routes/_error.tsx Tehn scrutenize the error in here

export default function ErrorPage(ctx) {
  const error = ctx.error; // Contains the thrown Error or HTTPError
	console.log(error)  

//can I implement error instanceof HttpError?

if (error.status) {
    const status = error.status; // HTTP status code
		
    if (status === 404) {
      return (
				<div class="flex justify-center items-center my-[2rem]">
					<h1 class="border-e p-[.5em] mx-[1em]">{status}</h1>
					<p>Page not found - Let me know if you think it should: <a href="/contact">contact me</a></p>
				</div>				
		);
    } else {
 			 return (
					<div class="flex justify-center items-center my-[2rem]">
						<h1 class="border-e p-[.5em] mx-[1em]">{status}</h1>
						<p>Oh something has gone wrong: best return to<a href="/">home</a></p>
					</div>
			)				
		}
	 }

  return (
				<div class="flex justify-center items-center my-[2rem]">
					<h1 class="border-e p-[.5em] mx-[1em]">Uh Oh</h1>
					<p>Something has gone unexpectedly wrong: best return to<a href="/">home</a> and I will work on fixing this quirk</p>
				</div>
	)				
} 
