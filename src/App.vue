<template>
  <div class="wrapper">
    <NavBar/>
    <main class="container-fluid">
      <HomeSection/>
        <AboutSection v-for="hehe in about" :key="hehe.name">
          <template #name>
            <h2>{{ hehe.name }}</h2>
          </template>
          <template #text>
           <p>{{ hehe.text }}</p>
          </template>
        </AboutSection>
<!-- 
      <AboutSection >
          <template #about>
            <h2>{{ about.name }}</h2>
          </template>
          <template #about-text>
            <p>{{ about.text }}</p>
          </template>
          <template #objective>
            <h2>{{ objective.name }}</h2>
          </template>
          <template>
            <p>{{ objective.text }}</p>
          </template>
      </AboutSection> -->

      <Card/>
      <router-view/>
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
  console.log('hehe');
 }
}
</script>

<style src="./assets/css/styles.css">

</style>
