import { IS_BROWSER } from "fresh/runtime";
import { useEffect, useRef } from 'preact/hooks';

export default function Toggle () {
	
	if(!IS_BROWSER) {
		return (
			<div class='w-[2em] h-[1.5em] flex items-left border-white rounded-full border-x-2 p-x-[0.25em] p-y-[0.1em] justify-center'>
				<button class='w-[.8em] h-[.8em] rounded-full '></button>
			</div>
		)
	}

	const html = useRef(null);
	useEffect(() => {
			html.current = document.documentElement
		}, [])
	
	function toggleTheme (): void {
		const currentTheme = html.current.getAttribute('data-theme')
		let theme = 'dark'
		
		if(currentTheme === theme) {
			theme = 'light'
		}
		html.current.setAttribute('data-theme', theme)
	}

	return (
	
	<div class='w-[2em] h-[1.5em] flex items-left border-white rounded-full border-x-2 p-x-[0.25em] p-y-[0.1em] justify-center'>
	<button class='w-[.8em] h-[.8em] rounded-full ' onClick={toggleTheme}></button>
</div>
)

}
