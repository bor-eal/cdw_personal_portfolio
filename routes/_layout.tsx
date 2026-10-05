import { define } from "../utils.ts";
import Footer from '@/components/Footer'
import {useSignal} from '@preact/signals'
import { Partial } from "fresh/runtime";
import Nav from '@/components/Nav.tsx'
import Toggle from '@/islands/Toggle.tsx'

export default define.layout(function RootLayout ({Component, state, url}) {
  const count = useSignal(3)
  
  
  return (

    <div class="layout" f-client-nav>
      <div class='flex justify-between mt-[2em] ml-[2em] mr-[2em] items-center'>
				<a href="/" class={`text-[1.25em] ${url.pathname === "/" ? "font-bold" : ""}`}>
	  			<h2 class='text-[2rem] font-bold italic'>C.D.W</h2>
				</a>
				<div class='flex gap-[1.25em]'>
					<Nav/>
					<Toggle/>

				</div>     
 			</div>
    <main class=''>
			<Partial name='main'>
		  	<Component />
			</Partial>
      </main>
      <Footer/>
    </div>
  );
});
