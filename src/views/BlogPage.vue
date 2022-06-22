<template>
  <NavBar />

  <!-- modifications start here -->

  <section class="pb-10 lg:pt-[-120px] lg:pb-20 px-20 pt-5">
    <div class="container relative">
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="w-full px-5">
          <div class="
              wow
              fadeInUp
              relative
              mb-[60px]
              h-[300px]
              overflow-hidden
              rounded
              md:h-[400px]
              lg:h-[500px]
            " data-wow-delay=".1s
              ">
            <img :src="profileConcat(blog.image)" alt="image" class="
                h-full
                w-full
                justify-self-center
                object-cover object-center
              " />
            <div class="
                absolute
                top-0
                left-0
                z-10
                flex
                h-full
                w-full
                items-end
                bg-gradient-to-t
                from-slate-900
                to-transparent
              ">
              <div class="flex flex-wrap items-center p-4 pb-4 sm:p-8">
                <div class="mb-4 mr-5 flex items-center md:mr-10">
                  <div class="mr-4 h-10 w-10 overflow-hidden rounded-full">
                    <img :src="profileConcat(blog.profile)" alt="image" class="w-full" />
                  </div>
                  <p class="text-base font-medium text-white">
                    Par
                    <a href="javascript:void(0)" class="text-white hover:opacity-70">
                      {{ blog.name }}
                    </a>
                  </p>
                </div>
                <div class="mb-4 flex items-center">
                  <p class="
                      mr-5
                      flex
                      items-center
                      text-sm
                      font-medium
                      text-white
                      md:mr-8
                    ">
                    <span class="mr-3">
                      <svg width="15" height="15" viewBox="0 0 15 15" class="fill-current">
                        <path
                          d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z" />
                        <path
                          d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                        <path
                          d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z" />
                        <path
                          d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z" />
                        <path
                          d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z" />
                        <path
                          d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                        <path
                          d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z" />
                        <path
                          d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z" />
                        <path
                          d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                      </svg>
                    </span>
                    {{ displayDate(blog.date) }}
                  </p>

                  <p class="
                      mr-5
                      flex
                      items-center
                      text-sm
                      font-medium
                      text-white
                      md:mr-8
                    ">
                    <span class="mr-3">
                      <svg width="18" height="13" viewBox="0 0 18 13" class="fill-current">
                        <path
                          d="M15.9754 0H2.02539C1.09727 0 0.337891 0.759375 0.337891 1.6875V10.6875C0.337891 11.3062 0.647266 11.8406 1.18164 12.15C1.43477 12.2906 1.74414 12.375 2.02539 12.375C2.30664 12.375 2.58789 12.2906 2.86914 12.15L5.34414 10.7156C5.45664 10.6594 5.56914 10.6312 5.68164 10.6312H15.9473C16.8754 10.6312 17.6348 9.87187 17.6348 8.94375V1.6875C17.6629 0.759375 16.9035 0 15.9754 0ZM16.6785 8.94375C16.6785 9.3375 16.3691 9.64687 15.9754 9.64687H5.70977C5.42852 9.64687 5.11914 9.73125 4.86602 9.87187L2.39102 11.3063C2.16602 11.4187 1.91289 11.4187 1.68789 11.3063C1.46289 11.1938 1.35039 10.9688 1.35039 10.7156V1.6875C1.35039 1.29375 1.65977 0.984375 2.05352 0.984375H16.0035C16.3973 0.984375 16.7066 1.29375 16.7066 1.6875V8.94375H16.6785Z" />
                        <path
                          d="M12.5721 3.375H5.03457C4.75332 3.375 4.52832 3.6 4.52832 3.88125C4.52832 4.1625 4.75332 4.3875 5.03457 4.3875H12.6002C12.8814 4.3875 13.1064 4.1625 13.1064 3.88125C13.1064 3.6 12.8533 3.375 12.5721 3.375Z" />
                        <path
                          d="M11.3908 6.55322H5.03457C4.75332 6.55322 4.52832 6.77822 4.52832 7.05947C4.52832 7.34072 4.75332 7.56572 5.03457 7.56572H11.4189C11.7002 7.56572 11.9252 7.34072 11.9252 7.05947C11.9252 6.77822 11.6721 6.55322 11.3908 6.55322Z" />
                      </svg>
                    </span>
                    {{ comment.length }}
                  </p>

                  <p class="
                      mr-5
                      flex
                      items-center
                      text-sm
                      font-medium
                      text-white
                      md:mr-8
                    ">
                    <span class="mr-3">
                      <i class="fa-solid fa-heart text-lg "></i>

                      <span class="ml-2">
                       {{blog.likes}}
                      </span>

                    </span>
                  </p>  

                </div>
              </div>
            </div>
          </div>
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4 lg:w-8/12">
              <div>
                <h2 class="
                    wow
                    fadeInUp
                    mb-6
                    text-[26px]
                    font-bold
                    leading-snug
                    text-dark
                    sm:text-3xl sm:leading-snug
                    md:text-4xl md:leading-snug
                  " data-wow-delay=".1s
                    ">
                  {{ blog.title }}
                </h2>

                <!-- start of content -->
                <div class="content mb-10 border-b" v-html="blog.content">

                </div>
                <!-- End od content -->

                <div class="-mx-4 mb-12 flex flex-wrap items-center">
                  <div class="w-full px-4 md:w-1/2">
                    <div class="
                        wow
                        fadeInUp
                        mb-8
                        flex flex-wrap
                        items-center
                        md:mb-0
                      " data-wow-delay=".1s">
                      <a href="javascript:void(0)" class="
                          mr-2
                          mb-2
                          block
                          rounded
                          bg-blue-600 bg-opacity-5
                          py-2
                          px-5
                          text-xs
                          font-semibold
                          text-blue-600
                          hover:bg-opacity-100 hover:text-white
                          md:mr-4
                          lg:mr-2
                          xl:mr-4
                        ">
                        Design
                      </a>
                      <a href="javascript:void(0)" class="
                          mr-2
                          mb-2
                          block
                          rounded
                          bg-blue-600 bg-opacity-5
                          py-2
                          px-5
                          text-xs
                          font-semibold
                          text-blue-600
                          hover:bg-opacity-100 hover:text-white
                          md:mr-4
                          lg:mr-2
                          xl:mr-4
                        ">
                        Development
                      </a>
                      <a href="javascript:void(0)" class="
                          mb-2
                          block
                          rounded
                          bg-blue-600 bg-opacity-5
                          py-2
                          px-5
                          text-xs
                          font-semibold
                          text-blue-600
                          hover:bg-opacity-100 hover:text-white
                        ">
                        Info
                      </a>
                    </div>
                  </div>
                  <div class="w-full px-4 md:w-1/2">
                    <div class=" flex gap-4 items-center md:justify-end" data-wow-delay=".1s">
                      <span class="mr-5 text-lg font-medium  text-slate-600">
                        aimeraiez vous cet'article ?
                      </span>

                      <div class="placement">
                        <div @click="likeBlog" class="heart"></div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-4/12">
              <div>
                <div class="
                    wow
                    fadeInUp
                    relative
                    mb-12
                    overflow-hidden
                    rounded
                    bg-blue-600
                    py-[60px]
                    px-11
                    text-center
                    lg:px-8
                  " data-wow-delay=".1s
                    ">
                  <h3 class="mb-2 text-2xl font-semibold text-white">
                    Join our newsletter!
                  </h3>
                  <p class="mb-8 text-base text-white">
                    Enter your email to receive our latest newsletter.
                  </p>
                  <form>
                    <input type="email" placeholder="Your email address" class="
                        mb-4
                        h-[50px]
                        w-full
                        rounded
                        border border-transparent
                        bg-white bg-opacity-20
                        text-center text-sm
                        font-medium
                        text-white
                        placeholder-white
                        outline-none
                        focus:border-white
                        focus-visible:shadow-none
                      " />
                    <input type="submit" value="Subscribe Now" class="
                        mb-6
                        h-[50px]
                        w-full
                        cursor-pointer
                        rounded
                        bg-[#13C296]
                        text-center text-sm
                        font-medium
                        text-white
                        transition
                        duration-300
                        ease-in-out
                        hover:bg-opacity-90 hover:shadow-lg
                      " />
                  </form>
                  <p class="text-sm font-medium text-white">
                    Don't worry, we don't spam
                  </p>

                  <div>
                    <span class="absolute top-0 right-0">
                      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.39737" cy="44.6026" r="1.39737" transform="rotate(-90 1.39737 44.6026)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="1.39737" cy="7.9913" r="1.39737" transform="rotate(-90 1.39737 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="13.6943" cy="44.6026" r="1.39737" transform="rotate(-90 13.6943 44.6026)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="13.6943" cy="7.9913" r="1.39737" transform="rotate(-90 13.6943 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="25.9911" cy="44.6026" r="1.39737" transform="rotate(-90 25.9911 44.6026)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="25.9911" cy="7.9913" r="1.39737" transform="rotate(-90 25.9911 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="38.288" cy="44.6026" r="1.39737" transform="rotate(-90 38.288 44.6026)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="38.288" cy="7.9913" r="1.39737" transform="rotate(-90 38.288 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="1.39737" cy="32.3058" r="1.39737" transform="rotate(-90 1.39737 32.3058)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="13.6943" cy="32.3058" r="1.39737" transform="rotate(-90 13.6943 32.3058)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="25.9911" cy="32.3058" r="1.39737" transform="rotate(-90 25.9911 32.3058)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="38.288" cy="32.3058" r="1.39737" transform="rotate(-90 38.288 32.3058)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="1.39737" cy="20.0086" r="1.39737" transform="rotate(-90 1.39737 20.0086)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="13.6943" cy="20.0086" r="1.39737" transform="rotate(-90 13.6943 20.0086)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="25.9911" cy="20.0086" r="1.39737" transform="rotate(-90 25.9911 20.0086)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="38.288" cy="20.0086" r="1.39737" transform="rotate(-90 38.288 20.0086)" fill="white"
                          fill-opacity="0.44" />
                      </svg>
                    </span>
                    <span class="absolute bottom-0 left-0">
                      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.39737" cy="44.6026" r="1.39737" transform="rotate(-90 1.39737 44.6026)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="1.39737" cy="7.9913" r="1.39737" transform="rotate(-90 1.39737 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="13.6943" cy="44.6026" r="1.39737" transform="rotate(-90 13.6943 44.6026)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="13.6943" cy="7.9913" r="1.39737" transform="rotate(-90 13.6943 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="25.9911" cy="44.6026" r="1.39737" transform="rotate(-90 25.9911 44.6026)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="25.9911" cy="7.9913" r="1.39737" transform="rotate(-90 25.9911 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="38.288" cy="44.6026" r="1.39737" transform="rotate(-90 38.288 44.6026)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="38.288" cy="7.9913" r="1.39737" transform="rotate(-90 38.288 7.9913)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="1.39737" cy="32.3058" r="1.39737" transform="rotate(-90 1.39737 32.3058)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="13.6943" cy="32.3058" r="1.39737" transform="rotate(-90 13.6943 32.3058)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="25.9911" cy="32.3058" r="1.39737" transform="rotate(-90 25.9911 32.3058)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="38.288" cy="32.3058" r="1.39737" transform="rotate(-90 38.288 32.3058)" fill="white"
                          fill-opacity="0.44" />
                        <circle cx="1.39737" cy="20.0086" r="1.39737" transform="rotate(-90 1.39737 20.0086)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="13.6943" cy="20.0086" r="1.39737" transform="rotate(-90 13.6943 20.0086)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="25.9911" cy="20.0086" r="1.39737" transform="rotate(-90 25.9911 20.0086)"
                          fill="white" fill-opacity="0.44" />
                        <circle cx="38.288" cy="20.0086" r="1.39737" transform="rotate(-90 38.288 20.0086)" fill="white"
                          fill-opacity="0.44" />
                      </svg>
                    </span>
                  </div>

                </div>

                <div class="-mx-4 mb-8 flex flex-wrap">
                  <div class="w-full px-4">
                    <h2 class="
                        wow
                        fadeInUp
                        relative
                        pb-5
                        text-2xl
                        font-semibold
                        text-dark
                        sm:text-[28px]
                      " data-wow-delay=".1s
                        ">
                      Popular Articles
                    </h2>
                    <span class="mb-10 inline-block h-[2px] w-20 bg-blue-600"></span>
                  </div>

                  <div class="w-full px-4 md:w-1/2 lg:w-full">
                    <div class="
                        wow
                        fadeInUp
                        mb-5
                        flex
                        w-full
                        items-center
                        border-b border-[#F2F3F8]
                        pb-5
                      " data-wow-delay=".1s
                        ">
                      <div class="
                          mr-5
                          h-20
                          w-full
                          max-w-[80px]
                          overflow-hidden
                          rounded-full
                        ">
                        <img src="@/assets/team-01.png" alt="image" class="w-full" />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a href="javascript:void(0)" class="
                              mb-1
                              inline-block
                              text-lg
                              font-medium
                              leading-snug
                              text-dark
                              hover:text-primary
                              lg:text-base
                              xl:text-lg
                            ">
                            Create engaging online courses your student…
                          </a>
                        </h4>
                        <p class="text-sm text-slate-600">Glomiya Lucy</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-4 md:w-1/2 lg:w-full">
                    <div class="
                        wow
                        fadeInUp
                        mb-5
                        flex
                        w-full
                        items-center
                        border-b border-[#F2F3F8]
                        pb-5
                      " data-wow-delay=".1s
                        ">
                      <div class="
                          mr-5
                          h-20
                          w-full
                          max-w-[80px]
                          overflow-hidden
                          rounded-full
                        ">
                        <img src="@/assets/team-01.png" alt="image" class="w-full" />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a href="javascript:void(0)" class="
                              mb-1
                              inline-block
                              text-lg
                              font-medium
                              leading-snug
                              text-dark
                              hover:text-primary
                              lg:text-base
                              xl:text-lg
                            ">
                            The ultimate formula for launching online course
                          </a>
                        </h4>
                        <p class="text-sm text-slate-600">Andrio jeson</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-4 md:w-1/2 lg:w-full">
                    <div class="
                        wow
                        fadeInUp
                        mb-5
                        flex
                        w-full
                        items-center
                        border-b border-[#F2F3F8]
                        pb-5
                      " data-wow-delay=".1s
                        ">
                      <div class="
                          mr-5
                          h-20
                          w-full
                          max-w-[80px]
                          overflow-hidden
                          rounded-full
                        ">
                        <img src="@/assets/team-01.png" alt="image" class="w-full" />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a href="javascript:void(0)" class="
                              mb-1
                              inline-block
                              text-lg
                              font-medium
                              leading-snug
                              text-dark
                              hover:text-primary
                              lg:text-base
                              xl:text-lg
                            ">
                            50 Best web design tips & tricks that will help you
                          </a>
                        </h4>
                        <p class="text-sm text-slate-600">Samoyel Dayno</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-4 md:w-1/2 lg:w-full">
                    <div class="
                        wow
                        fadeInUp
                        mb-5
                        flex
                        w-full
                        items-center
                        border-0 border-[#F2F3F8]
                        pb-5
                        md:border-b
                        lg:border-0
                      " data-wow-delay=".1s
                        ">
                      <div class="
                          mr-5
                          h-20
                          w-full
                          max-w-[80px]
                          overflow-hidden
                          rounded-full
                        ">
                        <img src="http://localhost/filRougeImg/team-01.png" alt="image" class="w-full" />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a href="javascript:void(0)" class="
                              mb-1
                              inline-block
                              text-lg
                              font-medium
                              leading-snug
                              text-dark
                              hover:text-primary
                              lg:text-base
                              xl:text-lg
                            ">
                            The 8 best landing page builders, reviewed
                          </a>
                        </h4>
                        <p class="text-sm text-slate-600">Andrio Glori</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="-mx-4 flex flex-wrap">
        <div class="wow fadeInUp mt-14 w-full px-4" data-wow-delay=".2s">
          <h2 class="
              relative
              pb-5
              text-3xl
              font-semibold
              text-dark
              sm:text-[28px]
            ">
            Related Articles
          </h2>
          <span class="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="related in relatedBlog" :key="related.ID">
          <div class="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div class="mb-8 overflow-hidden rounded">
              <a href="blog-details.html" class="block">
                <img :src="profileConcat(related.cover)" alt="image" class="
                    w-full
                    transition
                    group-hover:rotate-6 group-hover:scale-125
                    h-56
                  " />
              </a>
            </div>
            <div>
              <span class="
                  mb-5
                  inline-block
                  rounded
                  bg-blue-600
                  py-1
                  px-4
                  text-center text-xs
                  font-semibold
                  leading-loose
                  text-white
                ">
                {{ displayDate(related.time) }}
              </span>
              <h3>
                <a href="blog-details.html" class="
                    mb-4
                    inline-block
                    text-xl
                    font-semibold
                    text-dark
                    hover:text-primary
                    sm:text-2xl
                    lg:text-xl
                    xl:text-2xl
                  ">
                  {{ related.title }}
                </a>
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ====== Back To Top Start -->
    <a href="javascript:void(0)" @click="scrollToTop()" class="
        back-to-top
        fixed
        bottom-8
        right-8
        left-auto
        z-[999]
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-md
        bg-blue-600
        text-white
        shadow-md
        transition
        duration-300
        ease-in-out
        hover:bg-dark
      ">
      <span class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
    </a>
    <!-- ====== Back To Top End -->
  </section>

  <!-- comments start -->
  <section class="text-gray-600 body-font relative comment-section">
    <div class="container px-5 py-12 mx-auto">
      <div class="flex  text-center justify-center w-full  mb-12">
        <h1 class="
            sm:text-3xl
            text-3xl
            font-semibold
            title-font
            mb-4
            py-2
            text-gray-900
            w-fit
            comment-title
          ">
          Commentaires
        </h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Tapez</label>
              <textarea id="message" v-model="blog.comment" @input="getTextSubject($event.target.value)" name="message"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-blue-200
                  h-32
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  resize-none
                  leading-6
                  transition-colors
                  duration-200
                  ease-in-out
                "></textarea>
            </div>
          </div>
          <div class="p-2 w-full flex">
            <button @click="postComment" class="
                flex
                justify-self-start
                mx-auto
                text-white
                bg-blue-500
                border-0
                py-2
                px-8
                focus:outline-none
                hover:bg-blue-600
                rounded
                text-lg
              ">
              Publier
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- comments end -->

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col flex-wrap">
      <div class="flex flex-wrap -m-4 flex-col justify-center" v-for="comment in comment" :key="comment.CID">
        <div class="p-4 lg:w-1/2 md:w-full">
          <div class="
              flex
              border-2
              rounded-lg
              bg-white
              border-gray-200 border-opacity-50
              p-8
              sm:flex-row
              flex-col
            ">
            <div class="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full">
              <img :src="profileConcat(comment.profile)" alt="image" class="w-full" />
            </div>
            <div class="flex-grow">
              <div class="flex w-full gap-10 border-b mb-4">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  {{ comment.name }}
                </h2>
                <span>Postulé <span>{{ displayMoment(comment.time) }}</span>
                </span>
              </div>

              <p class="leading-relaxed text-base">
                {{ comment.comment }}
              </p>

              <span class="mt-3 text-red-500 inline-flex items-center bg-red-300 rounded-full px-2 py-2 ">
                <i class="fa-solid fa-trash-can"></i>
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- display comment start -->

  <!-- display comment end -->

  <FooterVue />
</template>
			

<script>
import NavBar from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterVue.vue";
import moment from "moment";

export default {
  name: "BlogPage",
  components: { NavBar, FooterVue },

  data() {
    return {
      isLoading: false,
      isError: false,
      errorMessage: "",
      comment: "",
      displayComment: [],
      relatedBlog: [],

      blog: {
        id: "",
        title: "",
        content: "",
        image: "",
        profile: "",
        date: "",
        comment: "",
        name: "",
        liked: false,
        likes: "",
      },
      id: 13,
      test: "<h1>test</h1>",
    };
  },

  methods: {

    //blog date
    displayDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    //function to turn timestamp into relative time

    displayMoment(time) {
      return moment(time).fromNow();
    },

    // displayMoment(date) {
    //   return moment(date).format("DD/MM/YYYY");
    // },

    profileConcat(profile) {
      return "http://localhost/filRougeImg/" + profile;
    },

    getTextSubject(value) {
      this.blog.comment = value;
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    // get today's date yyyy-mm-dd

    //function get specific blog
    async getBlog() {
      let obj = {
        id: this.id,
        UID: localStorage.getItem("id"),
      };

      const response = await fetch("http://localhost/app/users/getArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      // console.log(obj)
      const data = await response.json();

      this.blog.title = data.title;
      this.blog.content = data.body;
      console.log(this.blog.title);
      this.blog.image = data.cover;
      this.blog.profile = data.profile;
      this.blog.date = data.time;
      this.blog.name = data.name;
      // this.blog.image = "http://localhost/filRougeImg/" + this.blog.image;
      // console.log(this.blog.image);

      this.isLoading = true;
      this.isError = false;
      this.errorMessage = "";
    },

    // get related blog
    async getRelatedBlog() {
      let obj = {
        id: "1",
        blog_id: this.id
      };

      const response = await fetch("http://localhost/app/blog/getThreeArticles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      // console.log(obj)
      if (response.status === 200) {

        const data = await response.json();
        this.relatedBlog = data;

        this.isLoading = true;
        this.isError = false;
        this.errorMessage = "";
      } else {
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = "Erreur lors de la récupération des données";
      }

      this.isLoading = false;


    },

    // function already liked
    async alreadyLiked() {


      let obj = {
        blog_id: this.id,
        id: localStorage.getItem("id"),
      };

      const response = await fetch("http://localhost/app/blog/alreadyLiked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (response.status == 200) {

        const data = await response.json();
        
        if (data.message === true) {

          let heart = document.querySelector(".heart");
          heart.classList.add("is-active")

          this.blog.liked = true;

        }else{
          this.blog.liked = false;
        }

      }


    },

       //function to count likes
    async countLikes() {

      let obj = {
        blog_id: this.id, 
                };

      const response = await fetch("http://localhost/app/blog/getNumberOfLikes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
                                                                           });

      if (response.status == 200) {

        const data = await response.json();
        console.log(data);
        this.blog.likes = data.message;


                                  }

      },  

    // ------------------

    // function to like a blog
    async likeBlog() {
      let obj = {
        blog_id: this.id,
        id: localStorage.getItem("id"),
      };

      if (this.blog.liked === false) {

        const response = await fetch("http://localhost/app/blog/likeArticle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });

        // console.log(obj)
        if (response.status === 200) {
          const data = await response.json();

          let heart = document.querySelector(".heart");
          heart.classList.add("is-active")
          console.log(data);
          this.blog.liked = true;
        } else {
          console.log("error");
        }

      } else {

        const response = await fetch("http://localhost/app/blog/unlikeArticle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });

        if (response.status === 200) {
          const data = await response.json();

          let heart = document.querySelector(".heart");
          heart.classList.remove("is-active")
          console.log(data);

          this.blog.liked = false
        } else {
          console.log("error");
        }

      }
      this.countLikes();

      this.isLoading = true;
      this.isError = false;
      this.errorMessage = "";
    },



    //function post comment
    async postComment() {
      if (this.comment == "") {
        this.$toast.error("Please fill the comment");
      } else {
        let obj = {
          article_id: this.id,
          comment: this.blog.comment,
          UID: localStorage.getItem("id"),
        };

        const response = await fetch("http://localhost/app/users/postComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });

        if (response.status === 200) {
          let data = await response.json();
          console.log(data.message);
          this.blog.comment = "";
          this.$toast.success("Comment posted");
          this.getComment();
          console.log("commentaire posté");
        }

        this.comment = "";
        this.isLoading = true;
        this.isError = false;
        this.errorMessage = "";
      }
    },

    //function get all comment
    async getComment() {
      let obj = {
        id: this.id,
      };

      const response = await fetch("http://localhost/app/users/getComments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });





      // console.log(obj)
      const data = await response.json();

      this.comment = data;
      console.log(this.comment);
      this.isLoading = true;
      this.isError = false;
      this.errorMessage = "";
    },

    like() {
      let heart = document.querySelector(".heart");
      heart.classList.add("is-active")
    },

    testing(){
              this.id = this.$route.params.id;
              console.log("here")
              console.log(this.$route.params.id)

    }
  },

  computed: {
    displayContent() {
      return this.blog.content;
    },
  },

  beforeMount() {

    this.testing();
    this.getBlog();
    this.getRelatedBlog();
    this.alreadyLiked();
    this.getComment();
    this.countLikes();
   
},
};
</script>

<style scoped >
.content *h1 {
  color: red;
}

.comment-section {
  border-top: 1px solid rgb(190, 190, 190);
}

.comment-title {

  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(315deg, #36096d 0%, #37d5d6 74%);

  color: transparent;
  -webkit-background-clip: text;

}







/* animation start */

.heart {
  width: 100px;
  height: 100px;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;


}

.is-active {
  transition-duration: 1s;
  background-position: -2800px 0;
}


.placement {}

/* animation end */
</style>