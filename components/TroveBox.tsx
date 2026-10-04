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
      <div class='border-grey border-4 p-[1em] rounded-xl bg-black'>
	<img src={imgURL} alt={alt}/>
	<h4 class='text-[1.25em] font-bold text-center text-orange-600'>{title}</h4>
	<p class='text-orange-400'>{description}</p>
    </div>
    </a>
  )
  
}
