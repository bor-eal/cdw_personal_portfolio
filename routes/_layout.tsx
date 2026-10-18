import { define } from "../utils.ts";
import Footer from '@/components/Footer'
import {useSignal} from '@preact/signals'
import { Partial } from "fresh/runtime";
import Nav from '@/components/Nav.tsx'
import Toggle from '@/islands/Toggle.tsx'
import {Head} from 'fresh/runtime'

export default define.layout(function RootLayout ({Component, state, url}) {

  return (
    <div class="flex min-h-screen flex-col justify-between" f-client-nav f-view-transition>
      <div class='md:flex-row md:justify-between flex flex-col pt-[1em] ml-[2em] mr-[2em] items-center'>
				<a href="/" class={`text-[1.25em] ${url.pathname === "/" ? "font-bold" : ""}`}>
	  			<h2 class='logo text-[2rem] font-bold'>CDW</h2>
				</a>
				<div class='flex gap-[1.25em] items-center'>
					<Nav/>
					<Toggle/>

				</div>     
 			</div>
    	<main>
				<Partial name='main'>
		  		<Component />
				</Partial>
      </main>
      <Footer/>
    </div>
  );
});
