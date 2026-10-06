export type PostBoxProps = {
  href:string,
	index: number,
  title:string,
	date: string,
  description:string
}

export default function PostBox ({href, date, index, title, description}:PostBoxProps) {

  return (
    <a href={href} target='_blank'>
      <div class='max-w-4xl border-4 p-[1em] rounded-xl flex items-center'>
				<h2>{index}</h2>
				<div>
					<h4 class='text-[1.25em] font-bold text-center '>{title}</h4>
					<p class=''>{description}</p>
    		</div>
			</div>
    </a>
  )
  
}
