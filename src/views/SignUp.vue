<template>
  <NavBar />
  <!-- ====== Forms Section Start -->
  <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
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
            <!-- <div class="mb-10 md:mb-16 text-center">
                  <a
                     href="javascript:void(0)"
                     class="inline-block max-w-[160px] mx-auto"
                     >
                  <img src="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg" alt="logo" />
                  </a>
               </div> -->
            <form @submit.prevent="signUp">
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Full name"
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
                    focus:border-blue focus
                  "
                  v-model="name"
                />
              </div>

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
                    focus:border-blue focus
                  "
                  v-model="email"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  placeholder="mot de passe"
                  class="
                    w-full
                    rounded-md
                    border
                    bordder-[#E9EDF4]
                    py-3
                    px-5
                    bg-[#FCFDFE]
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                  "
                  v-model="password"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  placeholder="confirmer mot de passe"
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
                    focus:border-blue focus
                  "
                  v-model="password_confirm"
                />
              </div>

              <div class="mb-10">
                <input
                  type="submit"
                  value="sign in"
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
              mot de passe oublié?
            </a>
            <p class="text-base text-[#adadad]">
              pas encore un membre ?
              <router-link
                to="/SignIn"
                class="text-primary hover:underline hover:text-cyan-600"
              >
                rejoingez-nous
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
  <!-- ====== Forms Section End -->
  <FooterVue />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterVue.vue";
// import ToastPop from '@/components/ToastPop.vue'
export default {
  components: { NavBar, FooterVue },
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },

  methods: {
    async signUp() {
      if (
        this.name == "" ||
        this.email == "" ||
        this.password == "" ||
        this.password_confirm == ""
      ) {
        this.$toast.error("Please fill all the fields");
      } else if (this.password != this.password_confirm) {
        this.$toast.error("Password and Confirm Password does not match");
      } else {
        const response = await fetch("http://localhost/app/users/register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });

        if (response.status == 200) {
          this.$toast.success("Sign Up Successful");
          this.$router.push("/SignIn");
        }
      }
    },
  },
};
</script>

<style scoped>
section {
  /* background: url( @/assets/triangles.svg) no-repeat ;
     background-position: center;
     background-size: cover;
      */
}
</style>