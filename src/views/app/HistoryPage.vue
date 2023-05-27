<script lang='ts'>
import { defineComponent } from 'vue';
import api from '../../api/client'
import HeaderApp from '../../components/backup/HeaderApp.vue';
export default defineComponent({
    data(){
        return {
            links: [] as any,
            option: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        }
    },
    components: {
        HeaderApp,
    },
    methods: {
        async listLinks(){
            const access_token = localStorage.getItem('access')
            try{
                const res = await api.get('/link/all_link', {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                });
                console.log(res.data)
                this.links = res.data
            }catch(err){
                console.log(err)
            }
        }
    },
    mounted(){
        this.listLinks()
    }
});
</script>

<template>
    <main class="bg-[#fff]">
        <HeaderApp/>
        <div class="pt-[100px] space-y-[20px] px-[27px]">
            <div class="bg-[#fff] w-full border border-[#000] px-[13px] py-[15px]" v-for="link in links" :key="link">
                <div class="font-inter mb-[3px] font-[400] text-[20px]">{{ link.link }}</div>
                <div class="font-inter mb-[3px] font-[300] text-[16px]">{{ link.short_link }}</div>
                <div class="font-inter"><b>Date:</b> {{ link.created_at }}</div>
            </div>
        </div>
    </main>
</template>

<style scoped>


</style>