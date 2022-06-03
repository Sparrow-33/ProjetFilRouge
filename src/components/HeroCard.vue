<template>
  <div class="card p-4 sm:mb-0 mb-6 bg-white rounded-lg ">
        <div class="rounded-lg h-fit overflow-hidden">
          <img alt="content" class="object-center" :src="source" :style="style">
        </div>
        <h2 class="text-2xl font-bold title-font text-gray-900 my-5">{{title}}</h2>
        <p class="text-base leading-relaxed mt-2 text-slate-500">{{text}}</p>
        
      </div>
</template>

<script> 
export default {
    name:"HeroCard",
    props:[
        'title',
        'text',
        "source",
        'style'
    ]

}
</script>

<style scoped>
  .card{
      width: 300px;
  }
</style>