import { useEffect, useRef } from 'preact/hooks';

export default function Toggle () {


	
	const html = useRef(null);
	useEffect(() => {
			html.current = document.documentElement

console.log('picking theme')
  const theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? '';
    if (['dark', 'light'].includes(localStorageTheme)) {
      return localStorageTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
      return 'dark';
  })();

console.log('applying theme')
  if (theme === 'light') {
    document.querySelector('html').setAttribute("data-theme", 'light');
  } else {
    document.querySelector('html').setAttribute("data-theme", 'dark');
  }

  window.localStorage.setItem('theme', theme);
});



	
	function toggleTheme () {
		const currentTheme = html.current.getAttribute('data-theme') ?? 'dark'
		let theme = 'dark'
		
		if(currentTheme === theme) {
			theme = 'light'
		}
		html.current.setAttribute('data-theme', theme)
		localStorage.setItem("theme", theme)
	}

	return (
	
	<div class='w-[2em] h-[1.5em] flex items-left border-white rounded-full border-x-2 p-x-[0.25em] p-y-[0.1em] justify-center'>
	<button class='w-[1em] h-[1em] rounded-full ' onClick={toggleTheme}></button>
</div>
)

}
