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
      <div class='border-4 p-[1em] rounded-xl flex items-center'>
				<img class='rounded-xl w-[30rem]' src={imgURL} alt={alt}/>
				<div>
					<h4 class='text-[1.25em] font-bold text-center '>{title}</h4>
					<p class=''>{description}</p>
    		</div>
			</div>
    </a>
  )
  
}
