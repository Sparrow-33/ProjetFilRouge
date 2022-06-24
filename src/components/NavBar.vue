<template>
  <header class="text-gray-600 body-font relative bg-slate-900">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <router-link
        to="/"
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <img src="@/assets/logo.svg" class="w-10 h-10" />
        <h1 class="ml-3 text-xl text-white">
          <span class="font-bold text-">T</span>ech<span>T</span>opia
        </h1>
      </router-link>

      <nav
        class="
          md:ml-auto
          text-white
          md:mr-auto
          flex flex-wrap
          items-center
          text-base
          justify-center
        "
      >
        <router-link to="/TutorialsPage" class="mr-5 hover:text-cyan-600"
          >Tutoriels</router-link
        >
        <router-link to="/" class="mr-5 hover:text-cyan-600">Home</router-link>
        <router-link to="#" class="mr-5 hover:text-cyan-600"
          >a propos</router-link
        >
        <router-link :to="{ name: 'blog' }" class="mr-5 hover:text-cyan-600"
          >Blog</router-link
        >
        <router-link v-if="state == false"
          :to="{ name: 'WritePost' }"
          class="mr-5 hover:text-cyan-600"
          >create Article</router-link
        >
        <router-link to="/ContactPage" class="mr-5 hover:text-cyan-600"
          >Contactez nous</router-link
        >
        <!-- profile start -->

        <div class="relative inline-block" v-if="state == false" >
          <!-- Dropdown toggle button -->
          <button
            @click="profile = !profile"
            class="
              relative
              z-10
              flex
              items-center
              p-2
              text-sm text-gray-600
              bg-white
              border border-transparent
              rounded-md
              focus:border-blue-500 focus:ring-opacity-40
              dark:focus:ring-opacity-40
              focus:ring-blue-300
              dark:focus:ring-blue-400
              focus:ring
              dark:text-white dark:bg-gray-800
              focus:outline-none
            "
          >
            <span class="mx-1">{{name}}</span>
            <svg
              class="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            class="
              absolute
              right-0
              z-20
              w-56
              py-2
              mt-2
              overflow-hidden
              bg-white
              rounded-md
              shadow-xl
              dark:bg-gray-800
            "
            v-show="profile"
          >
            <a
              href="#"
              class="
                flex
                items-center
                p-3
                -mt-2
                text-sm text-gray-600
                transition-colors
                duration-200
                transform
                dark:text-gray-300
                hover:bg-gray-100
                dark:hover:bg-gray-700 dark:hover:text-white
              "
            >
              <img
                class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                :src="profileConcat(profile_pic)"
                alt="jane avatar"
              />
              <div class="mx-1">
                <h1
                  class="text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  {{name}}
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{email}}
                </p>
              </div>
            </a>

            <hr class="border-gray-200 dark:border-gray-700" />

            <router-link to="/UserProfile"
              
              class="
                flex
                items-center
                p-3
                text-sm text-gray-600
                capitalize
                transition-colors
                duration-200
                transform
                dark:text-gray-300
                hover:bg-gray-100
                dark:hover:bg-gray-700 dark:hover:text-white
              "
            >
              <svg
                class="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span  class="mx-1"> view profile </span>
            </router-link>

            <hr class="border-gray-200 dark:border-gray-700" />

            <hr class="border-gray-200 dark:border-gray-700" />

            <a
              href="#"
              class="
                flex
                items-center
                p-3
                text-sm text-gray-600
                capitalize
                transition-colors
                duration-200
                transform
                dark:text-gray-300
                hover:bg-gray-100
                dark:hover:bg-gray-700 dark:hover:text-white
              "
            >
              <svg
                class="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30452 6.63459 1.92794 12.1307 2.00087C17.6268 2.07379 22.0337 6.56887 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57928 16.4087 3.99999 11.992 3.99999C7.57528 3.99999 3.99421 7.57928 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM13 18H11V16H13V18ZM13 15H11C10.9684 13.6977 11.6461 12.4808 12.77 11.822C13.43 11.316 14 10.88 14 9.99999C14 8.89542 13.1046 7.99999 12 7.99999C10.8954 7.99999 10 8.89542 10 9.99999H8V9.90999C8.01608 8.48093 8.79333 7.16899 10.039 6.46839C11.2846 5.76778 12.8094 5.78493 14.039 6.51339C15.2685 7.24184 16.0161 8.57093 16 9.99999C15.9284 11.079 15.3497 12.0602 14.44 12.645C13.6177 13.1612 13.0847 14.0328 13 15Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span class="mx-1"> my blog </span>
            </a>
            <a
              @click="logout"
              href="#"
              class="
                flex
                items-center
                p-3
                text-sm text-gray-600
                capitalize
                transition-colors
                duration-200
                transform
                dark:text-gray-300
                hover:bg-gray-100
                dark:hover:bg-gray-700 dark:hover:text-white
              "
            >
              <svg
                class="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span class="mx-1"> Sign Out </span>
            </a>
          </div>
        </div>

        <!-- profile end -->
      </nav>

      <router-link to="/SignIn"  v-if="state == true">
        <button
          class="
            inline-flex
            items-center
            text-white
            bg-sky-500
            border-0
            py-2
            px-3
            focus:outline-none
            hover:bg-sky-600
            rounded
            text-base
            mt-4
            md:mt-0
          "
         
        >
          s'inscrire
        </button>
      </router-link>
    </div>
  </header>
</template>

<script >
import { tsNullKeyword } from '@babel/types';

export default {
  name: "NavBar",

  data() {
    return {
      profile: false,
      toke: localStorage.getItem("id"),
      state:tsNullKeyword,
      profile_pic:"",
      name:"",
      email:""
    };
  },

  methods:{

    // function to check if user is logged in
    isLoggedIn() {
      if (localStorage.getItem("id") == null || localStorage.getItem("id") == "") {
        console.log( localStorage.getItem("id"));
        this.state = true;
        return true;
      } else {
        this.state = false;
        return false;
      }
    },

    // function to logout user
    logout(){
      localStorage.removeItem("id");
      this.$router.push("/SignIn");
    },

    profileConcat(profile) {
      return "http://localhost/filRougeImg/" + profile;
    },

    async getProfile() {
      
     
      const response = await fetch("http://localhost/app/users/getUserById", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            id: localStorage.getItem("id"),
          }),
        });

        if(response.status == 200){
          const data = await response.json();
          this.profile_pic = data.profile;
          this.name = data.name;
          this.email = data.email;
        }
    },


  },

  beforeMount() {
    if(!this.isLoggedIn())
    {
        this.getProfile()
    }
    
  },
};
</script>

<style scoped>
header {
  /* margin-top: 60px;  */
}
</style>