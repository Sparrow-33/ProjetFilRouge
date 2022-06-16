<template>
    
<header class="text-gray-600 body-font relative bg-slate-900">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <router-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="@/assets/logo.svg" class="w-10 h-10"/>
      <h1 class="ml-3 text-xl text-white"><span class="font-bold text-">T</span>ech<span>T</span>opia</h1>
    </router-link>

    <nav class="md:ml-auto text-white md:mr-auto flex flex-wrap items-center text-base justify-center">
      <router-link to="/TutorialsPage" class="mr-5 hover:text-cyan-600">Tutoriels</router-link>
      <router-link to="#" class="mr-5 hover:text-cyan-600">Home</router-link>
      <router-link to="#"  class="mr-5 hover:text-cyan-600">a propos</router-link>
      <router-link :to="{name:'blog'}" class="mr-5 hover:text-cyan-600">Blog</router-link>
      <router-link :to="{name: 'WritePost'}"  class="mr-5 hover:text-cyan-600">create Article</router-link>
      <router-link to="/ContactPage" class="mr-5 hover:text-cyan-600">Contactez nous</router-link>
    </nav>

    <router-link to="/SignIn">
    <button class="inline-flex items-center text-white bg-sky-500 border-0 py-2 px-3 focus:outline-none hover:bg-sky-600 rounded text-base mt-4 md:mt-0">s'inscrire
    </button>
    </router-link>


  </div>
</header>

</template>

<script >

export default{

    name:"NavBar",


}
</script>

<style scoped>
   header{
       /* margin-top: 60px;  */

   }
</style>