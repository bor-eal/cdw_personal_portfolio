import { define } from '@/utils.ts'


export default define.page(function Post () {
	return (
	<>
		<article class="max-w-6xl mx-auto">
			<a href="/posts" class="italic">{"< all posts"}</a>
			<h1 class="text-center">Working With Fresh</h1>
			<p>Having just finished Scrimba's Full Stack Developer Path I set out to create a portfolio site.  Having had significant experience during the training with tools such as React, nodejs and Nextjs I wanted to challenge myself a little in developing this site.</p>
			<br/>
			<p>Once I realised the ocean of tools, SDKs, frameworks and runtimes avaliable to web developers, I have enjoyed dipping my toes into them to see what they have to offer, with most being something I want to employee, at least in part, in the future.  However it was Fresh, from the team behind teh Deno runtime, I went with for a handful of reasons.<br/>I wanted to use new tooling for this site to further my learning and challenge myself to decipher the docs and build something that works, to show myself, and I hope others, that I can.</p>
			<h2>Why Fresh</h2>
			<p>Quickly, why Fresh?  Fresh became known to me shortly after I found Deno, I had been merrily working on node applications during my training and started to explore what other runtimes existed.  The desire to use one was peaked with several security incidents across the last few years with npm packages, whilst I learnt how to implement better controls on my interactions with npm, as a new developer I was very intrigued by a runtime that reported to have a permissions system built in for what my apps were asking the runtime to do.</p>
			<hr/>
			<blockquote>Aside: Everything I Know About Deno by Niklas Metje (https://deno.niklasmtj.de/) was a good read in addition to Deno docs to understand the runtime, especially getting started with it.</blockquote>
			<hr/>
			<p>So after adopting Deno, Fresh felt like a natural fit.  I was intrigued by its reported simplicity, the fact that it was newer and less adopted than many other frameworks (giving a further challenge with less community support and weight behind it), that the docs seemed good and its use of preac meant I had some common ground (even if I had to make sure that ground didn't blind me).</p>
			<h2>My experience</h2>
			<p>It has been a positive and enjoyable build using Fresh and Deno.  Out of the box the set up script for a new project was successful, straightforward, and produced a fairly self explanatory set of files and directories.</p><br/>
			<p>Fresh encourages the use of file based routing which was fine by me, the server routing is already set up for this (you can define different behavior if necessary), setting up layouts and new routes worked well.</p>
			<p>Partials took a beat to get on board with, the steps needed seemed a little awkward to me but gelled after I played around a litle.</p>
			<p>I have enjoyed my foray into preact and will happily use it again, not having to worry about a state setter function is very appealing.</p><br/><br/>
			<p>Enabling a theme switcher was an interesting adventure, I could see a way to do it using state and context, analogous to how I was taught to do so when learning react, but as I was enjoying the goal of sending minimal js to the site and preferring a server side render where possible, I sought another way.  I did what everyone screams when teaching someone to learn, look at others experience and similar systems, so I opened my browser's dev tools and had a look at how the Fresh docs theme switcher worked.  Changing the data-theme attribute in the html element was new to me but appealing as I only had to have one js 'island' that worked on that element of the DOM rather than all components having to update their style to reflect it.  Luke Lowery's <a href="https://lukelowrey.com/css-variable-theme-switcher"/>blog post</a> provided a good insight to this methodology.</p>
			<p>Active link highlighting was a doddle as Fresh adds the aria-current property for you to make use of when it renders links.</p> 
			<h2>Fresh Docs</h2>
			<p>An honorable mention is needed for the Fresh docs, they seem to have given a great deal of time to writing something that is informal, approachable and helpful, without loosing sight of imparting useful technical information.</p>
			<h2>Conclusion</h2>
			<p>This is the first app I have deployed using a framework and there is far more about my learning I could list here, but I as don't have many concrete technical comparisons to make to other frameworks I have left it as a new users impression.  And as such I would say that I have found Fresh to be more than adequate, its tooling is complete for the site I built, complete with a few useful tools to make awkward things easier. I will certainly use it again.</p>
			<hr/>
			<blockquote>Music recommendation whilst making this site 'Pylon' by beabadoobee</blockquote>
			<hr/>	
			<a href="/posts" class="italic block text-center">| return to all posts |</a>
		</article>
	</>	
	)
})
