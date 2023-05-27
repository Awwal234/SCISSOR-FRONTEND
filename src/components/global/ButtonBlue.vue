<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        buttonText: String,
    },
})
</script>

<template>
    <div class="font-inter leading-[27.9px] font-[400] py-[13.5px] w-full text-center">
        {{ buttonText }}
    </div>
</template>

<style scoped>


</style>