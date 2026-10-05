export default function Nav ({url}) {
  return (
	  <nav class='flex gap-x-[1em]'>
            <a href="/about" class={`text-[1.25em] aria-[current]:font-bold`}>About</a>
	    <a href='/posts' class={`text-[1.25em] aria-[current]:font-bold`}>Posts</a>
	    <a href='/trove' class={`text-[1.25em] aria-[current]:font-bold`}>Trove</a>
			<a href='/contact' class={`text-[1.25em] aria-[current]:font-bold`}>Contact</a>
	  </nav>
	)
}
