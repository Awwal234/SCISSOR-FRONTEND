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
            error: false,
            error_title: 'Error Signing up. Try again'
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
            if((this.name.length > 1) && (this.email.length > 1) && (this.password.length == 6)){
                try{
                    const res = await api.post('/auth/signup',
                    {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    });
                    console.log(res.data)
                    router.push('/login')
                }catch(err){
                    console.log(err)
                    this.error = true;
                    setTimeout(()=>{
                        this.error = false;
                    }, 4000)
                }
            }else {
                this.error = true;
                this.error_title = 'Complete the task inputs'
                setTimeout(()=>{
                    this.error = false;
                }, 4000)
            }
        },
    }
})
</script>

<template>
    <main class="bg-[#fff] px-[27px]">
        <div class="w-[270px] text-[#000] mt-[98px] font-anton text-[32px] leading-[44.65px]">
            Sign up  to get
            <div>started</div>
        </div>
        <!--form-->
            <!---->
            <div class="mt-[60px] text-[#000] font-inter text-[20px] leading-[27.9px]">
                <label for="name">Name</label>
            </div>
            <input v-model="name" type="text" id="name" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[10px] px-[21px] font-inter text-[16px] focus:outline-none" placeholder="John Doe"/>
            <!---->
            <div class="mt-[26px] text-[#000] font-inter text-[20px] leading-[27.9px]">
                <label for="email">Email</label>
            </div>
            <input v-model="email" type="email" id="email" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[10px] px-[21px] font-inter text-[16px] focus:outline-none" placeholder="youremail@gmail.com"/>
            <!--pswd input-->
            <div class="mt-[26px] text-[#000] font-inter text-[20px] leading-[27.9px]">
                <label for="password">Password</label>
            </div>
            <div class="flex items-center w-full">
                <input v-model="password" type="password" id="password" autocomplete="off" class="mt-[10px] bg-[#fff] w-full py-[10px] px-[21px] font-inter text-[16px] focus:outline-none"/>
                <div class="w-fit">
                    <img src="/img/eyeOff.svg" @click="togglePassword" class="absolute mt-[-5px] right-[50px]" alt=""/>
                </div>
            </div>
            <!--error spot-->
            <div v-show="error" class="w-[100%] bg-red-600 text-[14px] mt-[8px] font-inter text-[#fff] py-[3px] px-[8px]">
                {{error_title}}
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