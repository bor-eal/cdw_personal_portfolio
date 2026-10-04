import { define } from "../utils.ts";
import Footer from '@/components/footer'
import {useSignal} from '@preact/signals'
import Counter from '@/islands/Counter.tsx'
import { Partial } from "fresh/runtime";
import Nav from '@/islands/Nav.tsx'

export default define.layout(function RootLayout ({Component, state, url}) {
  const count = useSignal(3)
  
  
  return (

    <div class="layout" f-client-nav>
      <div class='flex justify-between mt-[2em] ml-[2em] mr-[2em] items-center'>
	<a href="/" class={`text-[1.25em] ${url.pathname === "/" ? "font-bold" : ""}`}>
	  <h2 class='text-[2rem] font-bold italic'>C.D.W</h2>
	</a>
	<Counter count={count}/>
	<Nav url={url}/>
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
