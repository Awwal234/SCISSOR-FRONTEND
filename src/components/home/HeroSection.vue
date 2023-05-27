<template>
    <div class="px-[27px] pt-[130px]">
        <div class="w-fit h-fit">
            <img src="/img/urlimage.png" class="w-full h-[178px]" loading="lazy" alt=""/>
        </div>
        <div class="mt-[75px] font-[400] text-[24px] leading-[33.49px] font-anton">
            Streamline Your Links with Our URL Shortener: 
            The Benefits of Shortening Long URLs
        </div>
        <!--get started button-->
        <router-link to="/login">
            <button class="mt-[54px] text-[16px] text-[#fff] font-[400] leading-[24.09px] cta_button bg-[#0E43FF] w-[152px] text-center p-[10px]">
                Get started
            </button>
        </router-link>
        <!--end get started button-->
    </div>
</template>

<style scoped>
.cta_button{
    border: 1px solid rgba(0, 0, 0, 0.8);
    font-family: 'Anton', sans-serif;
}

</style>