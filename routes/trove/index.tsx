import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import TroveBox from '@/components/TroveBox'

export default define.page(function Trove () {
  return (
    <div class="px-4 py-8 mx-auto  min-h-screen">
	<Head>
	  <title>Trove of Self Made Things</title>
	</Head>
	<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Trove of Self Made Things</h1>
	  <div class='flex mg-t-10'>
	  <TroveBox
	    href='https://elf-exchange.scatter.deno.net/'
	    title='Elf Exchange'
	    imgURL='/elf_exchange_screenshot.png'
	    alt='Screenshot of Elf Exchange Website'
	    description={`This simple app allows the user to generate a series of gifting pairs
	    ignoring any pairings the user disallows.  Pairs are generated randomly and the user cna move back and forth
	    between the steps as needed.

	    This was made fairly early in my journey and remains a fun project that utilises a more vanilla approach
	    with some fun flares.`}
	  />
	  </div>
        </div>
      </div>
    
 )
  

})

