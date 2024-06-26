<template>
  <div class="wrapper">
    <NavBar/>
    <main class="container-fluid">
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

export default {
    components: {
      NavBar,
      Footer,
      Card
 }
}
</script>

<style src="./assets/css/styles.css">

</style>
