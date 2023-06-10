<script lang="ts">
import { defineComponent } from 'vue'
import api from '../../api/client'
import router from '../../router/index'
export default defineComponent({
    data(){
        return{
            name: '',
            email: '',
            password: '',
            banner: false,
        }
    },
    methods: {
        togglePassword(){
            //@ts-ignore
            const passwordInput = document.getElementById('password').type
            console.log(passwordInput)
            if(passwordInput == 'password'){
                //@ts-ignore
                document.getElementById('password').type = 'text'
            }else{
                //@ts-ignore
                document.getElementById('password').type = 'password'
            }
        },
        goToLogin(){
            router.push('/login')
            window.scroll(0, 0)
        },
        async signUpVerify(){
            try{
                const res = await api.post('/auth/signup',
                {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                console.log(res.data)
                this.banner = true
                setTimeout(()=>{
                    this.banner = false
                }, 1000)
                setTimeout(()=>{
                    router.push('/login')
                }, 2000)
            }catch(err){
                console.log(err)
            }
        },
    }
})
</script>

<template>
    <main class="bg-[#fff] px-[27px]">
        <div v-show="banner" class="top-[10px] font-anton font-[400] text-[20px] bg-green-900 text-[#fff] py-[13.5px] px-[11px] overflow-x-hidden w-[80%] border absolute">
            Signup successfully !!
        </div>
        <div class="w-[270px] text-[#000] mt-[98px] font-anton text-[32px] leading-[44.65px]">
            Sign up  to get
            <div>started</div>
        </div>
        <!--form-->
            <!---->
            <div class="mt-[104px] text-[#000] font-inter text-[20px] leading-[27.9px]">
                <label for="name">Name</label>
            </div>
            <input v-model="name" type="text" id="name" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[15px] px-[21px] font-inter text-[20px] focus:outline-none" placeholder="John Doe"/>
            <!---->
            <div class="mt-[26px] text-[#000] font-inter text-[20px] leading-[27.9px]">
                <label for="email">Email</label>
            </div>
            <input v-model="email" type="email" id="email" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[15px] px-[21px] font-inter text-[20px] focus:outline-none" placeholder="youremail@gmail.com"/>
            <!--pswd input-->
            <div class="mt-[26px] text-[#000] font-inter text-[20px] leading-[27.9px]">
                <label for="password">Password</label>
            </div>
            <div class="flex items-center w-full">
                <input v-model="password" type="password" id="password" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[15px] px-[21px] font-inter text-[20px] focus:outline-none"/>
                <div class="w-fit">
                    <img src="/img/eyeOff.svg" @click="togglePassword" class="absolute mt-[-5px] right-[50px]" alt=""/>
                </div>
            </div>
            <!--end--> 
            <!--button-->
            <button @click="signUpVerify" class="border font-[400] text-[20px] leading-[27.9px] mt-[30px] w-full text-[#fff] bg-[#0E43FF] p-[10px] text-center font-anton">
                Sign up
            </button>
            <!--end button-->
            <!---->
        <!--end form-->
        <div class="mt-[33px] pb-[60px] font-inter text-[#000] font-[400] text-[16px] leading-[22.32px] mx-auto w-fit">
            Already have an account? <span @click="goToLogin" class="text-[#FF0000]">login</span>
        </div>
    </main>
</template>

<style scoped>
input{
    border: 1px solid rgba(0, 0, 0, 0.5);
}
input:placeholder{
    color: rgba(0, 0, 0, 0.8);
}

</style>