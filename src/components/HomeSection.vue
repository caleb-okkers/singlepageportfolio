<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img
          src="https://github.com/caleb-okkers/coolCards/blob/master/images/IMG_2711onetooneratio.jpg?raw=true"
          alt="home img"
          class="img-fluid"
          loading="lazy"
        />
      </div>
      <div class="col">
          <div id="details">
            <h1 class="display-1">Caleb Okkers</h1>
            <span>{{ jobTitle[0].title }}</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
// export default {
//   name: "HomeSection",
// };

import { computed, onMounted } from 'vue'

const jobTitle = computed(() => this.$store.state.jobTitle)

onMounted(() => {
  this.$store.dispatch('fetchJobTitle')
})

</script>
<style scoped></style>
