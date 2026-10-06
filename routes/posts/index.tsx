import { define } from '@/utils.ts'
import PostBox from '@/components/PostBox.tsx'

export default define.page(function Posts () {

    return (
			<div class='max-w-4xl text-center grid justify-center align-center'>
      	<h1>Posts</h1>
				<PostBox title="How I built it" 
									index={1}
									href="posts/1"
									description="Learn about the creation of this site and my thoughts as a fresh faced developer using fresh"
									date="10/10/2026"/>
  		</div>  
	
		)

})
