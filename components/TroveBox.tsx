export type TroveBoxProps = {
  href:string,
  title:string,
  imgURL:string,
  alt:string,
  description:string
}

export default function TroveBox ({href, title, imgURL, alt, description}:TroveBoxProps) {

  return (
    <a href={href} target='_blank'>
      <div class="box max-w-4xl p-[1em] rounded-xl flex">
				<img class="rounded-xl w-[30rem] my-[1em]" src={imgURL} alt={alt}/>
				<div>
					<h4 class="text-[1.25em] font-bold mx-[1em]">{title}</h4>
					<p class="mx-[1em]">{description}</p>
    		</div>
			</div>
    </a>
  )
  
}
