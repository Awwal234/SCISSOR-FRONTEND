<script lang="ts">
    import { defineComponent } from 'vue'
    import router from '../../router/index'
    export default defineComponent({
        data(){
            return{
                menu: false,
            }
        },
        methods: {
            toggleMenu(){
                this.menu = !this.menu;
            },
            goToCreateLink(){
                router.push('/app/create_link')
                window.scroll(0,0)
                this.menu = false;
            },
            goToHistory(){
                router.push('/app/history')
                window.scroll(0,0)
                this.menu = false;
            },
            goToBitQr(){
                router.push('/app/bit_qrcode')
                window.scroll(0,0)
                this.menu = false;
            },
            logOut(){
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                router.push('/login')
                window.scroll(0,0)
            }
        },
    })
</script>

<template>
    <div>
        <header class="bg-[#fff] z-[100] top-0 fixed border-b flex items-center justify-between w-full px-[27px] py-[10px]">
            <div class="font-anton font-[400] text-[#000] text-[24px] leading-[44.65px]">
                Momo
            </div>
            <div>
                <img @click="toggleMenu" src="/img/burgerbackup.svg" class="" loading="lazy" alt="menu-icon"/>
            </div>
        </header>
        <!--menu display-->
        <div v-show="menu" class="fixed mt-[100px] w-full left-0 h-full">
            <div class="bg-[#F5F5F5] space-y-[20px] overflow-y-scroll w-[80%] py-[23px] h-full">
                <div class="pl-[10px] rounded-[10px] font-inter font-[400] text-[20px] leading-[22px] py-[10px] hover:border-r-[8px] hover:border-[#BC07FF]">
                    Dashboard
                </div>
                <div @click="goToCreateLink" class="pl-[10px] rounded-[10px] font-inter font-[400] text-[20px] leading-[22px] py-[10px] hover:border-r-[8px] hover:border-[#BC07FF]">
                    Create Link
                </div>
                <div @click="goToHistory" class="pl-[10px] rounded-[10px] font-inter font-[400] text-[20px] leading-[22px] py-[10px] hover:border-r-[8px] hover:border-[#BC07FF]">
                    History
                </div>
                <div class="pl-[10px] rounded-[10px] font-inter font-[400] text-[20px] leading-[22px] py-[10px] hover:border-r-[8px] hover:border-[#BC07FF]">
                    Pricing Plan
                </div>
                <div @click="goToBitQr" class="pl-[10px] rounded-[10px] font-inter font-[400] text-[20px] leading-[22px] py-[10px] hover:border-r-[8px] hover:border-[#BC07FF]">
                    Bit QrCode
                </div>
                <!--logout-->
                <div class="pt-[40px]"></div>
                <div class="px-[10px]">
                    <div @click="logOut" class="bg-[#FF0E0E] text-[#fff] font-inter font-[400] text-[20px] w-full px-[10px] py-[10px] text-center">
                        Logout
                    </div>
                </div>
                <!--end logout-->
            </div>
        </div>
        <!--end menu display-->
    </div>
</template>

<style scoped>

</style>