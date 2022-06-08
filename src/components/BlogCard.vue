

<template>
	<div class=" dark:text-gray-50 mb-10 rounded-lg bg-[#F4F7FF] ">
		<div class="container grid grid-cols-12 mx-auto dark:bg-slate-900 hover:bg-slate-800 transition-all rounded-lg bg-[#F4F7FF]">
			<div class="bg-no-repeat bg-cover dark:bg-gray-400 col-span-full lg:col-span-4" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
			<div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
				<div class="flex justify-start">
					<span class="px-2 py-1 mb-5 text-sm rounded-full dark:bg-green-200 dark:text-green-700">Category</span>
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
					<span class="text-xs">3 min ago</span>
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