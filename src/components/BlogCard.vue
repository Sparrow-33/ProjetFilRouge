<!-- <template>
  <div class="p-4 md:w-1/3">
        <div class="h-full bg-white   border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="@/assets/ethic.png" alt="blog">
          <div class="p-6">
              <div class="flex w-full mb-5">
                 <h2 class="tracking-widest text-sm title-font text-left font-medium text-green-600 bg-emerald-100 px-2 py-1 rounded-full mb-1 w-fit">June 10,2022</h2>
                 <h2 class="tracking-widest text-sm title-font text-left font-medium text-amber-500 bg-amber-100 px-2 py-1 rounded-full mb-1 ml-32 w-fit">Category</h2>
              </div>
            <h1 class="title-font text-lg text-left font-medium text-gray-900 mb-3">What is Ethical Hacking and how it is used</h1>
            <div class="flex items-center flex-wrap ">
              
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
</template> -->

<template>
	<div class="dark:bg-slate-800 dark:text-gray-50 mb-10 ">
		<div class="container grid grid-cols-12 mx-auto dark:bg-slate-800 hover:bg-slate-700 transition-all transition-colors">
			<div class="bg-no-repeat bg-cover dark:bg-gray-400 col-span-full lg:col-span-4" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
			<div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
				<div class="flex justify-start">
					<span class="px-2 py-1 mb-5 text-xs rounded-full dark:bg-green-400 dark:text-green-700">Category</span>
				</div>
				<h1 class="text-3xl text-left mb-5 font-semibold">Lorem ipsum dolor sit.</h1>
				<p class="flex-1 pt-2 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
			
				<div class="flex items-center justify-between pt-2">
					<div class="flex space-x-2">

						<a href="#" class="block relative">
    <img alt="profil" src="../assets/ethic.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
               </a>

						<span class="self-center text-sm">by Leroy Jenkins</span>
					</div>
					<span class="text-xs">3 min read</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
     name:"BlogCard"
}
</script>

<style scoped>

</style>