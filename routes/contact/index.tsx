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
  				<h1 class='text-[2rem] my-[1em]'>Contact CDW</h1>
					<form class='grid gap-y-[1.5em]'>
						<label>name (whatever you want to be addressed as)
							<input class='block' type='text' placeholder='Winton'/>
						</label>
						<label>email
							<input type='email' class='block' placeholder='winton@gmail.com'/>
						</label>
						<label>message
							<textarea class='block'></textarea>
						</label>
					<button type='submit'>Reach Out</button>
					</form>        
				</div>
	   </div>
	   </Partial>
  );
});

