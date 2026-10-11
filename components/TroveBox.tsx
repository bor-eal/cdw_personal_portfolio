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
      <div class="box max-w-4xl p-[1em] rounded-xl flex flex-col md:flex-row">
				<img class="rounded-xl my-[1em] md:w-[100%] object-contain md:object-cover" src={imgURL} alt={alt}/>
				<div class="md:max-w-[50%]">
					<h4 class="text-[1.25em] font-bold mx-[1em]">{title}</h4>
					<p class="mx-[1em] ">{description}</p>
    		</div>
			</div>
    </a>
  )
  
}
