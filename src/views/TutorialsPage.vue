<template>
  <NavBar/>
  <!-- <svg class="relative -top-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,106.7C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> -->
  <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <!-- <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          There is no must in art<br class="hidden md:block" />
          because art is free.
        </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>
      <p class="text-gray-700 lg:text-sm lg:max-w-md">
        "Class is dead", says Foucault; however, according to Reicher, it is not so much class that is dead, but rather the absurdity, and some would say the paradigm, of class. However, the subject is interpolated into a
        postpatriarchialist dialectic theory that includes consciousness as a totality.
      </p>
    </div> -->
    <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <a href="/" aria-label="View Item">
        <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="@/assets/html.png" alt="" />
          <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
            <p class="text-sm tracking-wide text-gray-300">
              Painted between 1503 and 1517, Da Vinci’s alluring portrait has been dogged by two questions since the day it was made: Who’s the subject and why is she smiling?
            </p>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item">
        <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="@/assets/JS.jpg" alt="" />
          <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-4 text-lg font-bold text-gray-100">The Starry Night</p>
            <p class="text-sm tracking-wide text-gray-300">
              Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889.
            </p>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item">
        <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="@/assets/CSS.jpg" alt="" />
          <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
            <p class="text-sm tracking-wide text-gray-300">
              Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau.
            </p>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item">
        <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="@/assets/php.jpg" alt="" />
          <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-4 text-lg font-bold text-gray-100">The Harvesters</p>
            <p class="text-sm tracking-wide text-gray-300">
              Bruegel’s fanfare for the common man is considered one of the defining works of Western art. This composition was one of six created on the theme of the seasons.
            </p>
          </div>
        </div>
      </a>
    </div>
    <div class="text-center">
      <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
        View gallery
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
        </svg>
      </a>
    </div>
  </div>

  <FooterVue/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterVue from '@/components/FooterVue.vue'

export default {
    name:"TutorialsPage",
    components:{
    NavBar,
    FooterVue
     
              },
    
}
</script>

<style>

</style>