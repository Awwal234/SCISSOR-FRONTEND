<script lang='ts'>
import { defineComponent } from 'vue'
import api from '../../api/client'
import router from '../../router/index'
import HeaderApp from '../../components/backup/HeaderApp.vue'
import ButtonBlue from '../../components/global/ButtonBlue.vue'
export default defineComponent({
    data(){
        return{
            name: '' as string,
        }
    },
    components: {
        HeaderApp,
        ButtonBlue,
    },
    methods: {
        gotoCreateLink(){
            router.push('/app/create_link')
        },
        async displayUser(){
            const access_token = localStorage.getItem('access')
            try{
                const res = await api.get('/auth/getme', 
                {
                    headers: {'Authorization': `Bearer ${access_token}`}
                })
                console.log(res.data)
                this.name = res.data.name
            }catch(err){
                console.log(err)
                this.name = ''
                router.push('/login')
            }
        },
    },
    mounted(){
        this.displayUser()
    }
})
</script>

<template>
    <main class="bg-[#fff]">
        <HeaderApp/>
        <div class="px-[27px]">
            <div class="text-[17px] font-[400] font-anton pt-[100px]">Hello, {{ name }} &#x1F44B;</div>
            <div class="font-anton text-[#000] mt-[50px] w-[70%] font-[400] text-[36px] leading-[50.23px] mx-auto text-center">
                <div class="mt-[3px]">Create your Short link</div>
            </div>
            <ButtonBlue @click="gotoCreateLink" class="mt-[60px] bg-[#0E43FF] border border-[#000] text-[#fff]" button-text="Create link"/>
            <ButtonBlue class="mt-[21px] bg-[transaprent] border border-[#000] text-[#000]" button-text="Check price plan"/>
        </div>
    </main>
</template>

<style scoped>


</style>