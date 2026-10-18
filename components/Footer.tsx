export default function Footer () {
  return (
     <footer class="mt-auto flex items-center justify-center text-[.9em] gap-[1em]">
				<div class='built-using'>
					<p class="inline mr-[1em]">&copy; 2026 CDW</p>
					<p class="inline">Made using:</p>	  
						<ul class="inline ">
							<li class="inline ml-[.75em]"><a href="https://usefresh.dev/" target="_blank">Fresh</a></li>
							<li class="inline mx-[.75em]"><a href="https://tailwindcss.com/" target="_blank">Tailwind</a></li>
						</ul>
					<p class="text-center block md:inline">Deployed via: <a href="https://deno.com/deploy" class="mx-[.75em]" target="_blank">Deno Deploy</a></p>
				</div>
      </footer>
  )
  
}
