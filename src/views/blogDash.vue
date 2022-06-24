<template>
  <main class="bg-gray-100  h-fit  relative ">
    <div class="flex items-start justify-between">
      <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
        <!-- Heeeeeeeeeeeeeeeeeere -->
        <sideBarDash />
      </div>

      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <header
          class="
            w-full
            shadow-lg
            bg-white
            
            items-center
            h-16
            rounded-2xl
            z-40
          "
        >
          <div
            class="
              relative
              z-20
              flex flex-col
              justify-center
              h-full
              px-3
              mx-auto
              flex-center
            "
          >
            <div
              class="
                relative
                items-center
                pl-1
                flex
                w-full
                lg:max-w-68
                sm:pr-2 sm:ml-0
              "
            >
              <div
                class="container relative left-0 z-50 flex w-3/4 h-auto h-full"
              >
                <div
                  class="relative flex items-center w-full lg:w-64 h-full group"
                >
                  <div
                    class="
                      absolute
                      z-50
                      flex
                      items-center
                      justify-center
                      block
                      w-auto
                      h-10
                      p-3
                      pr-2
                      text-sm text-gray-500
                      uppercase
                      cursor-pointer
                      sm:hidden
                    "
                  >
                    <svg
                      fill="none"
                      class="relative w-5 h-5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <svg
                    class="
                      absolute
                      left-0
                      z-20
                      hidden
                      w-4
                      h-4
                      ml-4
                      text-gray-500
                      pointer-events-none
                      fill-current
                      group-hover:text-gray-400
                      sm:block
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    class="
                      block
                      w-full
                      py-1.5
                      pl-10
                      pr-4
                      leading-normal
                      rounded-2xl
                      focus:border-transparent
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      ring-opacity-90
                      bg-gray-100
                      
                      text-gray-400
                      aa-input
                    "
                    placeholder="Search"
                  />
                  <div
                    class="
                      absolute
                      right-0
                      hidden
                      h-auto
                      px-2
                      py-1
                      mr-2
                      text-xs text-gray-400
                      border border-gray-300
                      rounded-2xl
                      md:block
                    "
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                class="
                  relative
                  p-1
                  flex
                  items-center
                  justify-end
                  w-1/4
                  ml-5
                  mr-4
                  sm:mr-0 sm:right-auto
                "
              >
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="/images/person/1.jpg"
                    class="mx-auto object-cover rounded-full h-10 w-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>


<!-- ====== Blog Section Start -->

    
<!-- ====== Blog Section End -->

      </div>  

      
    </div>
   </main> 
</template>

<script>
import sideBarDash from "@/components/sideBarDash.vue";
import moment from "moment";

export default {

name:"blogDash",
components: {
    sideBarDash,
  },

  data(){
      
      return{
          article: "",
          
          }
  },

  methods:{

      displayDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },

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
        // this.$router.push("/");
        this.$toast.error("something went wrong");
      }
    },

    //delete an article

    async deleteArticle(id) {

        let obj = {
        id: id,
        
      };
      const response = await fetch("http://localhost/app/blog/deleteArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(obj),
      });

      if (response.status === 200) {
          this.getAllArticles();
          this.$toast.success(" Item deleted");
        
      } else {
        // this.$router.push("/");
        this.$toast.error("something went wrong");
      }
    },

  },

  beforeMount(){
      this.getAllArticles();
  }

}
</script>

<style>

</style>