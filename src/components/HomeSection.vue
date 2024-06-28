<template>
  <div class="container">
    <div class="row vh-100 d-md-flex d-block align-items-center">
      <div class="col d-flex justify-content-center align-items-center">
        <img
          src="https://github.com/caleb-okkers/coolCards/blob/master/images/IMG_2711onetooneratio.jpg?raw=true"
          alt="home img"
          class="img-fluid"
          loading="lazy"
        />
      </div>
      <div class="col d-flex justify-content-center align-items-center">
          <div id="details">
            <h1 class="display-1">Caleb Okkers</h1>
            

            <p v-if="title">
              <span>{{ title }}</span>
            </p>
            <Spinner v-else/>
          </div>
          
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const jobTitle = computed(() => store.state.jobTitle)
const title = ref('')
const cnt = ref(0)

export default {
  name: 'HomeSection',
  components: {
    Spinner
  }

}

function repeat() {
  try {
    if (cnt.value == jobTitle.value?.length) cnt.value = 0;
    title.value = jobTitle.value?.at(cnt.value)?.title;
    setTimeout(repeat, 2000)
    cnt.value++
  } catch(e) {
    //
  }
}


onMounted(() => {
  store.dispatch('fetchJobTitle')
  repeat()
})

</script>
<style scoped>

</style>
