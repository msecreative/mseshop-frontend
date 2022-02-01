<template>

    <div>
        <div class="p-8">
          <vue-slick-carousel class="hero-slide" :arrows="false" :dots="true">
            <div class="slide-bg rounded-3xl">
              <div class="container">
                <div class="flex items-center">
                  <div class="w-1/2 mx-14">
                    <p class="text-3xl font-medium text-scolor pb-6">Save up 50% off</p>
                    <h2 class="text-5xl font-bold leading-tight text-hcolor">Bengal Vegetable farm  Organic 100%</h2>
                    <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
                    <nuxt-link to="/" class="text-white bg-scolor font-medium rounded-full px-6 py-2 inline-block">Shop Now</nuxt-link>
                  </div>
                  <div class="w-1/2 flex justify-end mt-12">
                    <img width="500" src="~/assets/img/hero-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="slide-bg rounded-3xl">
              <div class="container">
                <div class="flex items-center">
                  <div class="w-1/2 mx-14">
                    <p class="text-3xl font-medium text-scolor pb-6">Save up 90% off</p>
                    <h2 class="text-5xl font-bold leading-tight text-hcolor">Bengal Vegetable farm  Organic 100%</h2>
                    <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
                    <nuxt-link to="/" class="text-white bg-scolor font-medium rounded-full px-6 py-2 inline-block">Shop Now</nuxt-link>
                  </div>
                  <div class="w-1/2 flex justify-end mt-12">
                    <img width="500" src="~/assets/img/hero-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="slide-bg rounded-3xl">
              <div class="container">
                <div class="flex items-center">
                  <div class="w-1/2 mx-14">
                    <p class="text-3xl font-medium text-scolor pb-6">Save up 30% off</p>
                    <h2 class="text-5xl font-bold leading-tight text-hcolor">Bengal Vegetable farm  Organic 100%</h2>
                    <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
                    <nuxt-link to="/" class="text-white bg-scolor font-medium rounded-full px-6 py-2 inline-block">Shop Now</nuxt-link>
                  </div>
                  <div class="w-1/2 flex justify-end mt-12">
                    <img width="500" src="~/assets/img/hero-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </vue-slick-carousel>
          <div class="container pt-20">
            <h3 class="text-4xl mb-6 text-hcolor font-semibold">Search by Category</h3>
            <div class="flex items-center mb-10">
              <div style="height: 3px" class="w-20 bg-scolor rounded-md"></div>
              <div style="height: 2px" class="w-full bg-gray-200"></div>
            </div>
            <vue-slick-carousel  class="category-carousel mb-10 text-center" v-bind="categoryCarouselSettings">
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-6.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-5.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-4.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-3.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-2.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-5.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>
              <div class="bg-gray-200 p-4">
                <div class="flex h-32 justify-center items-center">
                  <img src="~/assets/img/carousel-1.png" alt="">
                </div>
                <h5 class="text-xl text-hcolor font-medium">Groceries</h5>
              </div>

              <template #prevArrow="arrowOption">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
              </template>

              <template #nextArrow="arrowOption">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </template>
            </vue-slick-carousel><!--Categories Carousel-->
            <!-- Promo Section start -->
            <div class="flex -mx-6 py-8">
              <div class="w-1/2 px-6">
                <div class="promo-bg-1 bg-cover bg-gray-500 bg-right-bottom p-12 rounded-2xl">
                  <div class="w-2/3 py-6">
                    <p class="text-2xl text-extracolor font-medium">Buy 1 Get 1</p>
                    <h3 class="text-4xl text-hcolor font-bold my-4">Fresh Fruits Collection</h3>
                    <nuxt-link to="/" class="mt-4 bg-white rounded-full px-6 py-2 text-extracolor inline-block">Order Now</nuxt-link>
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-6">
                <div class="promo-bg-2 bg-cover bg-gray-500 bg-right-bottom p-12 rounded-2xl">
                  <div class="w-2/3 py-6">
                    <p class="text-2xl text-extracolor font-medium">Buy 1 Get 1</p>
                    <h3 class="text-4xl text-hcolor font-bold my-4">Fresh Fruits Collection</h3>
                    <nuxt-link to="/" class="mt-4 bg-white rounded-full px-6 py-2 text-extracolor inline-block">Order Now</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- Promo Section end -->

            <!-- Product Section Start -->
            <h3 class="text-4xl my-6">Deals of the Week</h3>
            <div class="flex items-center mb-10">
              <div style="height: 3px" class="w-20 bg-scolor rounded-md"></div>
              <div style="height: 2px" class="w-full bg-gray-200"></div>
            </div>

            <!-- Product Item -->

        <vue-slick-carousel class="category-carousel mb-16 text-center" v-bind="productCarouselSettings">
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/fresh-fruit.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/grocery-items.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/vegetable-collection.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/grocery-items.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/fresh-fruit.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/vegetable-collection.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>
          <div>
            <div class="h-80 relative mb-6 group cursor-pointer">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img src="~/assets/img/fresh-fruit.png" alt="">
              </div>
              <div class="absolute h-full w-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div class="bg-black absolute h-full w-full opacity-60"></div>

                <nuxt-link class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center" to="/">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg></nuxt-link>


                <div class="relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6 bg-white text-hcolor rounded-full h-12 w-12 flex items-center justify-center">0</span>
                    <button class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>

                  <button class="text-white bg-scolor px-8 py-2 rounded-full inline-block">Add to card</button>
                </div>
              </div>
            </div>

            <h4 class="text-xl mb-3">Product Name</h4>
            <p><span class="font-medium text-extracolor">$200.00</span> <del class="text-gray-400">$300</del></p>
          </div>

          <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
        </vue-slick-carousel>
            <!-- Product Item -->
            <!-- Product Section End -->

            <!-- Popular Brands start -->
        <h3 class="text-4xl mb-6">Popular Brands</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-20 bg-scolor rounded-md"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel class="category-carousel mb-16 text-center" v-bind="categoryCarouselSettings">
          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-1.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-2.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-3.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-4.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-5.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-6.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-1.png" alt=""></div>
          </div>



          <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
        </vue-slick-carousel>

        <!-- Brand Items Start -->
        <div class="flex -mx-6 mb-12">
          <div class="w-1/3 px-6">
            <div class="cta-1 flex p-6 rounded-xl">
              <div class="w/1-2">
                <h3 class="font-size-32 leading-tight font-semibold mb-10">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img src="~/assets/img/fresh-fruit.png" alt="">
              </div>
            </div>
          </div>

          <div class="w-1/3 px-6">
            <div class="cta-2 flex p-6 rounded-xl">
              <div class="w/1-2">
                <h3 class="font-size-32 leading-tight font-semibold mb-10">Vegetable Collection</h3>
                <nuxt-link to="/" class="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img src="~/assets/img/vegetable-collection.png" alt="">
              </div>
            </div>
          </div>

          <div class="w-1/3 px-6">
            <div class="cta-3 flex p-6 rounded-xl">
              <div class="w/1-2">
                <h3 class="font-size-32 leading-tight font-semibold mb-10">Grocery Items</h3>
                <nuxt-link to="/" class="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img class="h-40" src="~/assets/img/grocery-items.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <!-- Brand Items End -->
            <!-- Popular Brands end -->
          </div><!--Categories Container-->

        </div><!--<div class="p-8">-->

    </div><!--<div>-->

</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  components: { Header, Footer },
  name: 'IndexPage',
  data() {
    return {
      categoryCarouselSettings: {
        "slidesToShow": 6
      },
      productCarouselSettings: {
        "slidesToShow": 5
      }
    }
  }
}
</script>
