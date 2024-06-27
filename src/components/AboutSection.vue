<template>
    <div class="container">
        <div class="row vh-100">
            <div class="col">
                <div class="info">
                    <slot name="name"></slot>
                    <slot name="text"></slot>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "AboutSection",

    mounted() {
        // this.about = aboutMe.about;
        // this.objective = aboutMe.objective;
    }
}



</script>
<style scoped>
    
</style>