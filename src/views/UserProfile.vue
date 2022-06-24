<template>
  <!-- component -->

  <NavBar />

  <div class="p-16">
    <div class="p-8 bg-white shadow mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div
          class="
            grid grid-cols-3
            text-center
            order-last
            md:order-first
            mt-20
            md:mt-0
          "
        >
          <div>
            <p class="font-bold text-gray-700 text-xl">0</p>
            <p class="text-gray-400"><i class="fa-solid fa-newspaper"></i></p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">0</p>
            <p class="text-gray-400"><i class="fa-solid fa-heart"></i></p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">0</p>
            <p class="text-gray-400 text-lg">
              <i class="fa-solid fa-comment-dots"></i>
            </p>
          </div>
        </div>
        <div class="relative">
          <div
            class="
              w-48
              h-48
              bg-indigo-100
              mx-auto
              rounded-full
              shadow-2xl
              absolute
              inset-x-0
              top-0
              -mt-24
              flex
              items-center
              justify-center
              text-indigo-500

            
            "
            :style="profileConcatUp(profile)"
            
          >
            <!-- <img :src="profileConcat(profile)" alt="" class="pic" /> -->
          </div>
        </div>
        <div
          class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"
        >
          <button
            class="
              text-white
              px-5
              uppercase
              rounded-full
              bg-blue-400
              hover:bg-blue-500
              shadow
              hover:shadow-lg
              font-medium
              transition
              transform
              hover:-translate-y-0.5
            "
            @click="displayUpdate = !displayUpdate"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            class="
              text-white
              py-2
              px-4
              uppercase
              rounded
              bg-gray-700
              hover:bg-gray-800
              shadow
              hover:shadow-lg
              font-medium
              transition
              transform
              hover:-translate-y-0.5
            "
          >
            Message
          </button>
        </div>
      </div>
      <div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          {{ name }}
        </h1>
        <p class="font-light text-gray-600 mt-3">
          membre depuis <span>{{ displayDate(membre) }}</span>
        </p>
        <p class="mt-8 text-gray-500">
          <i class="fa-solid fa-at"></i> <span>{{ email }}</span>
        </p>
        <p class="mt-4 text-gray-500">
          <i class="fa-solid fa-phone"></i> <span>{{ phone }}</span>
        </p>
      </div>
      <div class="mt-8 flex flex-col justify-center">
        <h1 class="text-xl font-medium text-gray-700 text-center">
          Qui suis-je ?
        </h1>
        <p class="text-gray-600 text-center font-light lg:px-16">
          {{ description }}
        </p>
        <button class="text-indigo-500 py-2 px-4 font-medium mt-4">
          Show more
        </button>
      </div>
    </div>
  </div>

  <!-- popup start -->

  <!-- ====== Modal Section Start -->
  <section v-show="displayUpdate">
    
    <div
      class="
        bg-black bg-opacity-90
        fixed
        top-0
        left-0
        w-full
        min-h-screen
        h-full
        flex
        items-center
        justify-center
        px-4
        py-5
      "
    >
      <div
        class="
          relative
          w-full
          max-w-[570px]
          rounded-[20px]
          bg-white
          py-12
          px-8
          md:py-[60px] md:px-[70px]
          text-center
        "
      >

         <form @submit.prevent="updateProfile" >
        <span
          class="
            flex
            w-full
            absolute
            top-0
            right-0
            justify-end
            pr-5
            pt-5
          "
          @click="displayUpdate = !displayUpdate"
        >
          <i
            class="
              fa-solid fa-xmark
              text-xl text-slate-600
              bg-slate-300
              px-2
              rounded-full
              hover:cursor-pointer hover:bg-slate-600 hover:text-slate-300
              transition-all
              duration-400
            "
          ></i
        ></span>
        <span
          class="inline-block bg-primary h-1 w-[90px] mx-auto rounded mb-6"
        ></span>
        <!-- form starts -->

        <!-- <div
          class="
            lg:w-2/6
            md:w-1/2
            bg-gray-100
            rounded-lg
            p-8
            flex flex-col
            md:ml-auto
            w-full
            md:mt-0
          "
        > -->
          
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600"
              > Name</label
            >
            <input
              type="text"
              id="full-name"
              name="full-name"
              v-model="name"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >phone</label
            >
            <input
              type="text"
              id="email"
              name="email"
              v-model="phone"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >description</label
            >
            <textarea
              type="text"
              id="email"
              name="email"
              v-model="description"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            >
            </textarea>
          </div>
          
          
        <!-- </div> -->

        <!--form ends  -->
        <div class="flex flex-wrap justify-center">
         
          <div class="w-1/2 px-3 flex justify-center">
            <button
              class="
                
                text-center
                py-4
                px-5
                text-base
                font-medium
                rounded-full
                bg-blue-500
                text-white
                hover:bg-opacity-90
                transition

              "
            >
             <i class="fa-solid fa-floppy-disk"></i>
            </button>
          </div>
        </div>

       </form>
      </div>
    </div>
  </section>
  <!-- ====== Modal Section End -->

  <!-- popup end -->

  <Footer />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/FooterVue.vue";
import moment from "moment";
import swal from 'sweetalert';

export default {
  name: "UserProfile",
  components: {
    NavBar,
    Footer,
    
  },

  data() {
    return {
      profile: "",
      name: "",
      email: "",
      membre: "",
      phone: "",
      description: "",
      displayUpdate:false
    };
  },

  methods: {
    displayDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    profileConcatUp(profile){

               return "background-image: url(http://localhost/filRougeImg/"+profile+"); background-position: center;"
    },

    profileConcat(profile) {
      return "http://localhost/filRougeImg/" + profile;
    },

    // function get user profile
    async getProfile() {
      const response = await fetch("http://localhost/app/users/getUserById", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: localStorage.getItem("id"),
        }),
      });

      if (response.status == 200) {
        const data = await response.json();
        this.profile = data.profile;
        this.name = data.name;
        this.email = data.email;
        this.membre = data.membre;
        this.phone = data.phone;
        this.description = data.description;
      }
    },

    //function update user profile
    async updateProfile() {
      const response = await fetch("http://localhost/app/users/updateUserById", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: localStorage.getItem("id"),
          name: this.name,
          email: this.email,
          phone: this.phone,
          description: this.description,
        }),
      });

      if (response.status == 200) {
        // const data = await response.json();
          this.getProfile();
        this.displayUpdate = false;
              swal({
        title: "Profile Updated",
        icon: "success",
      });
      }
    },



  },

  beforeMount() {
    this.getProfile();
  },
};
</script>

<style scoped>


</style>