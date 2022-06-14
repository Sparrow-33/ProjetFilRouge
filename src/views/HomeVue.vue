<template>
<div>
    <NavBar/>
    <HeroBan/>
<FooterVue/>
</div>    
</template>

<script>

import HeroBan from '@/components/HeroBan.vue'
import NavBar from '@/components/NavBar.vue'
import FooterVue from '@/components/FooterVue.vue'

export default{
name:"HomeVue",

components:{
    HeroBan,
    NavBar,
    FooterVue,
}

}
</script>