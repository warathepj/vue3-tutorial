<template lang="">
    <div class="m-auto">
        <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
        <section class="flex">
            <p class="p-2" v-for="day in days" :key="day">{{ day }}</p>
        </section>
        <section class="flex">
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        };
    },
}
</script>
<style lang="">
    
</style>