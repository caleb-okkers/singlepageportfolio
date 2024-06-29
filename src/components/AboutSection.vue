<template>
  <div class="container">
    <div class="row" v-for="info in about" :key="info.name">
      <div class="col">
        <div class="info">
          <h2 class="text">{{ info.name }}</h2>
          <p>{{ info.text }}</p>
        </div>
      </div>
    </div>
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: "AboutSection",
  components: {
    Card
  },
  props: {
    about: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>