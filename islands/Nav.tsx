export default function Nav ({url}) {

  const isActiveDic ={
    about: url.pathname === "/about" ? "font-bold" : "",
    posts: url.pathname === "/posts" ? "font-bold" : "",
    trove: url.pathname === "/trove" ? "font-bold" : "",
		contact: url.pathname === '/contact' ? 'font-bold' : ''
  }


  console.log(url.pathname)

  return (
	  <nav class='flex gap-x-[1em]'>
            <a href="/about" class={`text-[1.25em] ${isActiveDic.about}`}>About</a>
	    <a href='/posts' class={`text-[1.25em] ${isActiveDic.posts}`}>Posts</a>
	    <a href='/trove' class={`text-[1.25em] ${isActiveDic.trove}`}>Trove</a>
			<a href='/contact' class={`text-[1.25em] ${isActiveDic.contact}`}>Contact</a>
	  </nav>
	)
}
