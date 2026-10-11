import { define } from '@/utils.ts'
import {Head} from 'fresh/runtime'
import PostBox from '@/components/PostBox.tsx'

export default define.page(function Posts () {

    return (
			<div class='max-w-4xl text-center grid justify-center align-center mx-auto'>
      	<Head>
					<title>Posts lists</title>
				</Head>
				<h1 class="m-[1em]">Posts</h1>
				<PostBox title="Working with Fresh: Building this site" 
									index={1}
									href="posts/1"
									description="Learn about the creation of this site and my thoughts as a fresh faced developer using fresh"
									date="10/10/2026"/>
  		</div>  
	
		)

})
