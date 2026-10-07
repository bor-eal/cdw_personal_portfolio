import { define } from '@/utils.ts'


export default define.page(function Post () {
	return (
	<div class="max-w-6xl mx-auto">
		<h1 class="text-center">Working With Fresh</h1>
		<p>Having just finished Scrimba's full stack developer path I set out to create a portfolio site.  Having had significant experience during traing with tools such as React, nodejs and Nextjs I wanted to challenge myself a little in developing this site.</p>
		<p>Realising the ocean of tools, SDKs, frameworks and runtimes out there I have enjoied dipping my toes in to see what others had to offer and many still feel very appealing.  However it was fresh I went with for a handful of reasons.  I wanted to use new tooling for this site to further my learning and utlise my skills to decipeher the docs and build something that works, to show myslef, and I hope others, that I can.</p>
		<h2>Why Fresh</h2>
		<p>Quickly, why Fresh?  Fresh became known to me shortly after I found Deno, I had been merily working on node applications during my training and strated to explore what other runtimes existed.  The desire to use one was peaked with several security incidents across the last few years with npm packages, whilst I learnt how to implement better controls on my interactions with npm as a new developer I was very intrigued by a runtiem that reported to have a permisions system built in for what my apps where askign the runtime to do.</p>
		<hr/>
		<blockquote>Aside: Everything I Know About Deno by Niklas Metje (https://deno.niklasmtj.de/) was a good read in addition to deno docs to uderstand the runtime.</blockquote>
		<hr/>
		<p>So after adopting deno, Fresh felt like a natural fit.  I was intigued by elements of its reported simplicity, the fact that it was newer and less adopted (giving a challenege in its adoption with less community support), docs seemed good and its use of preact (I like things to be lean) meant I had some common ground (even if I had to make sure that ground din't blind me).</p>
	<h2>My expereince</h2>
	<p>It has been a postivie and enjoyable build using Fresh and Deno.  Out of the box the set up script for a new project was successful, straightforward, and produced a farily self explanatory set of files and directories.</p>
	<p>Fresh encourages the use of file based routing which was fine by me, the sever routing is already set up for this (you can define different behaviour if necessary), settign up layouts and new routes worked well.</p>
		<p>Partials took a beat to get on board with, the steps needed seemed a little akward to me but gelled after I played around a litle.</p>
		<p>I have enjoied my fovrae into preact and will happily use it again, not haiving to worry about a state setter function is very appealing.</p>
		<p>Enabling a theme swticher was an interesting adventure, I could see a way to do it using state and context, analogous to how I was tuaght to do so when learnign react, but as I was enjoying the goal of minimal js to the site and prefering a server side render where possible.  So I did what everyone screams when teahcing someone to learn, look at other experience and similar systems, so I opened deve tools and had a look at how deno's theme switcher worked.  Changing the data-theme attribute in the html element was new to me but appealing as I only had to have one island that worked on that element of the DOM rather than all components havign to update their style to reflect it.  Luke Lowery's [blog post][https://lukelowrey.com/css-variable-theme-switcher/] provided a good insight to this methodology.</p>
		<p>Active link hihglighting was a doddle as Fresh adds teh ariaxxx protery for you to make use of -</p> 
		<h2>Fresh Docs</h2>
		<p>An honourable mention is needed for the fresh docs, they seem to have given a great deal of time to righting something that is informal, approachable and helpful, without loosing sight of imparting useful technical information.</p>
		<h2>Conclusion</h2>
		<p>This is the first app I have deployed using a framework and their is far more about my learning I could list here, but I as don't have many concrete technicsl comparison to make to other systems I have left it as a new users impression.  And as such I would say that I have found Fresh to be more than adequate, its tooling is complete for the simple site I built, complete with a few useful tools to make akward things easier. I will certainly use it again.</p>
		<hr/>
		<blockquote>Music recommendation whilst making this site Pylon by beabadoobee</blockquote>
		<hr/>
	</div>
	)
})
