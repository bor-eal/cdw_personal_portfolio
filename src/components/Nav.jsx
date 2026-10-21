import { useEffect, useRef } from 'preact/hooks';

export default function Nav () {

	const links = {
	'about': 'aboutLink',
	'posts': 'postsLink',
	'trove': 'troveLink',
	'contact': 'contactLink'
	}
	
	const activeLink = useRef(null);
	useEffect(() => {
			const path = location.pathname.split('/')
			if(links[path[1]]){
				activeLink.current = document.getElementById(links[path[1]])
				activeLink.current.classList.add('font-bold')
			}
  }, []);

	return (
		<nav class='flex gap-x-[1em]'>
      <a href="/about" id='aboutLink' class={`text-[1.25em]`}>About</a>
	    <a href='/posts' id='postsLink' class={`text-[1.25em]`}>Posts</a>
	    <a href='/trove' id='troveLink' class={`text-[1.25em]`}>Trove</a>
			<a href='/contact' id='contactLink' class={`text-[1.25em]`}>Contact</a>
	  </nav>
	)
}	
