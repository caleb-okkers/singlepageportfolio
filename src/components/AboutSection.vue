<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="info">
                    <slot name="name"></slot>
                    <slot name="text"></slot>
                    <Card/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue'

export default {
    name: "AboutSection",

    components: {
        Card
    },

    mounted() {
        // this.about = aboutMe.about;
        // this.objective = aboutMe.objective;
    }
}



</script>
<style scoped>
    
</style>