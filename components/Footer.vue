<template>
  <div>
   <div class="container">
     <div class="flex -mx-4 mb-20">
       <div class="w-1/4 px-4 flex items-center">
        <div class="min-w-max mr-3">
          <img width="60" src="~/assets/img/call-center.png" alt="">
        </div>
        <div class="w-full">
          <h4 class="text-xl font-medium mb-2 text-hcolor">24 Customer Support</h4>
          <p class="text-lcolor">Contact us 24 hours</p>
        </div>
       </div>
       <div class="w-1/4 px-4 flex items-center">
        <div class="min-w-max mr-3">
          <img width="60" src="~/assets/img/fashion.png" alt="">
        </div>
        <div class="w-full">
          <h4 class="text-xl font-medium mb-2 text-hcolor">Authentic Products</h4>
          <p class="text-lcolor">Contact us 24 hours</p>
        </div>
       </div>
       <div class="w-1/4 px-4 flex items-center">
        <div class="min-w-max mr-3">
          <img width="60" src="~/assets/img/money.png" alt="">
        </div>
        <div class="w-full">
          <h4 class="text-xl font-medium mb-2 text-hcolor">Secure Payment</h4>
          <p class="text-lcolor">Contact us 24 hours</p>
        </div>
       </div>
       <div class="w-1/4 px-4 flex items-center">
        <div class="min-w-max mr-3">
          <img width="60" src="~/assets/img/percenter4.png" alt="">
        </div>
        <div class="w-full">
          <h4 class="text-xl font-medium mb-2 text-hcolor">Best Prices & Offers</h4>
          <p class="text-lcolor">Contact us 24 hours</p>
        </div>
       </div>
     </div>
   </div>

   <div class="bg-gray-200 py-20">
     <div class="container">
       <div class="flex">
         <div class="w-3/5 pr-6">
            <Logo/>
            <p class="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.</p>
            <div class="flex">
              <a class="mr-2" href="" target="_blank"><img src="~/assets/img/abadge.png" alt=""></a>
              <a href="" target="_blank"><img src="~/assets/img/pbadge.png" alt=""></a>
            </div>
         </div>
         <div class="w-1/5 pl-6">
            <h4 class="text-2xl text-hcolor font-medium mb-6">About Us</h4>
            <ul class="leading-loose text-lcolor">
              <li><nuxt-link to="/">About Mseshop</nuxt-link></li>
              <li><nuxt-link to="/">Contact</nuxt-link></li>
              <li><nuxt-link to="/">Carrier</nuxt-link></li>
              <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
              <li><nuxt-link to="/">Category</nuxt-link></li>
              <li><nuxt-link to="/">Services</nuxt-link></li>
            </ul>
         </div>
         <div class="w-1/5 pl-6">
            <h4 class="text-2xl text-hcolor font-medium mb-6">Info</h4>
            <ul class="leading-loose text-lcolor">
              <li><nuxt-link to="/">Information</nuxt-link></li>
              <li><nuxt-link to="/">Shipping</nuxt-link></li>
              <li><nuxt-link to="/">Payment</nuxt-link></li>
              <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
              <li><nuxt-link to="/">Return</nuxt-link></li>
              <li><nuxt-link to="/">Blog</nuxt-link></li>
            </ul>
         </div>
       </div>
       <div class="flex -mx-6 mt-20 items-center text-xs">
          <div class="w-1/3 px-6"></div>
          <div class="w-1/3 px-6 text-center">@2022 Copyright All Right Reserved by Bengal Shop</div>
          <div class="w-1/3 px-6 text-right">
            <img src="~/assets/img/ppay.png" alt="">
          </div>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
  name: "Footer"
}
</script>

<style scoped>

</style>
