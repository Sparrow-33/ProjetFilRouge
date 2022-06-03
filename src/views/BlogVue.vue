<template>
<NavBar/>
<section class="text-gray-600 body-font bg-slate-50 relative h-full px-32 ">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap -m-4">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      
    </div>
  </div>
</section>
<FooterVue/>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
import NavBar from '@/components/NavBar.vue'
import FooterVue from '@/components/FooterVue.vue'
export default {
    name:"BlogVue",
    components:{
    BlogCard,
    NavBar,
    FooterVue
}
}
</script>

<style>

</style>