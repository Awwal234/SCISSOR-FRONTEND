<script lang='ts'>
import { defineComponent } from 'vue';
import api from '../../api/client'
import HeaderApp from '../../components/backup/HeaderApp.vue';
import ButtonBlue from '../../components/global/ButtonBlue.vue';
export default defineComponent({
    components: {
        HeaderApp,
        ButtonBlue,
    },
    data(){
        return{
            long_link: '' as string,
            short_link: '' as string,
            result: false as boolean,
            textCopied: false as boolean,
        }
    },
    methods: {
        async ShortLink(){
            if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(this.long_link)){
                const access_token = localStorage.getItem('access')
                try{
                    const res = await api.post('/link/shortenlink', 
                    {
                        link: this.long_link
                    },{
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    });
                    console.log(res.data)
                    this.result = true;
                    this.short_link = res.data.link
                }catch(err){
                    console.log(err)
                    this.result = false
                }
            }else {
            
            }
        },
        copyToClipBoard(){
            navigator.clipboard.writeText(this.short_link);
            this.textCopied = true;
            setTimeout(()=>{this.textCopied=false;
            }, 6000)
        },
    }
})
</script>

<template>
    <main class="bg-[#fff]">
        <HeaderApp/>
        <div class="px-[27px]">
            <div class="pt-[160px] text-[#000] font-inter font-[400] text-[20px] leading-[27.9px]">
                Link
            </div>
            <div>
                <input v-model="long_link" placeholder="https://example.com" type="url" class=" w-full text-[20px] font-inter font-[200] leading-[27.9px] py-[15px] px-[11px] mt-[12px] border focus:outline-none"/>
            </div>
            <!--short link section-->
            <div v-show="result">
                <div class="mt-[35px] text-[#000] font-inter font-[400] text-[20px] leading-[27.9px]">
                    Short Link
                </div>
                <div class="flex mt-[12px] items-center w-full">
                    <input v-model="short_link" type="url" readonly id="url" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[15px] px-[11px] font-inter border text-[20px] focus:outline-none"/>
                    <div class="w-fit">
                        <img @click="copyToClipBoard" src="/img/copy.svg" class="absolute mt-[-5px] right-[50px]" alt=""/>
                    </div>
                </div>
            </div>
            <!--end short link-->
            <div v-show="textCopied" class=" w-fit mt-[8px] rounded-[7px] text-[#000] font-inter text-[14px] font-[400] px-[10px] bg-[transparent] border border-[#000]">
                text copied
            </div>
            <!---->
            <ButtonBlue @click="ShortLink" class="mt-[60px] bg-[#0E43FF] border border-[#000] text-[#fff]" button-text="Create link"/>
        </div>
    </main>
</template>

<style scoped>


</style>