<template>
    <video autoplay loop muted playsinline class="video-background" id="bgVideo">
      <source src="https://videos.pexels.com/video-files/3129977/3129977-uhd_2560_1440_30fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <div class="text">Caleb Okkers</div>
      <p v-if="title">
        <span>{{ title }}</span>
      </p>
      <Spinner v-else />
      <div class="home-image">
        <img src="https://github.com/caleb-okkers/coolCards/blob/master/images/IMG_2711onetooneratio.jpg?raw=true" alt="Caleb Okkers" loading="lazy">
      </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeSection',
  components: {
    Spinner
  },
  setup() {
    const store = useStore()
    const jobTitle = computed(() => store.state.jobTitle)
    const title = ref('')
    const cnt = ref(0)

    function repeat() {
      try {
        if (cnt.value == jobTitle.value?.length) cnt.value = 0
        title.value = jobTitle.value?.at(cnt.value)?.title
        setTimeout(repeat, 2000)
        cnt.value++
      } catch (e) {
        // Handle error
      }
    }

    onMounted(() => {
      store.dispatch('fetchJobTitle')
      repeat()
    })

    return {
      title
    }
  }
}

// const video = document.getElementById('bgVideo');
//         video.addEventListener('ended', () => {
//             video.currentTime = 0;
//             video.play();
//         });
</script>

<style scoped>
/* Scoped styles */
</style>

