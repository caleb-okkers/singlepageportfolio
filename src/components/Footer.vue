<template>
    <div>
        <footer class="container-fluid">
            <div class="row">
                <p class="lead">Caleb Okkers &copy; <span class="shadow">{{ cYear }}</span></p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: ''
        }
    },
    mounted () {
        this.cYear = new Date().getUTCFullYear();
    }
}
</script>
<style scoped>
    
</style>