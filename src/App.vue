<!-- <template>
  <div class="wrapper">
    <main class="container-fluid">
      
      

      
    </main>
  </div>
  
</template> -->

<template>
  <div class="wrapper">
    <NavBar/>
    <main class="container-fluid">
    <section id="home">
      <HomeSection/>
    </section>
    <section id="about">
      <div class="container">

        <AboutSection v-for="info in about" :key="info.name">
          <template #name>
            <h2>{{ info.name }}</h2>
          </template>
          <template #text>
           <p>{{ info.text }}</p>
          </template>
        </AboutSection>
      </div>
    </section>
    <section id="resume"></section>
    <section id="projects">
      <Card/>
    </section>
    <section id="testimonials"></section>
    <section id="contact"></section>

    <!-- <router-view/> -->
    </main>
  </div>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'

export default {
/* eslint-disable*/
  computed:{
    about(){
      return this.$store.state.aboutMe
    }
  },
    components: {
      NavBar,
      Footer,
      Card,
      HomeSection,
      AboutSection
 },
 mounted(){
  this.$store.dispatch('getAboutMe')
  console.log('info');
 }
}
</script>

<style src="./assets/css/styles.css">

</style>
