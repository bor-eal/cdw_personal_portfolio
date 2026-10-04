import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import { Partial } from "fresh/runtime";


export const config: RouteConfig = {
  // skipAppWrapper: true,
  // skipInheritedLayouts: true,
};

export default define.page(function About () {
  return (
    <Partial name='about'>
         <div class="px-4 py-8 mx-auto min-h-screen">
	   <Head>
	     <title>About CDW: Callum Daley-West</title>
	   </Head>
	   <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
             <h1 class="text-4xl font-bold">About CDW: Callum Daley-West</h1>
             <p class="my-4">Talk to me about gardening, fruit and veg is best, acient history or other cultures and we will be fast friends</p>
           </div>
	   <nav>
	     <a href='#'>Codeberg</a>
	     <a href='#'>Github</a>
	     <a href='#'>LinkedIn</a>
	     <a href='#'>Github</a>
	   </nav>
	   </div>
	   </Partial>
  );
});
