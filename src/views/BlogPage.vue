<template>
  <NavBar/>
	<div class="p-5 mx-auto sm:p-10 md:p-16  text-gray-800">
		<div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
			<img src="https://source.unsplash.com/random/480x360" alt="" class="w-full h-60 sm:h-96 bg-gray-500">
			<div class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
				<div class="space-y-2">
					<a rel="noopener noreferrer" href="#" class="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
					<p class="text-xs text-gray-600">By
						<a rel="noopener noreferrer" href="#" class="text-xs hover:underline">Leroy Jenkins</a>
					</p>
				</div>
				
			</div>

			<div class="text-gray-800">
					<h1>Insert the actual text content here...</h1>
					<div >Lorem ipsum dolor</div>
			        

			</div>
		</div>
	</div>
	<FooterVue/>
</template>
			

<script>
import NavBar from '@/components/NavBar.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
    name: "BlogPage",
    components: { NavBar, FooterVue }
}
</script>

<style>

</style>