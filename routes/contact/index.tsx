import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import { Partial } from "fresh/runtime";


export const config: RouteConfig = {
  // skipAppWrapper: true,
  // skipInheritedLayouts: true,
};

export default define.page(function Contact () {
  return (
    <Partial name='contact'>
         <div class="px-4 py-8 mx-auto min-h-screen">
	   <Head>
	     <title>Contact CDW</title>
	   </Head>
	   			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
  	<form>
			tbc
		</form>        
	</div>
	   </div>
	   </Partial>
  );
});

