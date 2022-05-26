<template>
    <section class="relative -top-16 text-white bg-slate-900  body-font">
  <div class="container mx-auto flex flex-col px-5 pt-11 justify-center items-center">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font  text-6xl mb-8 font-bold ">Learn From The <span class="text-sky-600">Best</span></h1>
      <p class="mb-8 leading-relaxed text-2xl">With one of  the world's best tech community</p>
      <div class="flex w-3/4 rounded justify-center items-end bg-slate-50 py-3 border-2 border-sky-600 ">
          <div class="relative mr-4 w-32   text-left">
        <!-- <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label> -->
          <select name=""  class="w-full bg-sky-600  rounded focus:ring-2 focus:ring-blue-700   focus:border-blue-600 text-base outline-none w- py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" id="">
           <option selected>Category</option>
          </select>
        </div>
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <!-- <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label> -->
          <input type="text" id="hero-field" name="hero-field" placeholder="What would you like to learn about ?" class="w-full bg-gray-100  rounded focus:ring-2 border-2 border-sky-400  focus:bg-transparent border   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">search</button>
      </div>
      <!--  -->
    </div>
        <img class="lg:w-3/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="@/assets/programming.svg">
  </div>
<!-- </section> -->

  <div class="text-gray-600 body-font  bg-slate-50">
  <div class="container px-5 py-16 mx-auto ">
    <div class="flex flex-col">
      
      <div class="flex flex-wrap sm:flex-row flex-col justify-center py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-bold title-font text-4xl leading-10  mb-2 sm:mb-0">Why <span class="text-sky-500 bg-sky-200 px-3 py-4 rounded-lg">TechTopia</span>?</h1>
      </div>
    </div>
    <div class="flex flex-wrap gap-10 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      
      <HeroCard imgName="tailored.svg"
                title="Tailored for you"
                text="No matter your experience level, you'll be writing real, functional code within minutes of starting your first course. "
                />

      <HeroCard  title="Bite-sized"
                 text="Go step-by-step through our unique courses. Assess what you’ve learned with in-lesson quizzes, and gradually advance your skills with practice."
      />
                 
      <HeroCard title="Get proof"
                text="Earn a certificate to validate your newly acquired skills. 
                          Post it on social for others to see."
      />
      
    </div>
  </div>
  </div>

  <!-- third section -->
  <div class="text-gray-600 body-font  bg-white">
  <div class="container px-5 py-16 mx-auto ">
    <div class="flex flex-col">
      
      <div class="flex flex-wrap sm:flex-row flex-col justify-center py-6 mb-12">
        <h1 class="sm:w-3/5  text-gray-900 font-bold title-font text-4xl leading-10  mb-2 sm:mb-0">The perfect platform to boost your technical skills</h1>
      </div>
    </div>
    <div class="flex flex-wrap gap-28 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      
     
      <ThirdCard title="Students"
                 text="Prepping for the big test or want to ace your first interview? Use Sololearn's real-world practice to reinforce what you've learned and get you ready for that big moment."
      />
      <ThirdCard title="Professionals"
                 text="You can learn something totally new to advance your career. Or maybe you just want to knock off the rust. Try Sololearn to get access to a variety of courses, from machine learning to web development."
      />
      
    </div>
  </div>
  </div>
</section>

</template>
<script>
import HeroCard from "@/components/HeroCard"
import ThirdCard from "@/components/ThirdCard"



export default{
    name: "HeroBan",
    components: { HeroCard, ThirdCard }
}
</script>