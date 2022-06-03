<template>
<NavBar/>
  <section class="text-gray-600 body-font relative -top-40">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex justify-center  text-center w-full mb-12  ">
      <h1 class="sm:text-3xl text-2xl w-fit py-4 px-10 rounded-b-lg font-medium title-font mb-4 bg-slate-900 text-slate-200">Create Your Article</h1>
      <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> -->
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex  flex-wrap -m-2">
        <!-- btns start -->

      <div class="flex ">

        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Post Image</label>
            <input type="file" id="file" accept=".png, .jpg, .jpeg" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Article title</label>
            <input type="text" id="title" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <button id="title"  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> preview cover </button>
          </div>
        </div>
       </div>
        <!-- btns end -->
        <div class="p-2 w-full">
          <div class="relative h-1/3">
              <quillEditor @change="onEditorChange($event)"  />
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
        
      </div>
      
    </div>
  </div>
</section>
<FooterVue/>
</template>

<script>
import { quillEditor } from 'vue3-quill'
import NavBar from '@/components/NavBar.vue'
import FooterVue from '@/components/FooterVue.vue'
export default {
  name:"WritePost",
  components:{
    quillEditor,
    NavBar,
    FooterVue,
},

  data(){
     return{
       delta:""
     }
  },

  methods:{
     onEditorChange(html){
         this.delta =  html
       
        console.log(html)
    },
    //function that renders html to the page
    renderHtml(){
      return this.delta.ops.map(op => {
        if(op.insert){
          return op.insert
        }
      }).join("")
    }
  }
  

}
</script>

<style>

</style>