<script lang="ts">
import { defineComponent } from 'vue'
import HeaderView from '../components/global/HeaderView.vue'
import HeroSection from '../components/home/HeroSection.vue'
import ServicesView from '../components/home/ServicesView.vue'
import WhyMomo from '../components/home/WhyMomo.vue'
import FooterView from '../components/global/FooterView.vue'

export default defineComponent({
  components: {
    HeaderView,
    HeroSection,
    ServicesView,
    WhyMomo,
    FooterView,
  },
})
</script>

<template>
  <main class="bg-[#fff] md:hidden lg:hidden xlg:hidden">
    <HeaderView/>
    <HeroSection/>
    <ServicesView/>
    <WhyMomo/>
    <FooterView/>
  </main>
</template>
