<script lang="ts">
import { defineComponent } from 'vue'
import api from '../api/client'
export default defineComponent({
    methods: {
        async refreshToken(){
            if(localStorage.getItem('refresh')){
                const refresh_token = localStorage.getItem('refresh')
                try{
                    const res = await api.get('/auth/refresh', {
                        headers: {
                            'Authorization': `Bearer ${refresh_token}`
                        }
                    });
                    console.log(res.data)
                    localStorage.setItem('access', res.data.access_token)
                    localStorage.setItem('refresh', res.data.refresh_token)
                }catch(err){
                    console.log(err)
                }
            }else{
                console.log('Nothing to refresh.')
            }
        }
    },
    mounted(){
        this.refreshToken()
    }

})
</script>

<template>
    <div></div>
</template>