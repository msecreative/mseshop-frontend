<template>
  <div>
    <div class="container">
      <div class="py-6 flex justify-between items-center">
        <Logo/>
        <div class="w-96">
          <div class="flex border-gray-100 p-1 border rounded-full items-center">
            <div class="min-w-max px-3">
              <img src="~/assets/img/search.png" alt="">
            </div>
            <input class="w-full focus:outline-none px-3 py-1" type="search" placeholder="Search here">
            <button class="bg-gray-600 rounded-full text-white px-6 py-2" type="submit">Search</button>
          </div>
        </div>
        <div class="min-w-max flex items-center">
          <nuxt-link to="/">
            <span class="ms-icon-box rounded-full hover:bg-gray-200 flex items-center justify-center"><img src="~/assets/img/heart.png" alt=""></span>
          </nuxt-link>

          <nuxt-link to="/" class="relative">
            <span class="ms-icon-box rounded-full hover:bg-gray-200 flex items-center justify-center"><img src="~/assets/img/u_shopping-bag.png" alt=""></span><span class="absolute bg-extracolor w-4 h-4 top-0 right-0 rounded-full text-xs flex justify-center items-center text-white">0</span>
          </nuxt-link>

          <nuxt-link to="/" class="flex items-center">
            <span class="ms-icon-box rounded-full hover:bg-gray-200 flex items-center justify-center"><img src="~/assets/img/user.png" alt=""></span><span >Account</span>
          </nuxt-link>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-96">
          <div class="bg-scolor flex rounded-full px-4 py-2 cursor-pointer">
            <div class="min-w-max">
              <img src="~/assets/img/menu-right.png" alt="">
            </div>
            <div class="w-full text-center px-6 text-white">
              All Categories
            </div>
            <div class="min-w-max">
              <img src="~/assets/img/chevron-down.png" alt="">
            </div>
          </div>
        </div>
        <div class="w-full">
          <ul class="flex justify-center">
            <li><nuxt-link class="p-4" to="/">Home</nuxt-link></li>
            <li><nuxt-link class="p-4" to="/">Categories</nuxt-link></li>
            <li><nuxt-link class="p-4" to="/">About</nuxt-link></li>
            <li><nuxt-link class="p-4" to="/">Contact</nuxt-link></li>
            <li><nuxt-link class="p-4" to="/">FAQ</nuxt-link></li>
            <li><nuxt-link class="p-4" to="/">Offers</nuxt-link></li>
          </ul>
        </div>
        <nuxt-link to="/" class="min-w-max text-extracolor flex">
          <img src="~/assets/img/u_percentage.png" alt="" class="mr-2"> Special Offers!
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
  name: "Header"
}
</script>

<style scoped>

</style>
