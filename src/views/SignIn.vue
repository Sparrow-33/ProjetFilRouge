<template>
  <NavBar />
  <section class="bg-[#F4F7FF] py-20 lg:py-[120px] relative h-full">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div
            class="
              max-w-[525px]
              mx-auto
              text-center
              bg-white
              rounded-lg
              relative
              overflow-hidden
              py-16
              px-10
              sm:px-12
              md:px-[60px]
            "
          >
            <form @submit.prevent="signIn">
              <div class="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  class="
                    w-full
                    rounded-md
                    border border-[#E9EDF4]
                    py-3
                    px-5
                    bg-[#FCFDFE]
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-sky-500 focus:border-2
                  "
                  v-model="email"
                />
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  class="
                    w-full
                    rounded-md
                    border border-[#E9EDF4]
                    py-3
                    px-5
                    bg-[#FCFDFE]
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-sky-500 focus:border-2
                  "
                  v-model="password"
                />
              </div>
              <div class="mb-10">
                <input
                  type="submit"
                  value="Sign In"
                  class="
                    w-full
                    rounded-md
                    border
                    bordder-primary
                    py-3
                    px-5
                    bg-blue-500
                    text-base text-white
                    cursor-pointer
                    hover:bg-opacity-90
                    transition
                  "
                />
              </div>
            </form>
            <a
              href="javascript:void(0)"
              class="
                text-base
                inline-block
                mb-2
                text-[#adadad]
                hover:underline hover:text-primary
              "
            >
              Forget Password?
            </a>
            <p class="text-base text-[#adadad]">
              Not a member yet?
              <router-link
                to="/SignUp"
                class="text-primary hover:underline hover:text-cyan-600"
              >
                Sign Up
              </router-link>
            </p>
            <div>
              <span class="absolute top-1 right-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.39737"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 1.39737 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 1.39737 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 13.6943 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 13.6943 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 25.9911 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 25.9911 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 38.288 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 38.288 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 1.39737 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 13.6943 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 25.9911 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 38.288 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 1.39737 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 13.6943 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 25.9911 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 38.288 14.0086)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
              <span class="absolute left-1 bottom-1">
                <svg
                  width="29"
                  height="40"
                  viewBox="0 0 29 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2.288"
                    cy="25.9912"
                    r="1.39737"
                    transform="rotate(-90 2.288 25.9912)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 14.5849 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 26.7216 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="13.6944"
                    r="1.39737"
                    transform="rotate(-90 2.288 13.6944)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 14.5849 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 26.7216 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="38.0087"
                    r="1.39737"
                    transform="rotate(-90 2.288 38.0087)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="1.39739"
                    r="1.39737"
                    transform="rotate(-90 2.288 1.39739)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 14.5849 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 26.7216 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 14.5849 1.39761)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 26.7216 1.39761)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterVue />
  <!-- ====== Forms Section End -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterVue.vue";
export default {
  name: "SignIn",
  components: {
    NavBar,
    FooterVue,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      if (this.email == "" || this.password == "") {
        this.$toast.error("Please fill all the fields");
      } else {
        const response = await fetch("http://localhost/app/users/login", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (response.status == 200) {
        let result = await response.json()
        localStorage.setItem('id', result.id)
        this.$toast.success("Login Successful");
        this.$router.push("/");


      }
      }

      
    },

    //a
  },
};
</script>

<style scoped>
</style>