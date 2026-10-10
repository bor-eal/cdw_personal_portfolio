import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home(ctx) {

  return (
    <div class="px-4 py-8 mx-auto ">
      <Head>
				<title>CDW welcomes you</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6 rounded-full"
          src="/cdw_outdoors_headshot.png"
          width="128"
          height="128"
          alt="Photo of Callum Daley-West"
        />
        <h1 class="text-4xl font-bold">Welcome</h1>
        <p class="my-4 text-center" >
        I am a full stack web developer working from the UK.  This site will let you learn about me, reveal a few of my thoughts, point you to some of my work and help you reach out if you want to make contact. Why not try these to get started:
				</p>
				<h4>Latest Post</h4>
				<a href="/posts/1">How I built it: the making of this site and my thoughts on fresh</a>
				<h4>Pick from the Trove</h4>
				<a href="https://elf-exchange.scatter.deno.net/" target="_blank">Elf Exchnage: A simple tool to help you generate random pairs for a gift exchange group</a>
      </div>
    </div>
  );
});
