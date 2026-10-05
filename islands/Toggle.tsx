import { IS_BROWSER } from "fresh/runtime";
import { useEffect, useRef } from 'preact/hooks';

export default function Toggle () {
	
	console.log(IS_BROWSER)

	if(!IS_BROWSER) {
		return (
			<div class='w-[2em] h-[1.5em] flex items-left border-white rounded-full border-x-2 p-x-[0.25em] p-y-[0.1em] justify-center'>
				<button class='w-[.8em] h-[.8em] rounded-full bg-white'></button>
			</div>
		)
	}

	const document = useRef(null);
	useEffect(() => {
			document.current = document.documentElement
			console.log(document)
		}, [])
	

	return (
	
	<div class='w-[2em] h-[1.5em] flex items-left border-white rounded-full border-x-2 p-x-[0.25em] p-y-[0.1em] justify-center'>
	<button class='w-[.8em] h-[.8em] rounded-full bg-white'></button>
</div>
)

}
