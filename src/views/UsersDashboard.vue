<template>
  <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
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
            dark:bg-gray-700
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
                      dark:bg-gray-800
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

        <div
          class="
            overflow-auto
            h-screen
            pb-24
            pt-2
            pr-2
            pl-2
            md:pt-0 md:pr-0 md:pl-0
          "
        >
          <!-- <div class="flex flex-col flex-wrap sm:flex-row ">
                    <div class="w-full sm:w-1/2 xl:w-1/3"> -->
          <!-- Start table -->

          <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                  class="
                    inline-block
                    min-w-full
                    shadow
                    rounded-lg
                    overflow-hidden
                  "
                >
                  <table class="min-w-full leading-normal z-10">
                    <thead class="">
                      <tr class="bg-slate-700 text-white">
                        <th
                          scope="col"
                          class="
                            px-5
                            py-3
                            border-b border-gray-200
                            text-white- text-left text-sm
                            uppercase
                            font-normal
                          "
                        >
                          User
                        </th>
                        <th
                          scope="col"
                          class="
                            px-5
                            py-3
                            border-b border-gray-200
                            text-left text-sm
                            uppercase
                            font-normal
                          "
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          class="
                            px-5
                            py-3
                            border-b border-gray-200
                            text-left text-sm
                            uppercase
                            font-normal
                          "
                        >
                          Created at
                        </th>
                        <th
                          scope="col"
                          class="
                            px-5
                            py-3
                            border-b border-gray-200
                            text-left text-sm
                            uppercase
                            font-normal
                          "
                        >
                          status
                        </th>
                        <th
                          scope="col"
                          class="
                            px-5
                            py-3
                            border-b border-gray-200
                            text-left text-sm
                            uppercase
                            font-normal
                          "
                        >
                          action
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-slate-800 text-slate-200">
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img
                                  alt="profil"
                                  src="@/assets/trianglify-lowres.png"
                                  class="
                                    mx-auto
                                    object-cover
                                    rounded-full
                                    h-10
                                    w-10
                                  "
                                />
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="whitespace-no-wrap">Jean marc</p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <p class="whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <p class="whitespace-no-wrap">12/09/2020</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-green-900
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-green-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative"> active </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-red-600
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-red-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative">
                              <i class="fa-solid fa-ban"></i>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img
                                  alt="profil"
                                  src="@/assets/trianglify-lowres.png"
                                  class="
                                    mx-auto
                                    object-cover
                                    rounded-full
                                    h-10
                                    w-10
                                  "
                                />
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="whitespace-no-wrap">Marcus coco</p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <p class="whitespace-no-wrap">Designer</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <p class="whitespace-no-wrap">01/10/2012</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-green-900
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-green-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative"> active </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-red-600
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-red-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative">
                              <i class="fa-solid fa-ban"></i>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img
                                  alt="profil"
                                  src="@/assets/trianglify-lowres.png"
                                  class="
                                    mx-auto
                                    object-cover
                                    rounded-full
                                    h-10
                                    w-10
                                  "
                                />
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="whitespace-no-wrap">Marcus coco</p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <p class="whitespace-no-wrap">Designer</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <p class="whitespace-no-wrap">01/10/2012</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-emerald-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative"> active </span>
                          </span>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-red-600
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-red-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative">
                              <i class="fa-solid fa-ban"></i>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img
                                  alt="profil"
                                  src="@/assets/trianglify-lowres.png"
                                  class="
                                    mx-auto
                                    object-cover
                                    rounded-full
                                    h-10
                                    w-10
                                  "
                                />
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="whitespace-no-wrap">Marcus coco</p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <p class="whitespace-no-wrap">Designer</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-400 text-sm">
                          <p class="whitespace-no-wrap">01/10/2012</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-green-900
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-green-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative"> active </span>
                          </span>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                          <span
                            class="
                              relative
                              inline-block
                              px-3
                              py-1
                              font-semibold
                              text-red-600
                              leading-tight
                            "
                          >
                            <span
                              aria-hidden="true"
                              class="
                                absolute
                                inset-0
                                bg-red-200
                                opacity-50
                                rounded-full
                              "
                            >
                            </span>
                            <span class="relative">
                              <i class="fa-solid fa-ban"></i>
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- End Table -->
          <!-- </div> 
                  </div>   -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import sideBarDash from "@/components/sideBarDash.vue";

export default {
  name: "UsersDashboard",
  components: {
    sideBarDash,
  },
};
</script>

<style>
</style>