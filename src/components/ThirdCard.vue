<template>
  <div class="sm:w-1/3 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" :src="source" :style="style">
        </div>
        <h2 class="title-font text-2xl font-bold text-gray-900 mt-6 mb-7">{{title}}</h2>
        <p class="leading-relaxed text-base text-slate-500">{{text}}</p>
      </div>
</template>

<script>
export default {
    name: "ThirdCard",
    props:[
        'title',
        'text',
        'source',
        'style'
    ]

}
</script>

<style>

</style>