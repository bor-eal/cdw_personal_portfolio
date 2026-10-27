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
	
	<button class='user-toggle w-[1.75em] h-[1.25em] rounded-full border-2' onClick={toggleTheme}></button>
)

}
