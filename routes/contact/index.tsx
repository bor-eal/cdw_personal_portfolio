import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import { Partial } from "fresh/runtime";

export default define.page(function Contact () {
  return (
    <Partial name='contact'>
    	<div class="px-4 py-8 mx-auto">
	   		<Head>
	     		<title>Contact CDW</title>
	   		</Head>
	   			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
  					<h1 class='text-[2rem] mx-auto my-[1em] text-center'>Under Construction [Contact CDW]</h1>
						<form class='grid gap-y-[1.5em] justify-center align-center'>
							<label>name (whatever you want to be addressed as)
								<input disabled class='block' type='text' placeholder='Winton'/>
							</label>
							<label>email
								<input disabled type='email' class='block' placeholder='winton@gmail.com'/>
							</label>
							<label>message
								<textarea disabled class='block'></textarea>
							</label>
							<button type="submit" disabled={true} style={{cursor: 'not-allowed'}}>Reach Out</button>
						</form>        
					</div>
	  		 </div>
	   </Partial>
  );
});


			//	<div style={{position: "relative", backgroundColor: "black", opacity: "0.75"}} class="w-full h-full">Coming Soon
