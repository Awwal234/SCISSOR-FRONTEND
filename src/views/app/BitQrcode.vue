<script setup lang="ts">
//eslint-disbale-next-line no-unused-vars
import html2canvas from 'html2canvas';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderApp from '../../components/backup/HeaderApp.vue'
import ButtonBlue from '../../components/global/ButtonBlue.vue';
import VueQrcode from 'vue-qrcode'
const linkTitle = ref('')
const qrValue = ref('https://example.com')
const qrCode = ref(false)
const router = useRouter()

const powerQr=()=>{ 
    qrValue.value = linkTitle.value;
    qrCode.value = true;
}
const clearQr=()=>{
    if(linkTitle.value.length < 1){
        qrCode.value = false;
    }
}
const authCheck = () => {
    if(localStorage.getItem('access')){
        console.log('Access token found.')
    }else{
        router.push('/login')
    }
}

const downloadBtn=()=>{
    const qrCodeContainer = document.getElementById('qrCodeContainer');
      
    //@ts-ignore
    html2canvas(qrCodeContainer).then(canvas => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
    link.download = 'qrcode.png';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

onMounted(()=>{
    authCheck();
})
</script>

<template>
    <main class="bg-[#fff]">
        <HeaderApp/>
        <div class="px-[27px] pt-[160px]">
            <div class="text-[#000] font-inter font-[400] text-[20px] leading-[27.9px]">
                Bitly Link
            </div>
            <div class="pb-[25px]">
                <input @keyup="clearQr" v-model="linkTitle" placeholder="bit.ly/example" type="test" class="w-full text-[20px] font-inter font-[200] leading-[27.9px] py-[15px] px-[11px] mt-[12px] border focus:outline-none"/>
            </div>
            <ButtonBlue @click="powerQr" class="bg-[#0E43FF] border border-[#000] text-[#fff]" button-text="Generate QrCode"/>
            <div v-show="qrCode" id="qrCodeContainer" class="mx-auto w-[75%] h-fit mt-[30px]">
                <vue-qrcode id="canvas" class="w-full h-[250px]" :color="{ dark: '#000000ff', light: '#ffffffff' }" :value="qrValue" type="image/png"/>
            </div>
            <button v-show="qrCode" class="mt-[20px] text-center w-full py-[7px] font-inter text-[18px] bg-[transparent] border border-[#000] text-[#000]" @click="downloadBtn">Download QR Code</button>
        </div>
    </main>
</template>
