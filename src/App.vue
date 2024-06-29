<!-- <template>
  <div class="wrapper">
    <main class="container-fluid">
      
      

      
    </main>
  </div>
  
</template> -->

<template>
  <div class="wrapper">
    <NavBar/>
    <main>
      <section id="home">
        <HomeSection/>
      </section>
      <section id="about">
        <div class="container pt-5">
          <AboutSection :about="about" />
        </div>
      </section>
      <section id="resume"></section>
      <section id="projects">
        <Card/>
      </section>
      <section id="testimonials"></section>
      <section id="contact"></section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'

export default {
  computed: {
    about() {
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
  mounted() {
    this.$store.dispatch('getAboutMe')
  }
}
</script>

<style src="./assets/css/styles.css">
</style>