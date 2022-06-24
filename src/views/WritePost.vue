<template>
<NavBar/>
  <section class="text-gray-600 body-font relative -top-40">
  <form @submit.prevent="createArticle()" >
  <div class="container px-5 py-24 mx-auto">
    <div class="flex justify-center  text-center w-full mt-14 mb-14  ">
      <h1 class="sm:text-3xl text-2xl w-fit py-4 px-10 rounded-b-lg font-medium title-font mb-4 bg-slate-900 text-slate-200">Creer votre Article</h1>
      <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> -->
    </div>
    <div class="lg:w-full md:w-2/3 mx-auto">
      <div class="flex  flex-wrap -m-2">
        <!-- btns start -->

      <div class="flex items-baseline w-full ">

       <div class="p-2 ">
          <div class="relative">
            <!-- <label for="name" class="leading-7 text-sm text-gray-600">Post Image</label> -->
            <select  class="preview-btn bg-gray-100 bg-opacity-50 rounded-full border border-slate-900  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-on:change="changeItem($event)"
              v-model="selected">
              <option selected>Categories</option>
              <option  v-for="cat in categories" :key="cat.IDC" :value="cat.IDC">
                {{cat.CatName}}
              </option>
            </select>
          </div>
        </div>

        <div class="p-2 w-1/2">
          <div class="relative">
            <!-- <label for="name" class="leading-7 text-sm text-gray-600">Post Image</label> -->
            <input type="file" id="file" accept=".png, .jpg, .jpeg" @change="handleUpload($event.target.files)" name="photo" class= " w-full bg-gray-100 bg-opacity-50 rounded-full border border-slate-900  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <!-- <label for="email" class="leading-7 text-sm text-gray-600">Article title</label> -->
            <input type="text" id="title" v-model="title" placeholder="titre d'article"  name="email" class="preview-btn bg-[#F4F7FF]   border-b-2 border-slate-800   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <!-- <label for="title" class="leading-7 text-sm text-gray-600">Cover preview</label> -->
            <button id="title"  class="preview-btn bg-[#F4F7FF] rounded-full border border-slate-900 text-base outline-none text-gray-700 py-1 px-3 ml-10 leading-8 transition-colors duration-200 ease-in-out"> voir couverture  </button>
          </div>
        </div>
       </div>
        <!-- btns end -->
        <div class="p-2 w-full relative">
          <div class="relative h-full">
              <quillEditor v-model:value="delta" />
          </div>

          <div class="p-2 w-full">
          <button class=" flex mx-auto mt-24 text-white bg-sky-400 border-0 py-2 px-8 focus:outline-none hover:bg-sky-500 rounded-full text-lg transition-ease duration-100">Publier</button>
        </div>
        </div>
        
      

      </div>
    </div>
  </div>

        </form>

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
       delta:"",
       photo: null,
       title:"",
       categories:null,
       selected:null,
     }
  },

  methods:{

   changeItem: function changeItem(event) {
      this.selected = event.target.value;

      console.log(event.target.value);
    },


     onEditorChange(html){
         this.delta =  html
       
    },

    handleUpload(file){
      this.photo = file[0]
    },

    async createArticle(){

      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('content', this.delta)
      formData.append('file', this.photo)
      formData.append('category_id', this.selected)
  
      const response = await fetch('http://localhost/app/users/createArticle',{
          method: 'POST',
          body:formData
      }) 

      let data = await response.json()
      console.log(data)

      
    },

    //function to post comment
    async postComment(){
      const formData = new FormData()
      formData.append('content', this.comment)
      formData.append('article_id', this.article_id)
      formData.append('user_id', this.user_id)
  
       await fetch('http://localhost/app/users/postComment',{
          method: 'POST',
          body:formData
      }) 

      // let data = await response.json()

      
    },

    //function to get all categories
    async getCategories(){
      const response = await fetch('http://localhost/app/users/getCategories',{
          method: 'GET',
      }) 

      let data = await response.json()

      this.categories = data

         console.log("here are the categories")
        console.log(this.categories)
      
    },
    
    

   
  },

  beforeMount(){

    this.getCategories()

  }
  
  

}
</script>

<style scroped>
.preview-btn {
  width:200px;
}
</style>