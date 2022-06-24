<template>
  
<main class="bg-gray-100   h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <!-- Heeeeeeeeeeeeeeeeeere -->

            <sideBarDash/>
        </div>
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <header class="w-full shadow-lg bg-white  items-center h-16 rounded-2xl z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div class="relative flex items-center w-full lg:w-64 h-full group">
                                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 text-gray-400 aa-input" placeholder="Search"/>
                                    <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <a href="#" class="block relative">
                                    <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                
    <section class="p-6 my-6 ">
        <h1 class="text-3xl font-semibold mb-10 border-b-2 pb-3">TechTopia In Numbers</h1>
		<div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">

            
			<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-amber-400 text-white">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-amber-500">
					<i class="fa-solid fa-comment text-white text-3xl"></i>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{comment}}</p>
					<p class="capitalize">comments</p>
				</div>
			</div>
			<div class="flex p-4 space-x-4 text-white rounded-lg md:space-x-6 bg-emerald-400">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-500">
					<i class="fa-solid fa-newspaper text-3xl"></i>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{articles}}</p>
					<p class="capitalize">articles</p>
				</div>
			</div>
			<div class="flex p-4 space-x-4 rounded-lg text-white md:space-x-6 bg-cyan-400">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-cyan-500">
					<i class="fa-solid fa-user text-3xl"></i>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{users}}</p>
					<p class="capitalize">User</p>
				</div>
			</div>
			<div class="flex p-4 text-white space-x-4 rounded-lg md:space-x-6 bg-rose-400">
				<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-500">
					<i class="fa-solid fa-heart text-3xl"></i>
				</div>
				<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leading-none">{{likes}}</p>
					<p class="capitalize">Reaction</p>
				</div>
			</div>
		</div>
	</section>
            </div>
        </div>
    </main>

</template>

<script>
import sideBarDash from "@/components/sideBarDash.vue";
export default {
  name:"DashBoard",
  components:{
      sideBarDash,
  },

  data(){
      return{
          comment:"",
          articles:"",
          likes:"",
          users:""
      }
  },

  methods:{
    async countComment() {

      const response = await fetch("http://localhost/app/blog/countComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
            });

      if (response.status == 200) {

        const data = await response.json();
        console.log(data);
        this.comment = data;
                                  }

      },  


      async countArticle() {

      const response = await fetch("http://localhost/app/blog/countArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
            });

      if (response.status == 200) {

        const data = await response.json();
        console.log(data);
        this.articles = data;
                                  }

      },
      
        async countLikes() {

      const response = await fetch("http://localhost/app/blog/countLikes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
            });

      if (response.status == 200) {

        const data = await response.json();
        console.log(data);
        this.likes = data;
                                  }

      },  


         async countUser() {

      const response = await fetch("http://localhost/app/blog/countUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
            });

      if (response.status == 200) {

        const data = await response.json();
        console.log(data);
        this.users = data;
                                  }

      },  
  },

  beforeMount(){
      this.countLikes();
      this.countArticle();
      this.countComment();
      this.countUser();
  }

}
</script>

<style scoped>
 body{
     background:gray;
 }
</style>>

