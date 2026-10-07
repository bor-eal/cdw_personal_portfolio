export type PostBoxProps = {
  href:string,
	index: number,
  title:string,
	date: string,
  description:string
}

export default function PostBox ({href, date, index, title, description}:PostBoxProps) {

  return (
    <a href={href} >
      <div class="box max-w-4xl p-[1em] rounded-xl flex">
				<h2>{index}</h2>
				<div>
					<p class="mx-[1em] my-[0] text-left">{date}</p>
					<h4 class="mx-[1em] mb-[1em] mt-[.25em] text-[1.25em] font-bold text-left">{title}</h4>
					<p class="mx-[1em]">{description}</p>
    		</div>
			</div>
    </a>
  )
  
}
