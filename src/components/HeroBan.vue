<template>

<NavBar/>
<section class="relative -top-16 text-white bg-slate-900  body-font text-center">
  <div class="container mx-auto flex flex-col px-5 pt-11 justify-center items-center">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font  text-6xl mb-8 font-bold ">Apprenez des  <span class="text-sky-600">Meilleurs</span></h1>
      <p class="mb-8 leading-relaxed text-2xl">Avec l'une des meilleures communautés technologiques au monde</p>
      <!-- <div class="flex w-3/4 rounded justify-center items-end bg-slate-50 py-3 border-2 border-sky-600 ">
          <div class="relative mr-4 w-32   text-left"> -->
        <!-- <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label> -->
          <!-- <select name=""  class="w-full bg-sky-600  rounded focus:ring-2 focus:ring-blue-700   focus:border-blue-600 text-base outline-none w- py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" id="">
           <option selected>Categorie</option>
          </select>
        </div>
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left"> -->
          <!-- <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label> -->
          <!-- <input type="text" id="hero-field" name="hero-field" placeholder="Qu'aimeriez-vous apprendre ?" class="w-full bg-gray-100  rounded focus:ring-2 border-2 border-sky-400  focus:bg-transparent border   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">recherche</button>
      </div> -->
      <!--  -->
    </div>
        <img class="lg:w-3/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="@/assets/programming.svg">
  </div>
<!-- </section> -->

  <div class="text-gray-600 body-font  bg-slate-50">
  <div class="container px-5 py-16 mx-auto ">
    <div class="flex flex-col">
      
      <div class="flex flex-wrap sm:flex-row flex-col justify-center py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-bold title-font text-4xl leading-10  mb-2 sm:mb-0">Pourquoi <span class="text-sky-500 bg-sky-200 px-3 py-4 rounded-lg">TechTopia</span>?</h1>
      </div>
    </div>
    <div class="flex flex-wrap gap-10 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      
      <HeroCard source=http://localhost/filRougeImg/tailored.svg
                title="Sur mesure pour vous"
                text="Quel que soit votre niveau d'expérience, vous écrirez du code réel et fonctionnel quelques minutes après le début de votre premier cours. "
                />

      <HeroCard  title="Bite-sized"
                 source= http://localhost/filRougeImg/toTheTop.svg
                 style="width:500px; margin-bottom:75px"
                 text="Suivez étape par étape nos cours uniques. Évaluez ce que vous avez appris avec des questionnaires en cours et améliorez progressivement vos compétences avec la pratique."
      />
                 
      <HeroCard title="Get proof"
                style="width:500px; margin-bottom:75px"
                source=http://localhost/filRougeImg/teamwork.svg
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
        <h1 class="sm:w-3/5  text-gray-900 font-bold title-font text-4xl leading-10  mb-2 sm:mb-0">La plateforme idéale pour booster vos compétences techniques</h1>
      </div>
    </div>
    <div class="flex flex-wrap gap-28 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      
     
      <ThirdCard source = http://localhost/filRougeImg/student.svg 
                title="Étudiants"
                 text="Vous vous préparez pour le grand test ou vous voulez réussir votre premier entretien? Utilisez la pratique du monde réel TechTopia pour renforcer ce que vous avez appris et vous préparer pour ce grand moment."
      />
      <ThirdCard title="Professionals"
                 style="width:260px; margin:0 auto"
                 source= http://localhost/filRougeImg/content.svg
                 text="Vous pouvez apprendre quelque chose de totalement nouveau pour faire avancer votre carrière. Ou peut-être voulez-vous simplement éliminer la rouille. Essayez Sololearn pour accéder à une variété de cours, de l'apprentissage automatique au développement Web."
      />
      
    </div>
  </div>
  </div>
</section>

</template>
<script>
import HeroCard from "@/components/HeroCard"
import ThirdCard from "@/components/ThirdCard"
import NavBar from "@/components/NavBar"


export default{
    name: "HeroBan",
    components: { HeroCard, ThirdCard,NavBar }
}
</script>