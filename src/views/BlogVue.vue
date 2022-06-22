<template>
  <NavBar />
  <section class="text-gray-600 body-font bg-slate-50 relative h-full px-32 mb-10">
    <!-- <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="dark:text-gray-50 mb-10 rounded-lg bg-[#F4F7FF]" v-for="article in article" :key="article.ID">
          <div
          
            class="
              container
              grid grid-cols-12
              mx-auto
              dark:bg-slate-900
              hover:bg-slate-800
              transition-all
              rounded-lg
              bg-[#F4F7FF]
            "
          >
            <div
              class="
                bg-no-repeat bg-cover
                dark:bg-gray-400
                col-span-full
                lg:col-span-4
              "
              :style="articleImg(article.cover)"
            ></div>
            <div
              class="
                flex flex-col
                p-6
                col-span-full
                row-span-full
                lg:col-span-8 lg:p-10
              "
            >
              <div class="flex justify-start">
                <span
                  class="
                    px-2
                    py-1
                    mb-5
                    text-sm
                    rounded-full
                    dark:bg-green-200 dark:text-green-700
                  "
                  >{{article.CatName}}</span
                >
              </div>
              <h1 class="text-3xl text-left mb-5 font-semibold">
                {{article.title}}
              </h1>
              <p class="flex-1 pt-2 text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni laborum odit rerum ex, perferendis quae harum ducimus recusandae eligendi.
              </p>

              <div class="flex items-center justify-between pt-2">
                <div class="flex space-x-2">
                  <a href="#" class="block relative">
                    <img
                      alt="cover"
                      :src="getProfile(article.profile)"
                      class="mx-auto object-cover rounded-full h-10 w-10"
                    />
                  </a>

                  <span class="self-center text-sm">by {{article.name}}</span>
                </div>
                <span class="text-xs">3 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    
    <div class="header flex items-end justify-between mb-12">
        <div class="title">
            <p class="text-4xl font-bold text-gray-800 mb-4 mt-10">
                Lastest articles
            </p>
            
        </div>
        
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" v-for="article in article" :key="article.ID">
            <router-link  :to="`/BlogPage/${article.ID}`">
                <a href="#" class="w-full block h-full">
                    <img alt="blog photo" :src="getProfile(article.cover)" class="max-h-40 w-full object-cover"/>
                    <div class="bg-white w-full p-4">
                        <p class="text-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full mb-5 text-md font-medium">
                            {{article.CatName}}
                        </p>
                       
                        <p class="text-gray-800  text-xl font-semibold mb-2">
                            {{article.title}}
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="block relative">
                                <img alt="profile" :src="getProfile(article.profile)" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 ">
                                    {{article.name}}
                                </p>
                                <p class="text-gray-400 ">
                                   {{displayDate(article.time)}}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                </router-link>   
            </div>
                                                        
        </div>

  </section>
  <FooterVue />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterVue.vue";
import moment from "moment";


export default {
  name: "BlogVue",
  components: {
    NavBar,
    FooterVue,
  },

  data() {
    return {
      article: "",
    };
  },

  methods: {

    displayDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    //function that gets all the articles

    articleImg(profile){
      return "background-image: url(http://localhost/filRougeImg/"+profile+");background-position: center center; background-blend-mode: multiply; background-size: cover;"
    },

    getProfile(profile){
      return "http://localhost/filRougeImg/"+profile
    },

    

    async getAllArticles() {
      const response = await fetch("http://localhost/app/blog/getAllArticles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();

        this.article = data;

        console.log(data);
      } else {
        this.$router.push("/");
        this.$toast.error("something went wrong");
      }
    },
  },

  beforeMount() {
    this.getAllArticles();
  },
};
</script>

<style>
</style>