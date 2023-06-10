<script lang="ts">
import { defineComponent } from 'vue'
import api from '../../api/client'
import router from '../../router/index'
export default defineComponent({
    data(){
        return{
            email: '',
            password: '',
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
        goToSignup(){
            router.push('/signup')
            window.scroll(0, 0)
        },
        async loginVerify(){
            try{
                const res = await api.post('/auth/login',
                {
                    email: this.email,
                    password: this.password
                });
                console.log(res.data)
                localStorage.setItem('access', res.data.access_token)
                localStorage.setItem('refresh', res.data.refresh_token)
                router.push('/app')
            }catch(err){
                console.log(err)
            }
        },
    }
})
</script>

<template>
    <main class="bg-[#fff] px-[27px]">
        <div class="w-[270px] text-[#000] mt-[98px] font-anton text-[32px] leading-[44.65px]">
            Welcome Back
            <div>Login</div>
        </div>
        <!--form-->
            <div class="mt-[104px] text-[#000] font-inter text-[20px] leading-[27.9px]">
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
            <div class="flex mt-[13px] justify-between">
                <div></div>
                <div class="font-[400] font-inter text-[#000] text-[16px] leading-[22.32px]">
                    Forget password?
                </div>
            </div>
            
            <!--button-->
            <button @click="loginVerify" class="border font-[400] text-[20px] leading-[27.9px] mt-[30px] w-full text-[#fff] bg-[#0E43FF] p-[10px] text-center font-anton">
                Login
            </button>
            <!--end button-->
            <!---->
        <!--end form-->
        <div class="mt-[33px] pb-[60px] font-inter text-[#000] font-[400] text-[16px] leading-[22.32px] mx-auto w-fit">
            Don&apos;t have an account? <span @click="goToSignup" class="text-[#FF0000]">Sign up</span>
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